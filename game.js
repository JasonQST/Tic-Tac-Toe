//Create Factory Function for Player
const player = (name, occupies) => {
    const getName = () => name;
    const occupy = block => occupies.push(block);
    return { getName, occupy, occupies};
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