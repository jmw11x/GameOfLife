var map ={};
function genGrid(){
    let grid = document.getElementById("grid");
 
    //reset rows and columns so table size can be variable
    var rows = 50;
    var cols = 50;
    for(var i = 0; i<rows; i++){
        let row = document.createElement("tr");
        
        
        grid.appendChild(row);
        
        for(var j = 0; j < cols; j++){
            let cell = document.createElement("td");   
            cell.setAttribute('id', i + ","+j);  
           
            cell.onclick = e =>{
                console.log("called");
                
                if(map[e.target.id] == 0 || map[e.target.id]==null){
                    map[e.target.id] = 1;
                    document.getElementById(e.target.id).style.backgroundColor = "blue";
                }else{   
                    map[e.target.id] = 0;
                    document.getElementById(e.target.id).style.backgroundColor = "white";
                }
                //console.log(this.id);
            }

            // console.log(cell.className); 
            row.appendChild(cell);
        }    
    }
}
genGrid();
 

//setting the first pattern - block
