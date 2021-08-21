import React, {useState, useEffect} from 'react'
import Navbar from '../../../components/Navbar'
import style from './movielist.module.css'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

function MovieList() {
  const history = useHistory()
  const dataSearch = history.location.search;
  const titleSerach = dataSearch.substring(dataSearch.indexOf("=")+1);
  // console.log(titleSerach, 'cccccccccccc');


  const [data, setData] = useState([])
  const [title, setTitle] = useState({
    name: ''
  })
  const [empty, setEmpty]= useState(false)

  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${titleSerach}`)
    .then((res)=>{
      const dataMovies = res.data.Search
      if(dataMovies.length>0){
        setData(dataMovies)
        setEmpty(false)
      } else {
        setEmpty(true)
      }
      // console.log(dataMovies, 'kasdkasfjas');
    })
    .catch((err)=>{
      console.log(err);
      setEmpty(true)
    })

  }, [titleSerach])
  console.log(empty)

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
            <h2 className={style["header__title"]}>SEARCH NOW SHOWING MOVIES</h2>
            <form autoComplete="off">
              <input 
                className={style["input__search"]} 
                type="search" 
                placeholder="Example : Batman" 
                name="name"
                id="name"
                value={title.name}
                onChange={(e)=>handleInputSearch(e)}
              />
            </form>
            
          </div>
        </div>
      </section>
      <section className={style["container__cardmovies"]}>
      {
        data===undefined || empty ? 
        <>
          <h2 className={style["no_data"]}>No Data Found, Try to type 'Batman'</h2>
        </> 
        :
        data.map((item, i)=>{
          return (
            <div className={style["wrap__cardmovies"]} key={i}>
              <div className={style["cardmovies__content"]}>
                <div className={style["content__img"]}>
                  <img className={style["poster"]} src={item.Poster} alt="" />
                </div>
                <div className={style["cardmovies__name"]}>
                  <p className={style["cardmovies_title"]}>{item.Title}</p>
                  <p className={style["cardmovies_year"]}>{item.Year}</p>
                  <Link className={style["cardmovies__detail"]} to={`/moviedetails/${item.imdbID}`}>Details</Link>
                </div>          
              </div>
            </div>
          )
        })
      }




        {/* {data !== undefined || empty? data.map((item, i)=>{
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
         }) : 
         <h2>No Data</h2>
         }  */}

      </section>
    </div>
  )
}

export default MovieList
