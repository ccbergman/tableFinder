$(document).ready(function () {
    console.log("Hi");

    var tableIsReserved;

    $(".table").on("click", function () {
        if ($(this).hasClass("available")) {
            $("#reserveForm").slideDown().css("display", "block");
            tableIsReserved = $(this);
        }
    });

    $("#saveReservation").on("click", function () {
        if ($(".table.available")) {
            $(tableIsReserved).removeClass('available').addClass('reserved');
            $(tableIsReserved).css("cursor", "not-allowed");
            $(tableIsReserved).css("color", "#EEE");
            $(tableIsReserved).css("background-color", "#ADAAAA");
            $("#reserveForm").css("display", "none");
        }
    });

    $(".exitIcon").on("click", function () {
        $("#reserveForm").css("display", "none");
    });
});