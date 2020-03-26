$(document).ready(function() {
   $("textarea").keyup(function() {
       $.post("note?action=Save&title="+$("#title").val()+"&content=" + $("#content").val(), function() {
           //document.getElementById("message").innerHTML = response;
           
       });
   });
});

