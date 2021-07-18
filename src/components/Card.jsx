import React from 'react'

function Card(props) {

    const dragStart = e => {

        const target = e.target
        // console.log("Target id: ", target);


        // here we setData of 'card_id' as target.id i.e 'id' of the card that was picked up to drag. We get this data in Board.jsx in drop function while calling getData('card_id')
        e.dataTransfer.setData('card_id', target.id)


        // setTimeout({},0) --> when we pick up the element for dragging and when we drop that element to other board, while dragging we want that element to get disappear in 0 seconds from where we just started dragging it from.
        // target.style.display = "none" --> it is used to remove the element as soon as we start dragging. If we remove this line of code then when we start dragging it will not remove the element until we drop the element somewhere else.
        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }


    // we cannot drop the element on top of other element, we use stopPropagation() function for this. If you comment the stopPropagation() function then you will be able to drop the element on other element and you will see that the dropped element is sitting inside the element on which we dropped the current element.
    const dragOver = e => {
        e.stopPropagation()
    }


    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card
