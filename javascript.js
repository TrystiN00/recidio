//var $arrow = $("#arrow")    var arrow = getElementById("#arrow")
 //.addEleventLisener
 $("#arrow").on("click", function () {              //nasluchuje
    $("body, html").animate({
        scrollTop: $("main, body").offset().top      // scrollTop - o ile ma sie przesunac offsetmierzy odległosc od top                   
    }, 1200)                                         // czas w jakim ma sie przesunac
})     
    //body przesunie sie o odleglosc dlugosci przegladarki w czasie 1200ms
