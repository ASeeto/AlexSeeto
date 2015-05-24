<h1>Portfolio</h1>
<center>
<form>
<select name="items" onchange="showItems(this.value)">
    <option value="" selected disabled>Select Type of Projects to Display</option>
    <option value="">All</option>
    <option value="Website">Website</option>
    <option value="Flyer">Flyer</option>
    </select>
</form>
</center>
<div id="pf_pops"></div>
<div id="pf_items"></div>
<script src="js/init_portfolio.js"></script>
<script src="js/classie.js"></script>
<script src="js/modalEffects.js"></script>