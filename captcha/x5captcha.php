<?php
include("../res/x5engine.php");
$nameList = array("ath","zum","3kt","evh","vkn","6fz","p8f","x7v","dtk","p7d");
$charList = array("R","H","Y","S","A","X","3","J","3","3");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
