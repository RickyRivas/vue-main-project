export default {
  // all mutations take state
  // the payload will hold the request data and push it to the requests array
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    // the payload being the array full of requests
    // 'requests' from actions
    state.requests = payload;
  }
};
// actions receive data from the action!
