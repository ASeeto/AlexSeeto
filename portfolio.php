<h1>Portfolio</h1>

<?php
    require('Model_Portfolio.php');
	echo "<div id=\"pf_pops\">";
    $type = $_POST["type"];
    Model_Portfolio::build_popups($type);
    echo "<div class=\"md-overlay\">";
    echo "</div></div>";
    echo "<div id=\"pf_items\">";
    Model_Portfolio::build_divs();
    echo "</div>";
?>
<script src="js/init_portfolio.js"></script>
<script src="js/classie.js"></script>
<script src="js/modalEffects.js"></script>