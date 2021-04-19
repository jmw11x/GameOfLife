var stopit = false;
var resetit = false;
var map ={};
var alive = [];

function loadAlive(){
    var data = [];
    var fixed = [];
    var pointer = 0;
    console.log(window.localStorage["active"])
    if(window.localStorage["active"]!= undefined){data = window.localStorage["active"].split(",");}
    if(data.length<1){return data;}
    else{
        for(var i = 0; i<data.length;i+=2){
            var element = parseInt(data[i])+","+parseInt(data[i+1]);
            console.log(element,"elemnt********************************************************************************************************")
            map[element] = 1;
            fixed[pointer]=element;
            pointer++;
        }
    }
    console.log(fixed,"IS IT FIXED?")
    window.localStorage.clear();

    return fixed; 
}



//create grid
function genGrid(){
    let grid = document.getElementById("grid");
 
    //reset rows and columns so table size can be variable
    var rows = 49;
    var cols = 50;
    let row = document.createElement("tr");
    grid.appendChild(row);
    for(var i = 0; i<rows; i++){
 
        let row = grid.insertRow();
        for(var j = 0; j < cols; j++){
            let cell = document.createElement("td");   
            cell.setAttribute('id', i + ","+j);  
            cell.onclick = e =>{
                
                
                if(map[e.target.id] == 0 || map[e.target.id]==null){
                    map[e.target.id] = 1;
                    document.getElementById(e.target.id).style.backgroundColor = "#FF5F1F";
                }else{   
                    map[e.target.id] = 0;
                    document.getElementById(e.target.id).style.backgroundColor = "black";
                }
                //console.log(this.id);
            }
            row.appendChild(cell);
     
 
            // console.log(cell.className); 
        } 
        grid.appendChild(row);
   
    }
}
 
//set patterns for start of game
function setShape(){
    var block= document.getElementById("block");
    var blinker= document.getElementById("blinker");
    var beacon = document.getElementById("beacon");
    if(block.checked){
        map["24,24"] = 1;
        document.getElementById("24,24").style.backgroundColor = "#FF5F1F";
        map["24,25"] = 1;
        document.getElementById("24,25").style.backgroundColor = "#FF5F1F";
        map["25,24"] = 1;
        document.getElementById("25,24").style.backgroundColor = "#FF5F1F";
        map["25,25"] = 1;
        document.getElementById("25,25").style.backgroundColor = "#FF5F1F";
    }else if(blinker.checked){
        map["24,25"] = 1;
        document.getElementById("24,25").style.backgroundColor = "#FF5F1F";
        map["25,25"] = 1;
        document.getElementById("25,25").style.backgroundColor = "#FF5F1F";
        map["26,25"] = 1;
        document.getElementById("26,25").style.backgroundColor = "#FF5F1F";
        setTimeout(() => {  play() }, 300);
 
        //run gamescript
    }else if(beacon.checked){
        map["24,24"] = 1;
        document.getElementById("24,24").style.backgroundColor = "#FF5F1F";
        map["24,25"] = 1;
        document.getElementById("24,25").style.backgroundColor = "#FF5F1F";
        map["25,24"] = 1;
        document.getElementById("25,24").style.backgroundColor = "#FF5F1F";
        map["25,25"] = 0;
        document.getElementById("25,25").style.backgroundColor = "black";
       
    
 
        
        map["26,27"] = 1;
        document.getElementById("26,27").style.backgroundColor = "#FF5F1F";
        map["27,26"] = 1;
        document.getElementById("27,26").style.backgroundColor = "#FF5F1F";
        map["27,27"] = 1;
        document.getElementById("27,27").style.backgroundColor = "#FF5F1F";
       
            play();
        
    }else{
        play();
    }
    
   
}
  
// -----
function revive(current){
    var point = current.split(",");
    point[0] = parseInt(point[0])
    point[1] = parseInt(point[1])
    var l = 0;
    for(var i = 0; i < alive.length; i++){
        var comp = alive[i].split(",");
        comp[0]=parseInt(comp[0])
        comp[1]=parseInt(comp[1])
        var dix = Math.abs(point[0] - comp[0])
        var diy = Math.abs(point[1] - comp[1])
        // console.log(position, "POSITION") 
        if(diy==0 && dix == 0){
            continue;
        }
        if(dix == 1 && diy ==0){
            l++;
        }
        if(dix == 0 && diy == 1){
            l++;
        }
        if(dix==1 && diy ==1){
            l++;
        }
    }
    return l;
}
 


function removeDups(arr){
    return [... new Set(arr)]
}



//returns array of neighbors that are alive for current cell
function getNeighbors(current, alive){
    // console.log("in n", alive)
    // console.log (current,"CURRENTTTTTTTTTTTTTTTTTTTTTTT")
    length = 0;
    var neighbors = [];
    var index =0;
    var currentcell= current.split(",");
    // console.log(currentcell, "CURRENTCELL");
    for(var i = 0; i<alive.length;i++){
        
        var position = alive[i].split(",");
        var dix = Math.abs(position[0] - currentcell[0])
        var diy = Math.abs(position[1] - currentcell[1])
        // console.log(position, "POSITION") 
        if(diy==0 && dix == 0){
            continue;
        }
        if(dix == 1 && diy ==0){
            neighbors[index]=alive[i];
            index++;
        }
        if(dix == 0 && diy == 1){
            neighbors[index]=alive[i];
            index++;
        }
        if(dix==1 && diy ==1){
            neighbors[index]=alive[i];
            index++;
        }
    }
    // console.log(neighbors,"Neighbors this time")
   return neighbors;
}


//returns array of all active cells
function getActivatedCells(){
    var pointer = 0;
    var alive = loadAlive();
    alive = removeDups(alive);
    console.log(alive, "CHCKED?")
    var keys = Object.keys(map); 
    for(var i = 0; i < keys.length; i++){
        if(map[keys[i]] == 1){
            alive[pointer] = keys[i];
            pointer++;
        }
    }
    // console.log("at end of activate")
    return alive;
}


//returns array of all dead cells
function getDeadCells(active_cells){
    var dead_cells = [];
    pointer = 0;
    for (var i = 0; i < active_cells.length; i++){
        var x = parseInt(active_cells[i].split(",")[0]);
        var y = parseInt(active_cells[i].split(",")[1]);
        // console.log(x,"x")
        // console.log(y,"y")
 
        dead_cells[pointer] = [
            x+","+parseInt(y+1),
            x+","+parseInt(y-1),
            (x-1)+","+parseInt(y+1),
            (x-1)+","+parseInt(y),
            (x-1)+","+parseInt(y-1),
            (x+1)+","+parseInt(y),
            (x+1)+","+parseInt(y-1),
            (x+1)+","+parseInt(y+1),
        ]
        // console.log(dead_cells)
        pointer++;
     
    }
    dead_cells = dead_cells.flat();
    for(var i = 0; i < dead_cells.length;i++){
        if(map[dead_cells[i]]==1){
            dead_cells = dead_cells.filter(cell =>{
                return cell !== dead_cells[i];
            })
        }
    }
    return dead_cells;
}
 
/*
    Game Rules
 
     1. Any live cell with fewer than two live neighbors dies, which is caused by under population.
     2. Any live cell with more than three live neighbors dies, as if by overcrowding.
     3. Any live cell with two or three live neighbors’ lives on to the next generation.
     4. Any dead cell with exactly three live neighbors becomes a live cell.
  
**/
function play(){
    
    var block= document.getElementById("block");
    if(block.checked){return;}
 
    //running the game rules within task
    for(var i = 0; i<23; i++){ 
        task(i);

    }
}



//calls the iterations within timer function
function task(i) {
    setTimeout(function() {
        console.log(i, "I AM I WHAT AM I********************************************************")
        
        alive = getActivatedCells();
        console.log("START ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe", alive);
        var dead = getDeadCells(alive);
        if(stopit){         
            if (typeof(Storage) !== "undefined") {
            // Store
            
                localStorage.setItem("active", getActivatedCells().join());
               // Retrieve
                
            } else {
                  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }            
            location.reload()
        }
        for(var j = 0 ; j< alive.length;j++){
            var aliveneighbors = getNeighbors(alive[j], alive);
            console.log("the alive neighbors of "+alive[j]+": "+ aliveneighbors);
            if(aliveneighbors.length<2 || aliveneighbors.length>3){
                map[alive[j]]=0;
            }
            
        }
        
        for(var j = 0; j<dead.length;j++){
            var aliveneighbors = revive(dead[j]);
            if(aliveneighbors == 3){
                map[dead[j]]=1;
            }
        }
        setTimeout(() => {  updateGrid() }, 300);
        //update alive and dead
        console.log(alive, "alive after iteration");
    }, 2000*i);
}


function updateGrid(){
    var keys = Object.keys(map);
    for (var i = 0; i< keys.length; i++){
        if(keys[i] !=undefined){
            if(map[keys[i]] == 1){
                document.getElementById(keys[i]).style.backgroundColor = "#FF5F1F";
                
            }else if(map[keys[i]] == 0){
                document.getElementById(keys[i]).style.backgroundColor = "black";
                
            }
        }
        
    }
    
}

//clears graph, fixes needed: stopping the running play() function all together
function stop(){
    stopit=true;
    var arr = Object.keys(map);
    for(var i = 0; i< arr.length;i++){
        document.getElementById(arr[i]).style.backgroundColor = "black";
        map[[i]] = 0;
    }
    window.localStorage.clear();
    location.reload();
}
function reset(){
    stopit=true;  
}



//wait time so we can see pattern oscillating
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
genGrid();
