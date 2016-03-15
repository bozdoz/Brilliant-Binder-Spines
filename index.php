<?php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8" />
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="icon" href="/favicon.ico?v=1">
	<title>Brilliant Binder Spines</title>
</head>

<body>

	<script>
		if (window.location.host == 'brilliantbinderspines.com') {
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-73887811-3', 'auto');
		  ga('send', 'pageview');
		}
	</script>

	<header id="header">
		<h1>Brilliant Binder Spines</h1>
		<h2>When good is just not good enough</h2>
		<!-- <nav id="nav">
			<ul class="nav nav-pills">
				<li><a href="#welcome">Home</a></li>
				<li><a href="#what">What</a></li>
				<li><a href="#why">Why</a></li>
			</ul>
		</nav> -->
	</header>
	
	<main id="main">
		<!-- <section>
			<div id="tab-sections">
				<div id="tab-welcome" class="tab-section">
					<h3>You're looking for a binder spine</h3>
					<h4><i>Well, you're in the right place</i></h4>
					<p>We're with you every step of the way!</p>
				</div>
				<div id="tab-what" class="tab-section">
					<h3>What</h3>
				</div>
				<div id="tab-why" class="tab-section">
					<h3>Why</h3>
				</div>
			</div>
		</section> -->
		<section class="container-fluid">
			<ul class="row">
				<?php
				for ($x = 1; $x < 13; $x++) {
				?>
					<li 
						class="binder-spine col-xs-4 col-sm-3 col-md-2 col-lg-1">
						<span class="binder-spine-graphic binder-spine-<?php echo $x; ?>">
						</span>
						<span class="binder-spine-description">

						</span>
					</li>
				<?php } ?>
			</ul>
		</section>
	</main>
	
	<footer id="footer"></footer>

	<script src="./js/main.js"></script> 

</body>
</html>

