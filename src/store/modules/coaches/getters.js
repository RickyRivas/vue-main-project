export default {
  // the name of the getter will be coaches because thats the name of the data we're getting
  // the getter will recieve (state) and will RETURN state.coaches
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    // below will see if state.coaches is truthy && if there is atleast 1 coach in the list
    // if false => will output a string with the text 'no coaches available' or similar
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    // grab the coaches array and assign it here to coaches
    const coaches = getters.coaches;
    // grab userId() from the rootGetters and assign it here to userId
    const userId = rootGetters.userId;
    // will return true by going through the coaches array and seeing if any of the coaches in the current array
    // have an id that match the new userId from the new coach
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    // if more than a minute ago
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};
