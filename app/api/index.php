<?php

//======================================================================
//                             SLIM SETUP
//======================================================================

require 'vendor/autoload.php';
$app = new \Slim\Slim();
$app->get('/projects', 'getProjects');
$app->run();

//======================================================================
//                              PROJECTS
//======================================================================

function getProjects() {
    try {
        /** Connect to database */
        $db = getConnection();
        
        /** Use session ID to get profiles */
        $sql = "SELECT * FROM projects p ORDER BY p.date desc;";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $projects = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($projects);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

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

?>