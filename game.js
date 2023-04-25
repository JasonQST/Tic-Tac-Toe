//Record player's turn
let turn = 1;

//Create Factory Function for Player
const player = (name, occupies) => {
    const getName = () => name;
    const occupy = blockObject => {
        occupies.push(blockObject.srcElement.id);
        let block = document.querySelector('#' + CSS.escape(blockObject.srcElement.id))
        const occupySymble = document.createElement('p');
        if(turn == 1){
            occupySymble.innerText = "X"
        } else {
            occupySymble.innerText = "O"
        }
        
        occupySymble.classList.add('occupySymble');
        block.appendChild(occupySymble);
    }
    return { getName, occupy, occupies };
}

//Create gameBoard Module
const gameBoard = (() => {
    let rowID = 1;
    let blockID = 1;
    const blockContainer = document.querySelector('.Board');

    const generateBlock = row => {
        const blockDiv = document.createElement('Div');
        blockDiv.classList.add('blockDiv');
        blockDiv.setAttribute('id', blockID);
        row.appendChild(blockDiv);
    };

    const generateRow = width => {
        let rowDiv = document.createElement('Div');
        rowDiv.classList.add('rowDiv');
        let thisRowID = "row" + rowID;
        rowDiv.setAttribute('id', thisRowID);
        blockContainer.appendChild(rowDiv);
        for(k=0;k<width;k++){
            generateBlock(document.querySelector('#' + CSS.escape(thisRowID)));
            addListener(document.querySelector('#' + CSS.escape(blockID.toString())));
            blockID ++;
        }
        rowID ++;
    };

    const addListener = block => {
        block.addEventListener('mouseenter',(e) => {
            e.target.style.background = "rgb(196, 196, 196)";
        });
        block.addEventListener('mouseout',(e) => {
            e.target.style.background = "white";
        });
        block.addEventListener('click',(e) => {
            if(turn == 1){
                player1.occupy(e);
                turn = 2;
                console.log("PLAYER 1"+turn);
            } else {
                player2.occupy(e);
                turn = 1;
                console.log("PLAYER 2"+turn);
            }
            
        });
    }

    const generateBoard = (width, height) => {
        for(i=0;i<height;i++){
            generateRow(width);
        };
        rowID = 0;
        blockID = 0;
    };

    return {
        generateBoard
    };
})();

gameBoard.generateBoard(3,3);
player1 = player("Jason",[]);
player2 = player("Joyce", []);