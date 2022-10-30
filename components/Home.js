import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../reducers/city';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
	const dispatch = useDispatch();
  const [searchedCity, setSearchedCity] = useState('');

  const handleSearch = () => {
    dispatch(addCity(searchedCity))
  }


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          The Forecast Weather App        
        </h1>
        <div className={styles.inputContainer}>
          <input value={searchedCity} className={styles.input} placeholder='Search' onChange={(e) => setSearchedCity(e.target.value)} ></input>
          <Link href="/search"><FontAwesomeIcon onClick={handleSearch} icon={faSearch} style={{position: 'relative', marginLeft: '-25px'}} /></Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
