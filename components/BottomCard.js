import styles from '../styles/BottomCard.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {findIconURL} from '../modules/findIconURL'
import {convertDate} from '../modules/convertDate'

function BottomCard(props) {
    console.log(props.time)
    let {day, nb, month} = convertDate(props.time)
    let imgSource = findIconURL(props.weather)

    console.log(props.weather)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={imgSource}></img>
                <h2 style={{width: '70%', textAlign: 'left'}}>{day} {nb} {month}</h2>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent:'space-between'}}> 
                <div className={styles.infos}>
                    <span>Jour - {props.tempDay}°C</span>
                    <span>Nuit - {props.tempNight}°C</span>
                    <span>Humidité - {props.humidity}%</span>
                </div>
                
                <div className={styles.infos}>
                    <span>Pression - {props.pressure}hPa</span>
                    <span>Vent - {props.wind} Km/h</span>
                </div>

            </div>
        </div>
    )
}

export default BottomCard;