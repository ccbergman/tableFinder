$(document).ready(function () {
    console.log("Hi");

    var tableIsReserved;
    var tableData = [];
    for (var i = 1; i < 11; i++) {
        var seating = { name: "", count: 0 };
        tableData.push(seating);
    }

    $(".table").on("click", function () {
        if ($(this).hasClass("available")) {
            $("#reserveForm").slideDown("slow").css("display", "block");
            $("#guestName").val("");
            $("#guestPartySize").val("");
            tableIsReserved = $(this);
            var tablenum = $(this).attr("data-tablenum");
            $("#tableNumber").text("Table: " + tablenum);
        }
    });

    $("#saveReservation").on("click", function () {
        if ($(".table.available")) {
            $(tableIsReserved).removeClass('available').addClass('reserved');
            $(tableIsReserved).css("cursor", "not-allowed");
            $(tableIsReserved).css("color", "#EEE");
            $(tableIsReserved).css("background-color", "#ADAAAA");

            var tablenum = $(tableIsReserved).attr("data-tablenum");

            var gName = $("#guestName").val();
            var gCount = $("#guestPartySize").val();
            tableData.splice(tablenum, 1, { name: gName, count: gCount });

            $("#reserveForm").fadeOut("slow");
        }
    });

    $(".exitIcon").on("click", function () {
        $("#reserveForm").fadeOut("slow");
    });
});