export default {
  // register coach will take the new coach object and push it to the coaches array
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  // set the local coaches to the coaches fetched from firebase
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimeStamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
