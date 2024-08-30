$(document).ready(function () {

    $("#myCarousel").mouseover(function () {
        $("#myCarousel .carousel-control").show();
    });

    $("#myCarousel").mouseleave(function () {
        $("#myCarousel .carousel-control").hide();
    });

    $("#thumbCarousel .thumb").on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

    });

    $('#myCarousel').on('slid.bs.carousel', function () {
        const index = $('.carousel-inner .item.active').index();
        const thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="' + index + '"]');
        thumbnailActive.addClass('active');
        $(thumbnailActive).siblings().removeClass("active");
    });
});