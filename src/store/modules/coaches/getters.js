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
  }
};
