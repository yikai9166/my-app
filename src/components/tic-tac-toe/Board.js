import React from "react";
import Square from "./Square";
import "./tictactoe.css";

function Board({squares}){
    const handleClick = (i) => {alert ('Squar ${i} clicked.')};
    let status = "目前狀態";

    return(
    <>
        <div className="status">{status}</div>
        <div className="board-row">
            <square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
            <square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
            <square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
        </>
    );
}

export default Board;