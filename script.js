$(document).ready(function () {
    console.log("Hi");

    $(".table").on("click", function () {
        $("#reserveForm").css("display", "block");
    });


    $(".exitIcon").on("click", function () {
        $("#reserveForm").css("display", "none");
    });


    
});