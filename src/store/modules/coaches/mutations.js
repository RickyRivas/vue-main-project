export default {
  // register coach will take the new coach object and push it to the coaches array
  registerCoach(state, payload) {
    state.coaches.push(payload);
  }
};
