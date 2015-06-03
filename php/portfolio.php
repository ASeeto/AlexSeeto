<?php
    require('../lib/config.php');
    $db = connect_db();
    $item_type = $_GET['item_type'];
    /**
    * Return data to build pop-ups and divs for portfolio items
    */
    if($item_type != "") {
        $sql = "SELECT * FROM Portfolio_Items WHERE type = \"$item_type\" ORDER BY year desc";
    } else {
        $sql = "SELECT * FROM Portfolio_Items ORDER BY year desc";
    }
    $result = mysqli_query($db,$sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($db));
        exit();
    }
    while($row = mysqli_fetch_array($result))
    {
        $results[] = array(
            'id'          => $row['id'],
            'title'       => $row['title'],
            'type'        => $row['type'],
            'tools'       => $row['tools'],
            'title'       => $row['title'],
            'description' => $row['description'],
            'link'        => $row['link'],
            'img'         => $row['img'],
            'git'         => $row['git'],
            'year'        => $row['year']
        );
    }
    echo json_encode($results);
?>