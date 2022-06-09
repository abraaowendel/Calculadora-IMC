import {levels} from '../helpers/imc'
import styles from './GridItem.module.css';
import upImage from '../assets/up.png'
import downImage from '../assets/down.png'


export const GridItem = (props) =>{
    return(
        <div className={styles.main} style={{backgroundColor: props.item.color}}>
            <div className={styles.gridIcon}>
                <img src={props.item.icon === "up"? upImage : downImage} alt="" width="30px" />
            </div>
            <div className={styles.gridTitle}>{props.item.title}</div>
            {props.item.yourImc && 
                <div className={styles.yourImc}>Seu IMC é {props.item.yourImc}kg/m²</div>
            }
            <div className={styles.gridInfo}>
                <>
                O IMC está entre <strong>{props.item.imc[0]} e {props.item.imc[1] === Infinity? "99": props.item.imc[1] }</strong>
                </>
            </div>   
        </div>
    )
}