<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
<meta charset="UTF-8">
<meta name="description=" content="Alexander Seeto Alex Seeto Portfolio Web Developer Software Engineer Graphic Designer">
<title>Alexander Seeto</title>
<link rel="icon" href="img/favicon.png" type="image/x-icon" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/component.css" rel="stylesheet" type="text/css" />
<link href="css/contact.css" rel="stylesheet" type="text/css" />
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/scroll.js"></script>
<script src="js/init_experience.js"></script>
</head>

<body>

<div id="header">
    <div class="valignwrap">
        <div class="valign">
            <div class="valigncontent">
                <h1 class="title">Alexander Seeto</h1>
                <p class="subtitle">Web Developer, Software Engineer, Graphic Designer</p>
                <hr></hr>
                <p>
                <a href="https://www.linkedin.com/in/alexanderseeto" class="top" target="_blank"><img src="img/linkedin.png" class="icon"></a>
                <a href="https://github.com/ASeeto" class="top" target="_blank"><img src="img/git.png" class="icon"></a>
                <a href="https://www.facebook.com/seeto.alex" class="top" target="_blank"><img src="img/facebook.png" class="icon"></a>
                <a href="https://twitter.com/alexseeto" class="top" target="_blank"><img src="img/twitter.png" class="icon"></a>
                <a href="http://www.pinterest.com/seetoalexander" class="top" target="_blank"><img src="img/pinterest.png" class="icon"></a>
                </p>
                <hr></hr>
            </div>
        </div>
    </div>
</div>

<div id="page">
<p><a href="#foot" class="bottom"><img src="img/bottom.png"></a><a href="#header" class="top"><img src="img/top.png"></a></p>
</div>
<div id="nav" class="shadow-bottom">
    <ul>
    <li>
        <a href="#header"><p>home</p></a>
    </li>
    <li>
        <a href="#about"><p>about</p></a>
    </li>
    <li>
        <a href="#experience"><p>experience</p></a>
    </li>
    <li>
        <a href="#portfolio"><p>portfolio</p></a>
    </li>
    <li>
        <a href="#contact"><p>contact</p></a>
    </li>
    </ul>
</div>

<section id="about">
<div id="container">
<?php require 'about.php'; ?>
</div>
</section>

<section id="experience">
<div id="container">
<?php require 'experience.php'; ?>
</div>
</section>

<section id="portfolio">
<div id="container">
<?php require 'portfolio.php'; ?>
</div>
</section>

<section id="contact">
<div id="container">
<?php require 'contact.php'; ?>
</div>
</section>
</div>

<div id="footer">
    <br><br><br><br>
    <div id="foot">
    <a href="https://www.linkedin.com/in/alexanderseeto" class="top" target="_blank"><img src="img/linkedin.png" class="icon"></a>
    <a href="https://github.com/ASeeto" class="top" target="_blank"><img src="img/git.png" class="icon"></a>
    <a href="https://www.facebook.com/seeto.alex" class="top" target="_blank"><img src="img/facebook.png" class="icon"></a>
    <a href="https://twitter.com/alexseeto" class="top" target="_blank"><img src="img/twitter.png" class="icon"></a>
    <a href="http://www.pinterest.com/seetoalexander" class="top" target="_blank"><img src="img/pinterest.png" class="icon"></a>
    </p>
    </div>
</div>

</body>
</html>