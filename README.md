This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# GEOLOCATION BALLOT INFO

This app combines Google Map and Google Civic Information API to give users ballot information based on geolocation.


Based on Google Civic Information API A ```GET``` request to ```  https://www.googleapis.com/civicinfo/v2/elections?key=<YOUR_API_KEY>
``` will return:


```{
    "kind": "civicinfo#electionsqueryresponse",
    "elections": [
     {
      "id": "2000",
      "name": "VIP Test Election",
      "electionDay": "2013-06-06"
     },
     {
      "id": "2124",
      "name": "Rhode Island 2012 Primary Election",
      "electionDay": "2012-09-11"
     },
     {
      "id": "2126",
      "name": "Delaware 2012 Primary Election",
      "electionDay": "2012-09-11"
     }
    ]
   }
```