import React from "react";
import Square from "./Square";
import './tictactoe.css'

function Board({squares}){
    const handleClick = (i) =>{

    }

    return(
    <>
    <div className="board-row">
        <square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <square value={squares[1]}/>
        <square value={squares[2]}/>
    </div>
    </>);
}

export default Board;