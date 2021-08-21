import React from 'react'
import {Link} from 'react-router-dom'
import style from './home.module.css'
import {homebg} from '../../../assets'
import Navbar from '../../../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar 
        title="Stockbit's Movies"
      />
      <section className={style["container__home"]}>
        <div className={style["wrap__home"]}>
          <div className={style["header__contents"]}>
            <div className={style["header__tittles"]}>
              <h2 className={style["title"]}>Stockbit's Movies</h2>
              <p className={style["title__desc"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe provident nobis repellat obcaecati repudiandae facere quam ipsam voluptatum fugiat aut alias, quis accusantium dolorem, rerum dignissimos perferendis ipsa tempore nemo!</p>
              
              <Link className={style["title__link"]} to="/movies"> See The Movies !</Link>
            </div>
          </div>
        </div>
        <div className={style["wrap__home"]}>
          <div className={style["header__contents"]}>
            <div className={style["header__image"]}>
              <img className={style["header__img"]} src={homebg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
