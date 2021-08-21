import React, {useState, useEffect} from 'react'
import Navbar from '../../../components/Navbar'
import style from './movielist.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function MovieList() {

  const [data, setData] = useState([])
  const [title, setTitle] = useState('Batman')

  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${title}`)
    .then((res)=>{
      const dataMovies = res.data.Search
      setData(dataMovies)
      console.log(dataMovies, 'isina');
    })
    .catch((err)=>{
      console.log(err);
    })

  }, [])

  const handleInputSearch = (e) =>{
    setTitle({
      ...title,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div>
      <Navbar 
        title="Stockbit's Movies"
      />
      <section className={style["container__header"]}>
        <div className={style["wrap__header"]}>
          <div className={style["header__content"]}>
            <h2 className={style["header__title"]}>ALL NOW SHOWING MOVIES</h2>
            <input 
              className={style["input__search"]} 
              type="search" 
              placeholder="Search Your Movies" 
              name="title"
              id="title"
              value={title.name}
              onChange={(e)=>handleInputSearch(e)}
            />
          </div>
        </div>
      </section>
      <section className={style["container__cardmovies"]}>
        {data !== undefined ? data.map((item, i)=>{
        return (
          <div className={style["wrap__cardmovies"]}>
            <div className={style["cardmovies__content"]}>
              <div className={style["content__img"]}>
                <img className={style["poster"]} src={item.Poster} alt="" />
              </div>
              <div className={style["cardmovies__name"]}>
                <p className={style["cardmovies_title"]}>{item.Title}</p>
                <p className={style["cardmovies_year"]}>{item.Year}</p>
                <Link className={style["cardmovies__detail"]} to="">Details</Link>
              </div>          
            </div>
          </div>
          
         )
         }) : null} 
      </section>
    </div>
  )
}

export default MovieList
