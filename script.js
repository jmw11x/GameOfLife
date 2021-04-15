var rows = 50;
var cols = 50; 
function genGrid(){
    let grid = document.getElementById("grid");

    //reset rows and columns so table size can be variable

    for(var i = 0; i<rows; i++){
        let row = document.createElement("tr");
        
        
        grid.appendChild(row);
        
        for(var j = 0; j < cols; j++){
            let cell = document.createElement("td");

            cell.setAttribute('id', i+j);
            cell.setAttribute('class', 'dead');
            //console.log(cell.className); 
            row.appendChild(cell);
        }
    }
}

//setting up random positions to begin
function randSetup(){
    var ij = Math.floor(Math.random() * 5050) + 1;
    

        var td = document.getElementsByTagName("td");

        for(var k = 0; k < 30; k++){
            
            var rand = Math.floor(Math.random() * 2500) + 1;
            if(td[k].className == "dead" && $("#"+ ij +"td")){
                td[rand].className = 'live';
            }

            //console.log(td[rand]);
            
        }

}

genGrid();
randSetup();
