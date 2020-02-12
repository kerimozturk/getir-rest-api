# getir-rest-api

POST : http://18.197.35.166:8000/api/v1/records

Sample Request:

{ 
  "startDate": "2016-01-26", 
  "endDate": "2018-02-02", 
  "minCount": 2900, 
  "maxCount": 3000 
}

Sample Response:

{
  "code":0,
  "msg":"Success",
  "records":[
    {
      "key":"TAKwGc6Jr4i8Z487",
      "createdAt":"2017-01-28T01:22:14.398Z",
      "totalCount":2900
    },
    {
      "key":"NAeQ8eX7e5TEg7oH",
      "createdAt":"2017-01-27T08:19:14.135Z",
      "totalCount":3000
    }
  ]   
}
