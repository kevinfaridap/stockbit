import React from 'react'
import Navbar from '../../../components/Navbar'
import style from './moviedetail.module.css'

function MovieDetails() {
  return (
    <div>
      <Navbar 
        title="Stockbit's Movies"
      />
      <div className={style["respone__api"]}>
       I cannot get data because the response of api : Request limit reached!
      </div>
    </div>
  )
}

export default MovieDetails
