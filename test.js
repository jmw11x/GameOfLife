function play(){
    var block= document.getElementById("block");
    if(block.checked){return;}
    alive = getActivatedCells();
    dead = getDeadCells();
    console.log(alive, "FIRST")
    for(var i = 0; i<23; i++){   
        for(var j = 0 ; j< alive.length;j++){
            var aliveneighbors = getNeighbors(alive[j], alive);
            if(aliveneighbors<2){
                map[alive[j]]=0;
                //remove alive[j] from alive
            }
            if(aliveneighbors>3){
                map[alive[j]]= 0;
                //remove alive[j] from alive
            }
        }
        for(var j = 0; j<dead.length;j++){
            var aliveneighbors = revive(dead[j]);
            if(aliveneighbors == 3){
                map[dead[j]]=1;
            }
        }
        refeshMap();

    }
}
var aliveTemp = [];