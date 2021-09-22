export default {
  // registerCoach will take the data from the dispatch and create a new coach object and then commit the
  // registerCoach mutation and also the new coachData object
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    context.commit('registerCoach', coachData);
  }
};
