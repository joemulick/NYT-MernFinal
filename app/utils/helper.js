// Here we will utilize the axios library to perform GET/POST requests
// var axios = require("axios");
import axios from "axios";

// API key for New York Times
var authKey = "8707840eda344f6690eff9f5d8de8b65";

// Exporting an object with methods for retrieving and posting data to our API
var helper =  {
  // Returns a promise object we can .then() off inside our Parent component
  searchArticles: function(queryTerm) {

  	console.log(queryTerm);

  	var begURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

  	var queryURL = begURL + "&q=" + queryTerm;

  	return axios.get(queryURL).then(function(response) {

      return response.data.response.docs;

    });

  },
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveClicks: function(clickData) {
    return axios.post("/api", clickData);
  }
};

export default helper;
