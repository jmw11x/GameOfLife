<?php
/*This file gets username, password from registration and stores in users.txt file*/

	if(isset($_POST["submit"])) {
		

		if(!preg_match("/^[a-zA-Z-']*$/",$_POST["uname"])|| empty($_POST["pass"])){
			$err="Invalid Registration Information!";
			//header("Location:registration.php");

			}else{

				$user=$_POST["uname"].",".$_POST["pass"];   
				$users=file_get_contents('users.txt');
				if(false===strpos($users,$user)){ //Ensures we do not have any duplicate usernames
				$myfile=file_put_contents('users.txt',$user.PHP_EOL,FILE_APPEND);
				header("Location:registration.php");
			}

		header("Location:login.php");
		}
	}


?>

<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<title>Registration</title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
	</head>
	<header>
		<div class="row">
			<div class="col">
				<div>
				<img src="logo.JPG" alt="logo">
				</div>
			</div>
			<div class="wide">
				<h1>Conway's Game of Life</h1>
			</div>
		</div>
	</header>
	<body>
		
		<div class="register">
			<?php if(isset($err)){echo "<p class='error'><b>".$err."</b></p>";}?>
			<p class="sign">Register to play!</p>
		

			<form method="post" class="form1">
			
				<br>
				<input placeholder="Username" class="un" type="text" id="uname" name="uname">
				<br>
				
				<br>
				<input class="un" placeholder="Password" type="text" id="pass" name="pass">
				<br><br>


				<div class="btn">
					<input  class = "submit" type="submit" name="submit" value="Submit">
				</div>
			</form>
		</div>
	</body>
</html>
