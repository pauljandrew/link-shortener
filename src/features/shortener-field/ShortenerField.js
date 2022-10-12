import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  shortenifyURL,
  selectURL
} from './shortenerFieldSlice';
import styles from './ShortenerField.module.css';

export function ShortenerField() {
  const URL = useSelector(selectURL);
  const dispatch = useDispatch();
  const [urlToShorten, setURLToShorten] = useState('');

  return (
    <div>
    
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Add URL to shorten"
          value={urlToShorten}
          onChange={(e) => setURLToShorten(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(shortenifyURL(urlToShorten))}
        >
          Shorten!
        </button>
        
      </div>
      <div className={styles.row}>
        <span>
          {URL} 
        </span>
        
      </div>
    </div>
  );
}
