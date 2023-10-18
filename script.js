$( document ).ready(function(){
    var URL = "https://static.codehs.com/api/12345/movies/all";
            
//console.log(URL);

function findReleaseDate(movie){
   var releaseDate = data[movie];
     $("#release-date").text(releaseDate);
    $.getJSON(URL, function(data){
    //console.log(data[0]);

});

for(var index = 0; index < data.objects.length; index++){
           var releaseDate = data.objects[index].movie.releaseDate;
           if(releaseDate.indexOf(movie) > 0){
                $("#search").append(releaseDate);
           }
         }
     }
 });