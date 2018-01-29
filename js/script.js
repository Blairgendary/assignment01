$(document).ready(function() {
    $(".about-wrapper").hide();
    $(".live-beat-wrapper").hide();
    $(".article-item p").hide();
    $(".title1").click(function() {
        $(".article1 p").slideToggle(600);
    });
    $(".title2").click(function() {
        $(".article2 p").slideToggle(600);
    });
    $(".music-beat").click(function() {
        $(".about-wrapper").fadeOut();
        $(".live-beat-wrapper").fadeOut();
        $(".music-beat-wrapper").fadeIn(); 
    });
    $(".about").click(function() {
        $(".music-beat-wrapper").fadeOut();
         $(".live-beat-wrapper").fadeOut();
        $(".about-wrapper").fadeIn(); 
    });
    $(".live-beat").click(function() {
        $(".music-beat-wrapper").fadeOut(); 
        $(".about-wrapper").fadeOut();
        $(".live-beat-wrapper").fadeIn(); 
    });
});