<?php
    $nombreFormulario = $_POST["nombre"];
    $telefonoFormulario = $_POST["telefono"];
    $comentarioFormulario = trim($_POST["comentario"]);

    $rspta = array("nombreAPI" => $nombreFormulario, "telefonoAPI" => $telefonoFormulario, "comentarioAPI" => $comentarioFormulario);
    echo json_encode($rspta);
?>