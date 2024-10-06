import React from 'react'
import heart from '../assets/heart.png'
import search from '../assets/search.png'
import bag from '../assets/shopping-bag.png'
import user from '../assets/user.png'
const Navbar = () => {
  return (
   <>
      <div className="topbar">
        <span>Lorem ipsum dolor !</span>
        <span>Lorem ipsum dolor .</span>
        <span>Lorem ipsum dolor .</span>
      </div><br />
      <div className="head">
        <ul>
          <li>#logo</li>
          <li><h1 id='title'>LOGO</h1></li>
          <li>
            <ul>
              <li><img src={search} alt="" /></li>
              <li><img src={heart} alt="" /></li>
              <li><img src={bag} alt="" /></li>
              <li><img src={user} alt="" /></li>
              <li>
                <select name="" id="lang">
                  <option value="eng">ENG</option>
                  <option value="kan">KAN</option>
                  <option value="eng">ENG</option>
                </select>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="tabs">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <hr />
   </>
  )
}

export default Navbar