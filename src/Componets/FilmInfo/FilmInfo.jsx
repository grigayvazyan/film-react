import { useEffect, useState } from "react";
import { getFilm } from "../../service";
import styles from "./filmInfo.module.css";
import StarRatings from "react-star-ratings";

export default function FilmInfo({ id }) {
  const [info, setinfo] = useState({});

  const [isNane, setIsNane] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getFilm(id).then((res) => setinfo(res));
    }
  }, []);

  let hours = Math.floor(info.runtime / 60);
  let minutes = info.runtime - hours * 60;
  let time = hours + "h" + " " + minutes + "m ";
  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original + ${info.backdrop_path}')`,
      }}
      className={styles.backgroundImage}
    >
      <div className={styles.wiewInfo} style={{
              display: isNane ? 'block': 'none'
            }}>
            {info.overview}
          </div>
      <div className={styles.nameInfo}>
        <h1>{info.title}</h1>
        <ul>
          {info.genres
            ? info.genres.map((el) => <li key={el.id}>{el.name}</li>)
            : "loading"}
          <li className={styles.liBorder}>{time}</li>
        </ul>
        
        <div className={styles.newInfo}>
          <div className={styles.star}>
            <StarRatings
              rating={4}
              starRatedColor="#5DB9E5"
              numberOfStars={5}
              name="rating"
              starDimension="30px"
            />
            <div className={styles.reding}>{info.vote_average}</div>
          </div>
          <div className={styles.buttons}>
            <a href={info.homepage} target="_blank"> <button className={styles.button}>Offical Page</button></a>
           
            <button className={styles.button} 
            style={{
              background: isNane ? 'linear-gradient(#272727, rgba(255, 255, 255, 0))' : "#5DB9E5",
            }}
            onClick={() => {
              setIsNane(prev => !prev)
            }} >Wiew Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
