import styles from '@/app/style/Square.module.css'

export default function Square(props){
    return <div
        onClick={props.onClick}
        className={`
        ${styles.square} 
        ${styles[props.color]}
        ${props.isSelected ? styles.selected : ""} 
        `}

    >
        {props.children}
    </div>
}