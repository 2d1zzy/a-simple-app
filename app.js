var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== ""){
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val(""); 
        }
    };

    $(".comment-input button").on("click", function (event){
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keydown", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
      })

      var $newUL = $("<ul>");
      var $listItemOne = $("<li>").text("this is the first item on the list");
      var $listItemTwo = $("<li>").text("this the second");

      $newUL.append($listItemOne);
      $newUL.append($listItemTwo);

      $("main").append($newUL);

      var $newParagraphElement = $("<p>");
      $newParagraphElement.text("this is a test paragraph")


      $("ul li:first-child").remove();
      $newUL.empty();
      $("footer").fadeOut();
      
      $("footer").append($newParagraphElement);
}

$(document).ready(main);