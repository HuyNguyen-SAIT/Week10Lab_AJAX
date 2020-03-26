$(document).ready(function() {
   $("textarea").keyup(function() {
       
       $.post("note?action=save&id="+$("#selectedNote").val()+"&content=" + $("#content").val(), function(response) {
           
           document.getElementById("message").innerHTML = response;
           
       });
   });
});

