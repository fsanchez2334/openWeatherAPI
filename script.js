$(document).ready(function(){
    $("#search").click(function() {
        //alert("This works");
 
        var searchVal=$("#search-bar").val();
        var first= "https://api.apixu.com/v1/current.json?key=c0ebe75731ec4c92b17131840171201&q=";
        var url=first + searchVal;

    $.getJSON(url,function(response){
        var temp=response.current.temp_f;
        var humidity=response.current.humidity;
        var wind=response.current.wind_mph;

            $("body").append(temp + " ");
            $("body").append(humidity + " ");
            $("body").append(wind);

        });
     });
});    
