$(function(){
    $("#formContacto").on("submit",function(event){
        event.preventDefault();
        var formData = new FormData($("#formContacto")[0]);
        $.ajax({
            type: "POST",
            url: "./controllers/procesa_datos.php",
            data: formData,
            processData: false,  // Necesario para enviar FormData correctamente
            contentType: false,  // Necesario para enviar FormData correctamente
            dataType: "json",
            success: function (rsptaAPI) {
                console.log(rsptaAPI);
                alert("Gracias " + rsptaAPI.nombreAPI + " en breve nos contactaremos contigo")
            },
            error: function(xhr, status){
                console.log("Error procesando la peticion");
            }
        });
    })
})