<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
        <ul v-if="hasRequests">
          <!-- getting data from the action -->
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You havent received any requests yet</h3>
      </header>
    </base-card>
  </section>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    // this gets the requests array and returns it for this component to use
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    // this function is to see if there are any requests. if so the items will appear, not the v-else will render
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  }
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
