$(document).ready(function(){
    
    $('[data-toggle="tooltip"]').tooltip()
    
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente");
    });
    //carousel poppover
    
    $('[data-toggle="popover"]').popover();

    $(".card-title").click(function(){
        $(".card-body p").toggle();
    });

});