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

            cell.setAttribute('id', i+"," +j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', click);
            //console.log(cell.className); 
            row.appendChild(cell);
        }
    }
}

//setting up random positions to begin
function click(){
    if(this.className === 'live'){
        this.setAttribute('class', 'dead');
    }else{
        this.setAttribute('class','live');
    }
    //console.log(this.id);
    
}
//setting the first pattern - block
function block(){
   
    var fill = document.getElementById('21,29');
    var fill1 = document.getElementById('21,30');
    var fill2 = document.getElementById('22,29');
    var fill3 = document.getElementById('22,30');
 
    fill.setAttribute('class', 'live');
    fill1.setAttribute('class', 'live');
    fill2.setAttribute('class', 'live');
    fill3.setAttribute('class', 'live');
}
 
block();

genGrid();

