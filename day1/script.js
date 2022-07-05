/*
    It will create 10/10 table
*/

function createTable(){
    let tbody = document.createElement('tbody');
    let temp = 0;
    const cellData = createCellData();
    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            // td.innerText = cellData[temp++];
            td.setAttribute("id",cellData[temp]);
            temp+=1;
            td.addEventListener("click", checkMultiple);
            tr.appendChild(td);
        }
       
    }
    let table = document.getElementById("table");
    table.appendChild(tbody);
}
createTable();



/* Creating cell data of random number 1 to 100 
                &&
    Shuffling the array */


function createCellData() {
    let cellData = [];
    for(let k = 0; k < 100; k++){
        cellData.push(k+1);
    }
    cellData = cellData.sort((a,b) => Math.random() - 0.5);
    return cellData;
}


/* 
    checkMultiple gets triggered while onclick event 
*/


function checkMultiple(event) {
    let num = event.target.id;
    let score = +document.getElementById('score').innerText;
    let mine = ((num == 2) || (num == 3) || (num == 5) || (num == 7)) ? true : false;
    if(mine){
        document.getElementById(num).innerHTML = "<img src='images/bomb.png' />"
        playSound("audio/disappointedCrowd.mp3");
        return;
    }
    if (!mine && !document.getElementById(num).hasChildNodes()){
        playSound("audio/click.mp3");
        document.getElementById("score").innerText = score+=1;
    }

    for(let i = 1; i <= 100; i++){
        if(i % num == 0){
            document.getElementById(i).innerHTML = "<img src='images/shield.png' />";
        }
    }
    if(num == 1){
        playSound('audio/crowdCheers.mp3');
        return;
    }
}
 




function playSound(filename){
    let clickAudio = new Audio(filename);
    clickAudio.play();
}


