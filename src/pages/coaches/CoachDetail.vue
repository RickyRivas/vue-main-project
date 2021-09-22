<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <header>
      <base-card>
        <h2>Interested? Reach out now.</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </base-card>
    </header>
    <router-view></router-view>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      //initially set to null and will reviev new value once this => CoachDetail component is created.
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    // area() computed prop will return the selected coach expertise areas data and provide it to the base badge
    // this is automatically triggered since the instance is being used within the base badge
    areas() {
      return this.selectedCoach.areas;
    },
    // this will return the hourly rate of the selected coach and return the value to the basecard interlope
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    }
  },
  // when this component is created it will get the coaches getter and find which coach id is = to the id that is-
  // being recieved from the props. The found coach will then be set as the value of selectedCoach
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>

BaseCard
