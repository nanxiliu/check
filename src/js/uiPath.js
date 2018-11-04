function authenticate() {
    $(document).ready(function() {
        $.ajax({
            type: "POST",
            url: "{orchestrator-url}/api/account/authenticate",
            loginModel:{
                "tenancyName": "adela",
                "usernameOrEmailAddress": "adelaideoh@gmail.com",
                "password": "snowieowl3!"
              },
         });
    });
};

function jobRequest() {
    $(document).ready(function() {
        $.ajax({
            type: "POST",
            url: "{orchestrator-url}/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",
            startJobParameters:{
                "startInfo": {
                  "ReleaseKey": "4114875f-50d7-4753-b90d-521a0e02c721",
                  "Strategy": "All",
                  "RobotIds": []}
            }
        });
    });
};

window.onload = function() {
    authenticate();
    jobRequest();
};