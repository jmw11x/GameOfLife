<!--<html>
<head>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div id="form">
	<h1> Login to Play!</h1>
	<form>
		<label>Username</label>
		<br>
		<input type="text" name="user" class="logbutton">
		<br>
		<br>
		<label>Password</label>
		<br>
		<input type="text" name="user" class="logbutton">
		<br>
		<br>
		<button type="button" id="subbutton" onclick="login()">Login</button>
	</form>
	</div>
	<script src="script.js"></script>
</body>
</html>-->

<?php
//session_start();
if(isset($_POST['submit']))    // Check form submit with IF Isset function
{
    $user=$_POST["uname"].",".$_POST["pass"];   
    $users=file_get_contents('users.txt');
    if(str_contains($users,$user)){ 
      echo $users;
      echo $user;
      header("Location:registration.php");
  
      //$username=$_POST["uname"];    // set variable value
      //$password=$_POST["pass"]; 
      //$_SESSION['login']=array('username'=>$username, 'password'=>$password);    // set session from given user name
header('Location:index.html');

} 
else
{
$err="Invalid username and password!";
header("Location:registration.php");
}
}
?>     

<html>
<head>
<meta charset="utf-8">
<title>Login to Jeopardy</title>
<link rel="stylesheet" type="text/css" href="jeopardy.css"/>
</head>
<body>
  
  <div class="register">
    <?php if(isset($err)){echo "<p class='error'><b>".$err."</b></p>";}?>
    <p class="sign">Login to play!</p>
  

  <form target="_self" method="POST" class="form1">
    
    <br>
    <input placeholder="Username" class="un"type="text" id="uname" name="uname">
    <br>
    
    <br>
    <input placeholder="Password" class="un" type="text" id="pass" name="pass">
    <br><br>
    <input class="submit" type="submit" name="submit" value="Submit">

  </form>
</div>
</body>
</html>