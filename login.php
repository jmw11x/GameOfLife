<?php
  //session_start();
    if(isset($_POST['submit'])){
      $user=$_POST["uname"].",".$_POST["pass"];   
      $users=file_get_contents('users.txt');
      if(str_contains($users,$user)){ 
        echo $users;
        echo $user;
        header("Location:registration.php");
      
        header('Location:index.html');

      }else{
        $err="Invalid username and password!";
      }
    }
?>     

<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
  <body>

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
          <div class = "signout">
                <a href = "" >Credits</a>
              </div>
        </div>
      </header>


      <div class="register">
        <?php if(isset($err)){echo "<p class='error'><b>".$err."</b></p>";}?>
        <p class="sign"> LOGIN </p>
      

        <form method="post" class="form1">
          <br>
          <input placeholder="Username" class="un" type="text" id="uname" name="uname">
          <br>
          
          <br>
          <input class="un" placeholder="Password" type="text" id="pass" name="pass">
          <br><br>

            <a method="post" class = "btn" type="submit" name="submit" >Submit</a>

        </form>


    </div>
  </body>
</html>
