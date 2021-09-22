<template>
  <section>
    <!-- '@change-filter' is the custom event emitted from the coach filter component -->
    <coaches-filter @change-filter="setFilters"></coaches-filter>
  </section>
  <base-card>
    <div class="controls">
      <!-- setting the mode to 'outline' will dynamically set the styles through props  -->
      <base-button mode="outline">Refresh</base-button>
      <!-- Since the base-button below is a path/link we set 'link' to true so it can be a router-link -->
      <!-- The logic for determining whether the base-button is a link or not is set in the root component-->
      <base-button link to="/register">Register as coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches found</h3>
  </base-card>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import CoachesFilter from '../../components/coaches/CoachFilter.vue';
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  components: { CoachItem, BaseButton, CoachesFilter },
  // we use computed props to get the coaches array from the coaches module
  computed: {
    //  gets the coaches array via $store and returns it to filteredCoaches
    // for each coach that matches the new filter, it will be dynamically inserted into the coaches list array
    // the :key will be coach.id instead of just coach because we're trying to output a specific coach based on
    // their id
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        // conditional: if this.activeFilters.frontend is truthy and coach.areas includes the 'frontend' value
        // within the object return
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    // seperated computed property which retrieves the hasCoaches() getter and provides the data
    // if there is no data, the v-else text will output instead
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods: {
    // the updatedFilters data came through the custom event and provides the new updatedFilters array
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
