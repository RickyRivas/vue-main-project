export default {
  // all mutations take state
  // the payload will hold the request data and push it to the requests array
  addRequest(state, payload) {
    state.requests.push(payload);
  }
};
