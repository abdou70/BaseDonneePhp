<?php
// function connectionDB(){
    $host = 'localhost';
    $dbName = 'dbexo';
    $user = 'root';
    $password = '';

    try {
        $db = new PDO('mysql:host='.$host.';dbname='.$dbName, $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8', PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
        echo '<script>console.log("CONNECTED TO SERVER DB SUCCESSFULLY")</script>';
        
    }
     catch (Exception $e) {
        echo "<h1> Erreur </h1>";

    }
    // return $db;
// }