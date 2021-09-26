export default {
  // requests(state, getters, rootState, rootGetters)
  requests(state, _, _2, rootGetters) {
    // get the userId from the root vuex index.js
    const coachId = rootGetters.userId;
    //return the state.requests and filter them out depending on coach id
    // filter: check all of the requests and see if req.coachId is equal to the coachId constant
    // we're using 'req' becuase its req of receivedRequests
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    // we're checking the filtered requests from the requests getter above
    return state.requests && getters.requests.length > 0;
  }
};
