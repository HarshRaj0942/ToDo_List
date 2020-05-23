//check off a specific todo by clicking
$("li").on("click", function () {

    $(this).toggleClass("completed");
});

//remove a todo by clicking its corresponding X
