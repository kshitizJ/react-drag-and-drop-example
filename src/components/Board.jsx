import React from 'react'

function Board(props) {

    const drop = e => {

        // The preventDefault() method is used to prevent the browser from executing the default action of the selected element
        e.preventDefault();


        // The DataTransfer.getData() method retrieves drag data for the specified type. If the drag operation does not include data, this method returns an empty string.
        // here it returns the id of the card i.e 'card-id'
        const card_id = e.dataTransfer.getData('card_id');
        // console.log('Card Id: ', card_id);


        // get the dom element by that card_id
        const card = document.getElementById(card_id);
        // console.log("Card: ", card);


        // we display the card on the board which it was dragged on
        card.style.display = 'block';

        // we also apend the card element in the board element
        e.target.appendChild(card);
    }


    // preventDefault() function is used to prevent the default behaviour. when we start dragging as element a little bit and when we lose the element we see that it is still there in the board. If you comment this function then you will notice that as soon as you start dragging the element a little bit and as soon as you lose the element it disappears.
    const dragOver = e => {
        e.preventDefault();
    }


    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Board
