import { useEffect, useState } from "react";
import styles from "./section.module.css";
import { getFilmList, getTopFilm, getComingSonFilm, getGenerals } from "../../service";

export default function Section({ changeId }) {
  const [filmList, setFilmList] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const [category, setCategory] = useState("Trending");

  const [isRow, setIsRow] = useState(true)

  useEffect(() => {
    if (category === "Trending") {
      getFilmList(pageNumber).then((info) => {
        if(pageNumber === 1){
          setFilmList([...info.results])
        }else{
          setFilmList([...filmList, ...info.results])
        }
      });
    } else if(category === "Top Rated") {
      getTopFilm(pageNumber).then((info) => {
        if(pageNumber === 1){
          setFilmList([...info.results])
        }else{
          setFilmList([...filmList, ...info.results])
        }
       
      });
    } else if(category === "Coming Soon") {
      getComingSonFilm(pageNumber).then((info) => {
        if(pageNumber === 1){
          setFilmList([...info.results])
        }else{
          setFilmList([...filmList, ...info.results])
        }
       
      });
    }
  }, [pageNumber, category]);
  useEffect(() => {
    getGenerals()
      .then(res => console.log(res))
  }, [])
  

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.button}>
          <button 
            style={{
              fontWeight: category === "Trending" ? "bold" : "normal",
              borderBottomWidth: category === "Trending" ? "4px" : "1px",
            }}
            onClick={() => {
              setCategory("Trending");
              setPageNumber(1)
            }}
            className={styles.buttonNav}
          >
            Trending
          </button>
          <button
            style={{
              fontWeight: category === "Top Rated" ? "bold" : "normal",
              borderBottomWidth: category === "Top Rated" ? "4px" : "1px",
            }}
            onClick={() => {
              setCategory("Top Rated");
              setPageNumber(1)
              
            }}
            className={styles.buttonNav}
          >
            Top Rated
          </button>
          <button
            style={{
              fontWeight: category === "Coming Soon" ? "bold" : "normal",
              borderBottomWidth: category === "Coming Soon" ? "4px" : "1px",
            }}
            onClick={() => {
              setCategory("Coming Soon");
              setPageNumber(1)
            }}
            className={styles.buttonNav}
          >
            Coming Soon
          </button>
        </div>
        <div className={styles.paparentsSquareTu}>
          <button id={isRow ? '': styles.isRowSquare} className={styles.paparentsSquare} onClick={() => {
            setIsRow(true)
          }}>
            <div className={styles.square} />
            <div className={styles.square} />
            <div className={styles.square} />
            <div className={styles.square} />
          </button>
          <button id={isRow? styles.activeColum: ''} className={styles.colum} onClick={() => {
            setIsRow(false)
          }}>
            <div className={styles.squareTu} />
            <div className={styles.squareTu} />
          </button>
        </div>
      </div>
      <div className={styles.general}>
        {filmList.map((el) => {
          return (
            <div key={el.id} className={isRow ? styles.divs : styles.isColum}>
              <img
                className={isRow ? styles.img : styles.isColumImg}
                src={"https://image.tmdb.org/t/p/original" + el.backdrop_path}
                onClick={() => {
                  changeId(el.id);
                }}
              />
              <div className={isRow ? styles.infoFilm : styles.isColumFulInfo}>
                <h3 className={styles.title}>{el.title.toUpperCase()}</h3>
                <span className={styles.reting}>{el.vote_average}</span>
                {/* {el.genres.f} */}
                {/* <p>{el.overview}</p> */}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={styles.btn_more}
        onClick={() => {
          setPageNumber((prev) => prev + 1);
        }}
      >
        Load More
      </button>
    </>
  );
}
