<?php

//local variables
// $dsn = "mysql";
// $host = "localhost";
// $port = "3306";
// $dbname = "netmatters reflection";
// $user = "root";
// $pass = "";

//production variables
$dsn = "mysql";
$host = "localhost";
$port = "2083";
$dbname = "adampear_netmatters_reflection";
$user = "adampear_adampearson";
$pass = "Rossidude1994!";

try {
    $db = new PDO("$dsn:host=$host;port=$port;dbname=$dbname", $user, $pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Unable to connect - ";
    echo $e->getMessage();
    exit;
}
