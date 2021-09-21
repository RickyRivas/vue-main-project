<template>
  <section>
    FILTER
  </section>
  <base-card>
    <div class="controls">
      <!-- below 'outline' mode is the class name that will dynamically be inserted to the button via props  -->
      <base-button mode="outline">Refresh</base-button>
      <!-- below base button is a link. the link prop sets 'link' to true and the base button component will return router link -->
      <base-button link to="/register">Register as coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.firstName"
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
export default {
  components: { CoachItem, BaseButton },
  // computed is where we retrieve our Getters
  computed: {
    // retrieves the namespace: coaches and the coaches getter and returns it to filteredCoaches
    // in v-for => 'filteredCoaches' will be the iterated array name instead of 'coaches'
    // the :key will be coach.id instead of coach because we're trying to output a specific coach based on their id
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    // seperated computed property which retrieves the hasCoaches() getter and provides the data
    // if there is no data, the v-else text will output instead
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
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
