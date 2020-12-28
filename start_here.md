# Your Mission
At CIRRUS, we build software for Departments of Transportation (DOTs) to help them make roadways safer and more efficient. In order to do that, we deploy Roadside Units (RSUs) that send Connected Vehicle data to CIRRUS. Once an RSU is deployed, DOTs need a way to monitor and manage those units, so we provide an RSU Management application for that purpose.

Given an api response of [example_rsu_query_response.json] we need to be able to view this data in a way that will help DOTs figure out if any RSUs are having any issues.  

Your mission here is to follow the wireframe [https://wireframe.cc/NHmML6] (or if the link doesn't work just use the image in this file) given to mock up a single page application that will accept the exemple api response given above. You will create the table that houses the data. Then if a user sees an RSU that they are interested in they can click on it and see the status details in the right hand panel.  The user should also be able to clear the selection using a button in the panel. If the RSU has a green status then there will be a null error state.  If the rsu has a red status then the error state should be shown in the panel under the rsu status text field. 

For this page you may use any framework you know (React, Vue, Angular, etc) and you do not need to worry about perfect CSS. But you will be expected to show and your code and application, and explain how you would test this application.  

