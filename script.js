/*Script Marcas baja lento*/
$(document).ready(function(){
 $(".scroll").click(function(event){
 event.preventDefault();
 var offset = $($(this).attr('href')).offset().top;
 $('html, body').animate({scrollTop:offset}, 2000);
 });
});
</script>

/*Script Menu baja con la pagina*/
$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });
});
</script>
