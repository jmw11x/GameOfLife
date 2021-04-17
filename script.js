var map ={};
function genGrid(){
    let grid = document.getElementById("grid");
 
    //reset rows and columns so table size can be variable
    var rows = 50;
    var cols = 50;
    let row = document.createElement("tr");
    grid.appendChild(row);
    for(var i = 0; i<rows; i++){
 
        let row = grid.insertRow();
 
        
        
        for(var j = 0; j < cols; j++){
            let cell = document.createElement("td");   
            cell.setAttribute('id', i+","+ j);
            
            cell.append(i+","+j);
            
            cell.onclick = e =>{
                //console.log(e.target.id);
                
                if(map[e.target.id] == 0 || map[e.target.id]==null){
                    map[e.target.id] = 1;
                    document.getElementById(e.target.id).style.backgroundColor = "blue";
                }else{   
                    map[e.target.id] = 0;
                    document.getElementById(e.target.id).style.backgroundColor = "white";
                }
                //console.log(this.id);
                
            }
            row.appendChild(cell);
     
 
            // console.log(cell.className); 
        } 
        grid.appendChild(row);
   
    }
}
 
 
function play(){
        var block= document.getElementById("block");
        var blinker= document.getElementById("blinker");
        var beacon = document.getElementById("beacon");
 
        if(block.checked){
            map["24,24"] = 1;
            document.getElementById("24,24").style.backgroundColor = "blue";
            map["24,25"] = 1;
            document.getElementById("24,25").style.backgroundColor = "blue";
            map["25,24"] = 1;
            document.getElementById("25,24").style.backgroundColor = "blue";
            map["25,25"] = 1;
            document.getElementById("25,25").style.backgroundColor = "blue";
 
            //these parts of the other patterns should be turned off on play
            map["26,26"] = 0;
            document.getElementById("26,26").style.backgroundColor = "white";
            map["26,27"] = 0;
            document.getElementById("26,27").style.backgroundColor = "white";
            map["27,26"] = 0;
            document.getElementById("27,26").style.backgroundColor = "white";
            map["27,27"] = 0;
            document.getElementById("27,27").style.backgroundColor = "white";
 
            map["26,25"] = 0;
            document.getElementById("26,25").style.backgroundColor = "white";
        }else if(blinker.checked){
            map["24,25"] = 1;
            document.getElementById("24,25").style.backgroundColor = "blue";
            map["25,25"] = 1;
 
            document.getElementById("25,25").style.backgroundColor = "blue";
            map["26,25"] = 1;
 
            document.getElementById("26,25").style.backgroundColor = "blue";
 
            //these parts of the other patterns should be turned off on play
            map["26,26"] = 0;
            document.getElementById("26,26").style.backgroundColor = "white";
            map["26,27"] = 0;
            document.getElementById("26,27").style.backgroundColor = "white";
            map["27,26"] = 0;
            document.getElementById("27,26").style.backgroundColor = "white";
            map["27,27"] = 0;
            document.getElementById("27,27").style.backgroundColor = "white";
 
            map["25,24"] = 0;
            document.getElementById("25,24").style.backgroundColor = "white";
            map["24,24"] = 0;
            document.getElementById("24,24").style.backgroundColor = "white";
        }else if(beacon.checked){
            map["24,24"] = 1;
 
            document.getElementById("24,24").style.backgroundColor = "blue";
            map["24,25"] = 1;
 
            document.getElementById("24,25").style.backgroundColor = "blue";
            map["25,24"] = 1;
 
            document.getElementById("25,24").style.backgroundColor = "blue";
            map["25,25"] = 1;
 
            document.getElementById("25,25").style.backgroundColor = "blue";
            map["26,26"] = 1;
 
            document.getElementById("26,26").style.backgroundColor = "blue";
            map["26,27"] = 1;
 
            document.getElementById("26,27").style.backgroundColor = "blue";
            map["27,26"] = 1;
 
            document.getElementById("27,26").style.backgroundColor = "blue";
            map["27,27"] = 1;
 
            document.getElementById("27,27").style.backgroundColor = "blue";
 
            //parts of other pattern should be turned off 
            map["26,25"] = 0;
            document.getElementById("26,25").style.backgroundColor = "white";
            map["25,25"] = 0;
 
            document.getElementById("25,25").style.backgroundColor = "white";
            map["26,26"] = 0;
 
            document.getElementById("26,26").style.backgroundColor = "white";
        }
 
        //play button will keep adding generations up to 23 everytime it is clicked
        countN();
        
}

//rules: adding generations
function countN(){
// 1. Any live cell with fewer than two live neighbors dies, which is caused by under population.
// 2. Any live cell with more than three live neighbors dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbors’ lives on to the next generation.
// 4. Any dead cell with exactly three live neighbors becomes a live cell.
// 5. If a dead cell has exactly three live neighbors, it comes to 
// 6. If a live cell has less than two live neighbors, it dies
// 7. If a live cell has more than three live neighbors, it dies
// 8. If a live cell has two or three live neighbors, it continues living. life - Therefore by repeating the 
// cycle over and over, these simple rules create interesting, often unpredictable patterns.


var keys = Object.keys(map);
var count = 0; 
console.log(map);
for(var i = 0; i<50; i++){
     for(var j = 0; j<50; j++){
            

             if(map[i+","+j] === 1){
                if(map[i-1+","+j]=== 1){
                    count++;
                    console.log([i-1+","+j]);
                }
                if(map[i-1+","+(j+1)]===1){
                    count++;
                    console.log([i-1+","+(j+1)]);
                }
                
                if(map[i+","+(j+1)]===1){
                    count++;
                    console.log([i+","+(j+1)]);
                }
                if(map[i+1+","+(j+1)]===1){
                    count++;
                    console.log([i+1+","+(j+1)]);
                }
                if(map[i+1+","+j]===1){
                    count++;
                    console.log([i+1+","+j]);
                }
                if(map[i+1+","+(j-1)]===1){
                    count++;
                    console.log([i+1+","+(j-1)]);
                }
                if(map[i+","+(j-1)]===1){
                    count++;
                    console.log([i+","+(j-1)]);
                }
                if(map[i-1+","+(j-1)]===1){
                    count++;
                    console.log([i-1+","+(j-1)]);
                }
                
                console.log(count);
                count = 0;
                //resets count for next iteration
                //add rules here 
             }

     }
}

// console.log(map);
// console.log(Object.getOwnPropertyNames(map).length);
}


function stop(){
    var arr = Object.keys(map);
    for(var i = 0; i< arr.length;i++){
        document.getElementById(arr[i]).style.backgroundColor = "white";
 
    }
}
 
//reset button to get back to original pattern
function reset(){
    if(block.checked){
        document.getElementById("24,24").setAttribute('class', 'pattern');
        document.getElementById("24,25").setAttribute('class', 'pattern');
        document.getElementById("25,24").setAttribute('class', 'pattern');
        document.getElementById("25,25").setAttribute('class', 'pattern');
 
        //off
        document.getElementById("26,26").setAttribute('class', 'none');
        document.getElementById("26,27").setAttribute('class', 'none');
        document.getElementById("27,26").setAttribute('class', 'none');
        document.getElementById("27,27").setAttribute('class', 'none');
 
        document.getElementById("26,25").setAttribute('class', 'none');
    }
    if(blinker.checked){
        document.getElementById("24,25").setAttribute('class', 'pattern');
        document.getElementById("25,25").setAttribute('class', 'pattern');
        document.getElementById("26,25").setAttribute('class', 'pattern');
 
        //off
 
        document.getElementById("24,24").setAttribute('class', 'none');
        document.getElementById("25,24").setAttribute('class', 'none');
 
        document.getElementById("26,26").setAttribute('class', 'none');
        document.getElementById("26,27").setAttribute('class', 'none');
        document.getElementById("27,26").setAttribute('class', 'none');
        document.getElementById("27,27").setAttribute('class', 'none');
    }else if(beacon.checked){
        document.getElementById("24,24").setAttribute('class', 'pattern');
        document.getElementById("24,25").setAttribute('class', 'pattern');
        document.getElementById("25,24").setAttribute('class', 'pattern');
        document.getElementById("25,25").setAttribute('class', 'pattern');
        document.getElementById("26,27").setAttribute('class', 'pattern');
        document.getElementById("27,26").setAttribute('class', 'pattern');
        document.getElementById("27,27").setAttribute('class', 'pattern');
 
        //off
 
        document.getElementById("26,25").setAttribute('class', 'none');
        document.getElementById("26,26").setAttribute('class', 'none');
        document.getElementById("25,25").setAttribute('class', 'none');
    }
    for(var i = 0; i<50; i++){
        for(var j = 0; j<50; j++){
            
            var temp = document.getElementById(i+","+j);
            if(temp.className === 'pattern'){
                document.getElementById(i+","+j).style.backgroundColor = "blue";
                map[i+","+j] = 1;
            }else{
                document.getElementById(i+","+j).style.backgroundColor = "white";
                map[i+","+j] = 0;
            }     
        }
    }
 
    
 
}

genGrid();
