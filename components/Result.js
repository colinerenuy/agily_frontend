import styles from '../styles/Result.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../reducers/city';
import DayCard from './DayCard'
import BottomCard from './BottomCard'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Result() {
const dispatch = useDispatch();
const city = useSelector((state) => state.city.value);
const [cityData, setCityData] = useState(null);
const [bottomCardData, setBottomCardData] = useState(null);

//au chargement, appelle la route back pour obtenir les données météorologiques depuis l'API
useEffect(() => {
fetch(`http://localhost:3000/weather/${city}`)
.then(response => response.json())
.then(data => {
  //Bottom Card display seulement la date d'aujourd'hui au chargement
  setBottomCardData(data[0])
  //Les cartes de droites display le reste des jours
  data.shift()
  setCityData(data)
})
}, []);

let cardDisplay;
//génère les cartes de droite
if (cityData) {
  console.log('cityData', cityData)
  cardDisplay = cityData.map(e => {
    return <DayCard {...e}></DayCard>
  })
}

  return (
    <div className={styles.main}>
      
      <div className={styles.left}> 
      <Link href="/"><button className={styles.buttonBack}><FontAwesomeIcon icon={faArrowLeft} size='xl'></FontAwesomeIcon></button></Link>
          {bottomCardData? <BottomCard {...bottomCardData}></BottomCard>: <div></div>}
      </div>

      <div className={styles.right}>
        {cardDisplay}
      </div>
    </div>
  );
}

export default Result;