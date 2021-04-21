<?php
  //session_start();
    if(isset($_POST['submit'])){
      $user=$_POST["uname"].",".$_POST["pass"];   
      $users=file_get_contents('users.txt');
      if(strpos($users, $user) !== false){ 
        echo $users;
        echo $user;
        
      
        header('Location:index.html');

      }else{
        header("Location:registration.php");
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
                <a href = "./roles.html" >credits</a>
              </div>
        </div>
      </header>


      <div class="register">
        <?php if(isset($err)){echo "<p class='error'><b>".$err."</b></p>";}?>
        <p class="sign"> LOGIN </p>
      

        <form method="post" target="_self" class="form1">
          <br>
          <input placeholder="Username" class="un" type="text" id="uname" name="uname">
          <br>
          
          <br>
          <input class="un" placeholder="Password" type="text" id="pass" name="pass">
          <br><br>

            <input class="submit" type="submit" name="submit" value="Submit">


        </form>


    </div>
  </body>
</html>
