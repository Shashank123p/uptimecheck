function onClickSubmit(){
	// First check whether email ID and password is correct. 
	// Send email ID and password to  the backend
	// If we get Ok response
	// Redirect to dashboard.html
	// If we get error response
	// Alert - please check your username and password

	var theUrl = "http://192.168.95.102:8002/users"
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    alert(xmlHttp.responseText);
}


$("#loginSubmit").click(function(){
    //$.get("http://192.168.95.102:8002/users", function(data, status){
    //    alert("Data: " + data + "\nStatus: " + status);
    //});

     $.ajax({
            url: "http://192.168.95.102:8002/users",
            type: "GET",
            crossDomain: true,
            "headers": {
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          	},
            success: function (response) {
                var resp = JSON.parse(response)
                alert(resp.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
});



