var map ={};
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
                console.log(e.target.id);
                
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
        }else if(blinker.checked){
            map["24,25"] = 1;
            document.getElementById("24,25").style.backgroundColor = "blue";
            map["25,25"] = 1;
            document.getElementById("25,25").style.backgroundColor = "blue";
            map["26,24"] = 1;
            document.getElementById("26,25").style.backgroundColor = "blue";
        }else if(beacon.checked){
            map["24,24"] = 1;
            document.getElementById("24,24").style.backgroundColor = "blue";
            map["24,25"] = 1;
            document.getElementById("24,25").style.backgroundColor = "blue";
            map["25,24"] = 1;
            document.getElementById("25,24").style.backgroundColor = "blue";
            map["25,25"] = 1;
            document.getElementById("25,25").style.backgroundColor = "blue";
            map["24,24"] = 1;

            document.getElementById("26,26").style.backgroundColor = "blue";
            map["24,25"] = 1;
            document.getElementById("26,27").style.backgroundColor = "blue";
            map["25,24"] = 1;
            document.getElementById("27,26").style.backgroundColor = "blue";
            map["25,25"] = 1;
            document.getElementById("27,27").style.backgroundColor = "blue";
        }
}

function stop(){
    var arr = Object.keys(map);
    for(var i = 0; i< arr.length;i++){
        document.getElementById(arr[i]).style.backgroundColor = "white";

    }
}
//setting the first pattern - block
genGrid();
