//check off a specific todo by clicking

//the following function means that when an li is clicked in a ul, then run this code
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//remove a todo by clicking its corresponding X
$("ul").on("click", "span", function (event) {
  //stop event-bubbling
  event.stopPropagation();

  //remove the parent li of the clicked span. Do this with a fade out effect.
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});

//add new todos

$("input[type=text]").on("keypress", function (event) {
  //console.log("key pressed!");

  //check for enter key which has code = 13
  if (event.which == 13) {
    var todo_text = $(this).val();

    //create a new LI and add the todo_text to it

    $("ul").append("<li><span>X</span> " + todo_text + "</li>");

    //clear input
    $(this).val("");
  }
});
