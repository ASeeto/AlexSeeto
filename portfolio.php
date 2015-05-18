<?php
	require('dbconfig.php');

    # Init the MySQL Connection
    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD); 
    if(!$dbc){ 
        die('Could not connect: ' . mysql_error()); 
    } 
    mysqli_select_db($dbc,DB_DATABASE);
    $type = $_POST['selected_pf_item_type'];
    
    # Prepare the SELECT Query
    $selectAll   = 'SELECT * FROM Portfolio_Items ORDER BY id asc';
    # $selecttType = 'SELECT * FROM pfitems WHERE type=\'Website\'';

    # Execute the SELECT Query
    if(!($selectRes = mysqli_query($dbc,$selectAll))){
        echo 'Retrieval of data from Database Failed';
    }else{
        echo "<h1>Portfolio</h1>";
        echo "<div id=\"pf_pops\">";
        if( mysqli_num_rows( $selectRes )==0 ){
            echo '<p>No Rows Returned</p>';
        }else{
            while( $row = mysqli_fetch_assoc( $selectRes ) ){
                # Create Portfolio Pop-Up
                echo "<div class=\"md-modal md-effect-1 popBox\" id=\"pf_item{$row['id']}\">
                        <div class=\"md-content\">
                        <div class=\"toolbar\">
                        <div class=\"md-close\"></div>
                        <div class=\"md-details\"></div>
                        </div>
                        <img class=\"gallery\" src=\"img/portfolio/{$row['img']}\">
                        <div class=\"details\">
                        <h3>{$row['title']}</h3>
                        <p><b>Tools: </b>{$row['tools']}</p>
                        <p><b>Description: </b>{$row['description']}</p>";
                        if("{$row['link']}")
                        	echo "<p><b>Link: </b><a href={$row['link']} target=\"_blank\">{$row['link']}</a></p>";
                        if("{$row['git']}")
                        	echo "<p><b>Source Code: </b><a href={$row['git']} target=\"_blank\">{$row['git']}</a></p>";
                echo "</div>
                       	</div>
                        </div>";
            }
        }
        echo "<div class=\"md-overlay\"></div></div>";
    }

    # Execute the SELECT Query
    if(!($selectRes = mysqli_query($dbc,$selectAll))){
        echo 'Retrieval of data from Database Failed';
    }else{
        echo "<div id=\"pf_items\">";
        if( mysqli_num_rows( $selectRes )==0 ){
            echo '<p>No Rows Returned</p>';
        }else{
            while( $row = mysqli_fetch_assoc( $selectRes ) ){
                # Create Portfolio Div
                echo "<div class=\"md-trigger pf_item\" data-modal=\"pf_item{$row['id']}\" style=\"background-image: url(img/portfolio/{$row['img']})\">
                        <div class=\"pf_label\">
                        <h2>{$row['title']}</h2>
                        <p class=\"pf_shortdesc\">{$row['type']}</p>
                        </div>
                        </div>";
            }
        }
        echo "</div>";
    }
?>
<script src="js/init_portfolio.js"></script>
<script src="js/classie.js"></script>
<script src="js/modalEffects.js"></script>