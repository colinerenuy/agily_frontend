import styles from '../styles/DayCard.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {findIconURL} from '../modules/findIconURL'
import {convertDate} from '../modules/convertDate'


function DayCard(props) {
    let imgSource = findIconURL(props.weather)
    let {day, nb, month} = convertDate(props.time)

    return (
        <div className={styles.container}>
            <div style={{width: '20%', display:'flex', justifyContent:'center'}}><img src={imgSource}></img></div>
            <div className={styles.infos}>
                <p className={styles.day}>{day}</p>
                <p>{nb} {month}</p>
            </div>
            <h1>{props.tempDay}°C</h1>
        </div>
    )

}

export default DayCard;