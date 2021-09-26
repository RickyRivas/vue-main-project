export default {
  // registerCoach will take the data from the dispatch and create a new coach object and then commit the
  // registerCoach mutation and also the new coachData object
  // we insert 'async' before the registerCoach actions because of the promise were initiating
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    // fetch returns a promise
    // assign the result to a variable
    const response = await fetch(
      `https://vue-http-demo-9e210-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        // current data will be overwritten if existent or will be created => put request
        method: 'PUT',
        // the JSON.stringify will take our coach data and convert to JSON to send to firebase
        body: JSON.stringify(coachData)
      }
    );
    // this following line of code with trigger when the fetch is done. we take that fetched data
    // and assign it to 'responseData'\

    // since we're not using the response data, we're going to comment it out
    // const responseData = await response.JSON()

    if (!response.ok) {
      //error
    }

    context.commit(
      'registerCoach',
      // copy the coachdata and set id: to userId
      { ...coachData, id: userId }
    );
  },

  // load coaches from firebase
  async loadCoaches(context) {
    // fetch all of the coaches
    const response = await fetch(
      `https://vue-http-demo-9e210-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  }
};
