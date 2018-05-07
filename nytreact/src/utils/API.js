/* global $ */
import axios from "axios";

// Export an object containing methods we'll use for accessing the NYT API




export default {
  searchArticles: function (topic, beginDateString, endDateString) {
    const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const authKey = "e9f9e4443ee54cb3a1fbca346832a34e";
    const query = "Johnson";
    const start = "19650629";
    const end = "19650630";
    let queryURL = queryURLBase + authKey + query + start + end;
    return axios.get(queryURL);
    // {
    //   params:
    //     {
    //       'api-key': authKey,
    //       'q': topic,
    //       'begin_date': beginDateString,
    //       'end_date': endDateString,
    //     }
  },

  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Gets all saved articles
  getSavedArticles: function () {
    return axios.get("/api/articles");
  },
  // Deletes a saved article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  }
};

  // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // url += '?' + $.param({
  //   'api-key': "e9f9e4443ee54cb3a1fbca346832a34e",
  //   'q': "Johnson",
  //   'begin_date': "19650629",
  //   'end_date': "19650630"
  // });

  // // above url and keys passed Postman tests

  // axios({
  //   url: url,
  //   method: 'GET',
  // }).then(function(result) {
  //   console.log(result);
  // // }).fail(function(err) {
  // //   throw err;
  // });

  // console.log (url);
  // }
// };
//   };
// };
