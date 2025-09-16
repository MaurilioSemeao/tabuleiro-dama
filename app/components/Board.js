"use client"

import Square from "@/app/components/Square";
import styles from "../style/Board.module.css"
import Piece from "@/app/components/piece";
import {useState} from "react";

export default function Board(){
        const initialBoard = Array.from({length: 8},
            (_, row) => Array.from({length: 8},
                (_, col) => {
                    const color = (row + col) % 2 === 0 ? "black" : "white";

                    let piece = null;

                    if(color === "black" && row < 3){
                        piece = {player: "player-1"}
                    }
                    else if(color === "black" && row > 4){
                        piece = {player: "player-2"}
                    }

                    return {color, piece};
                }
        ));

        const [board, setBoard] = useState(initialBoard);
        const [selected, setSelected] = useState(null);

        const handleClick = (row,col) => {
            const square = board[row][col];

            if(!selected){
                if(square.piece){
                    setSelected({row, col});
                }
                return
            }

            if(row === selected.row && selected.col){
                setSelected(null);
                return;
            }

            const newBoard = board.map(r => r.map(c =>({...c})))


            newBoard[row][col].piece = {...newBoard[selected.row][selected.col].piece};
            newBoard[selected.row][selected.col].piece= null;

            setBoard(newBoard);
            setSelected(null);

        }


        return(
            <div className={styles.board} >
                {board.map((row, rowIndex) =>
                    row.map((square, colIndex) =>{
                        const isSelected = selected?.row === rowIndex &&
                            selected?.col === colIndex

                        return(
                            <Square
                                key={`${rowIndex}-${colIndex}`}
                                color={square.color}
                                onClick={()=>handleClick(rowIndex, colIndex)}
                                isSelected={isSelected}
                            >

                                {square.piece &&
                                    <Piece
                                        key={`${rowIndex}-${colIndex}`}
                                        player={square.piece.player}
                                    >
                                    </Piece>
                                }

                            </Square>
                        )

                    })
                )}
            </div>
        )

}