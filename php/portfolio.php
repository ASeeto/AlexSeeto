<?php

//======================================================================
//                         DATABASE CONNECTION
//======================================================================

function getConnection() {
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

//======================================================================
//                         GET PORTFOLIO ITEMS
//======================================================================

try {
    $db = getConnection();
    $sql = "SELECT * FROM projects ORDER BY year desc";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($results);
} catch (PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
}

?>