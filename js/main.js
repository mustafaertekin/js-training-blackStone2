
$("#initButton").on("click", function () {
    main ();
});

function main () {
    let matrix = [];
    for (let i=0; i<5; i++) {
        matrix[i] = new Array(5);
    };
    
    let positionArr = [];
    for (let j=0; j < 5; j++) {
        for (let k=0; k < 5; k++) {
            positionArr.push({j, k});
        }
    }

    createBlackStones (matrix, positionArr);
    createMaze (matrix);
};

function getRandomUnder (pCount) {
    return Math.floor(Math.random() * pCount);
}

// puts 1 to the cells randomly
function createBlackStones (pMatrixArr, pPosArray) {
    let blackStoneNumber = getRandomUnder(26);
    for (let i=0; i < blackStoneNumber; i++) {
        let {j,k} = findTheNextRandomPosition (pPosArray);
        pMatrixArr[j][k] = 1;
    };
};

function findTheNextRandomPosition (pPosArray) {
    let pos= Math.floor(Math.random()*pPosArray.length);
    let position = pPosArray[pos];
    pPosArray.splice(pos,1);
    return position;
}

function createMaze (pMatrix) {
    $("#renderArea").html("");   
    for (let i=0; i < 5; i++) {
        let satir = $("<div class='row'>");
        for (let k=0; k < 5; k++) {
            let cell = $("<div class='cell'>");
            if(pMatrix[i][k] === 1) {
                cell.css("background", "black");
            }
            satir.append(cell);    
        } 
        $("#renderArea").append(satir);   
    }
}