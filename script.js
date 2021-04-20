<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Game of Life</title>
        <link rel="stylesheet" type="text/css" href='style.css'>
    </head>


    <body onLoad = "javascript:loadCache()">
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
                <a class = "" >Sign Out</a>
              </div>
              </div>
            </div>
        </header>



        <table id="grid"></table>


        <div class ="register">
          <p>block<input type="radio" name = "shape" value = "block" id = "block"/>
          blinker<input type="radio" name = "shape" value = "blinker" id = "blinker"/>
          beacon<input type="radio" name = "shape" value = "beacon" id = "beacon"/>
          glider<input type="radio" name = "shape" value = "glider" id = "glider"/></p>
        </div>


        <div class ="buttondiv">
          <!-- <div class = "btn"> -->
            
            <div class = "adjust">
              <a class = "btn" onclick = "setShape()">Play</a>
            </div>
            <div class = "adjust1">
              <a class = "btn" onclick = "stop()">Stop</a>
            </div>
            
            <div class = "adjust2">
              <a class = "btn" onclick = "reset()">Reset</a>
            </div>
            <div class = "adjust">
              <a class = "btn" onclick = "play1()">Play 1 Gen</a>
            </div>
            <div class = "adjust"></div>
              <a class = "btn" onclick = "play23()">Play 23 Gens</a>
            </div>
            

          <!-- </div> -->
        </div>



        <script src = "script.js"></script>

        <script>
        function loadCache(){
            var data = [];
            if(localStorage["active"]!= undefined){data = localStorage["active"].split(",");}
            if(data.length<1){return;}
            else{
                for(var i = 0; i<data.length;i+=2){
                    var element = parseInt(data[i])+","+parseInt(data[i+1]);
                    console.log(element,"elemnt")
                    if(document.getElementById(element) != null){document.getElementById(element).style.backgroundColor = "black";}
                    
                }
            }
            return;
          
        }
        </script>
              
    </body>
</html>
