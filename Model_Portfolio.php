<?php

require('dbconfig.php');
$db = connect_db();

class Model_Portfolio {

    /**
    * Build Portfolio Popups
    */
    public function build_popups($type) {
        global $db;
        if(isset($type)) {
            $sql = "SELECT * FROM Portfolio_Items WHERE type=\'$type\' ORDER BY id asc";
        } else {
            $sql = "SELECT * FROM Portfolio_Items ORDER BY id asc";
        }
        $result = mysqli_query($db,$sql);
        while( $row = mysqli_fetch_assoc( $result ) ){
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

    /**
    * Build Portfolio Items
    */
    public function build_divs() {
        global $db;
        if(isset($type)) {
            $sql = "SELECT * FROM Portfolio_Items WHERE type=\'$type\' ORDER BY id asc";
        } else {
            $sql = "SELECT * FROM Portfolio_Items ORDER BY id asc";
        }
        $result = mysqli_query($db,$sql);
        while( $row = mysqli_fetch_assoc( $result ) ){
            # Create Portfolio Div
            echo "<div class=\"md-trigger pf_item\" data-modal=\"pf_item{$row['id']}\" style=\"background-image: url(img/portfolio/{$row['img']})\">
                    <div class=\"pf_label\">
                    <h2>{$row['title']}</h2>
                    <p class=\"pf_shortdesc\">{$row['type']}</p>
                    </div>
                    </div>";
        }
    }

}

?>