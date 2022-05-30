import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam eos, at voluptatum dignissimos quis quo rem odio placeat ipsam. Ullam sequi minima quidem optio dignissimos vitae, recusandae autem perspiciatis?
      </p>
      <img src={imgHomeShop} alt="accueil shop" />

    </div>
  )
}
