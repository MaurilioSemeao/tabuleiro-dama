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
        const [pieces, setPieces] = useState([{}]);
        const [turn , setTurn] = useState("player-1");

        const handleClick = (row,col) => {

            const square = board[row][col];
            const pieceLeft = board[row+1][col-1];
            const pieceRight = board[row+1][col+1];

            setPieces([pieceLeft, pieceRight]);

            if(pieces[0]?.piece || pieces[1]?.piece ){
                if(pieces[0]?.piece !== square.piece)
                    console.log(pieces[0]?.piece);
            }

            if(!selected){
                if(square.piece && square.piece.player === turn){
                    setSelected({row, col});
                }
                return
            }

            if(row === selected.row && selected.col){
                setSelected(null);
                return;
            }





            if(
                (row === selected.row+1 && col === selected.col-1) ||
                (row === selected.row+1 && col === selected.col+1) ||
                (row === selected.row-1 && col === selected.col+1) ||
                (row === selected.row-1 && col === selected.col-1)
            ) {

                const newBoard = board.map(r => r.map(c => ({...c})))

                newBoard[row][col].piece = {...newBoard[selected.row][selected.col].piece};
                newBoard[selected.row][selected.col].piece = null;

                setBoard(newBoard);
                setSelected(null);
                setTurn(turn === "player-1" ? "player-2":"player-1");
            }
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