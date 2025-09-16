import styles from "../style/Piece.module.css"

export default function Piece(props){
    return ( <div className={`${styles.piece} ${styles[props.player]}`} ></div>)
}