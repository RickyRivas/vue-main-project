<template>
  <section>
    <base-card>
      <h2>Register as a coach</h2>
      <!-- save-data is the custom event and saveData will trigger once submitted -->
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  methods: {
    // saveData takes the data from the coach form and dispatches it to the registerCoach action
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // After we submit the data and create the new coach => push us to the coaches list page and replace wont
      // allow us to go back
      this.$router.replace('/coaches');
    }
  }
};
</script>
