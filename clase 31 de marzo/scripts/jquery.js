
function suma(a,b){
    return a+b

}

$(document).ready(function(){
    $("#oculto").hover(function(){
        $(this).css("color", "black");
    },
    function(){
        $(this).hide();
        // $(this).css("display", "none");
    })
    
    var a  = 8;
    var b = 6;
    $("#resultadoSuma").html("Hola" + suma(a,b) + "probando")
    
    $(function() {
        $(".rslides").responsiveSlides();
      });

})



if(document != null){

}