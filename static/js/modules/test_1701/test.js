/*
function myFunction() {
	if (flag == true){
  		document.getElementById("test").innerHTML=" I love you shashank";
  		flag = false;
  	}
  	else {
  		document.getElementById("test").innerHTML=" I love you Aniruddh";
  		flag = true;
  	}
}*/

$(document).ready(function() { 
    var flag = false;
    $("#test-btn").click(function() { 
        // Change text of p element
        if(!flag)
        {
          $("#test2").html("<p> I love you shashank</p>");
          flag = true;
        }
        else
        {
          $("#test2").html("<p> I love you aniruddh</p>");
          flag = false;
        }
         
    }); 
        
}); 