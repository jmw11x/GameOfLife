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
            cell.setAttribute('id', i + ","+j);  

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

            //parts of pattern are off
            map["26,25"] = 0;
            document.getElementById("26,25").style.backgroundColor = "white";
        }
        
}

function stop(){
    var arr = Object.keys(map);
    for(var i = 0; i< arr.length;i++){
        document.getElementById(arr[i]).style.backgroundColor = "white";

    }
}

//reset button 
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
        document.getElementById("26,26").setAttribute('class', 'pattern');
        document.getElementById("26,27").setAttribute('class', 'pattern');
        document.getElementById("27,26").setAttribute('class', 'pattern');
        document.getElementById("27,27").setAttribute('class', 'pattern');

        //off

        document.getElementById("26,25").setAttribute('class', 'none');
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
            //console.log(map[i+","+j]);
        
        }
    }

    

}

//game rules
function rules(){

}

genGrid();
