// make an if else for try this button 




//on click submit button for the form 

//triedYet on click to update info in database from true to false 




$(function() {
  $(".subby").on("click", function(event) {
    var id = $(this).data("id");
    var newTried = $(this).data("triedYet");
if(newTried == true){
    newTried == false;
}else{
    newTried == true;

    var tried = {
      triedYet: newTried
    };
  
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: tried
    }).then(
      function() {
        console.log("TESTTTSGUW")
        location.reload();
      }
    );
  }})})     












// $(function () {
//   $(".subby").on("click", function (event) {
//     var id = $(this).data("id");
//     if ($(this).data("triedYet") == 0) {
//       var tried = 1;
//       $(this).attr("data-triedYet", 1)
//       }
//     else {
//       var tried = 0
//       $(this).attr("data-triedYet", 0);
//     };
//     var newTried = {
//       triedYet: tried
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newTried
//     }).then(
//       function () {
//         console.log("TESTTTSGUW");
//         location.reload();
//       }
//     );
//   })

// });