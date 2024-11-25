import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ShopPage.css'

const ShopPage = () => {
  return (
    <div className='shoppage'>
        <Navbar/>
        <div className="shop-container">
      <div className="content-container">
        {/* Shop Title */}
        <div className="shop-title">
          <h2>Shop</h2>
          <img src="assets/Shopping cart.png" alt="Shopping Cart" />
        </div>

        {/* Avatar Borders */}
        <div className="avatar-container">
          <h2>Avatar Borders</h2>
          <div className="avatar-list">
            <ul>
              <li>
                <a href="#" className="avatar1">
                  <img src="assets/avatar1.png" alt="Avatar 1" />
                </a>
              </li>
              <li>
                <a href="#" className="avatar2">
                  <img src="assets/avatar2.png" alt="Avatar 2" />
                </a>
              </li>
              <li>
                <a href="#" className="avatar3">
                  <img src="assets/avatar3.png" alt="Avatar 3" />
                </a>
              </li>
              <li>
                <a href="#" className="avatar4">
                  <img src="assets/avatar4.png" alt="Avatar 4" />
                </a>
              </li>
              <li>
                <a href="#" className="avatar5">
                  <img src="assets/avatar5.png" alt="Avatar 5" />
                </a>
              </li>
            </ul>
          </div>
          <h3>Shop resets at 00:00 WIB</h3>
        </div>

        {/* Boost Your Profile */}
        <div className="boost-container">
          <div className="boost-title">
            <h2>Boost Your Profile (7 days)</h2>
            <img src="assets/stonk.png" alt="Boost Icon" />
          </div>
          <div className="boost-shop">
            <a href="#">
              <img src="assets/boost-group.png" alt="Boost Group" />
            </a>
          </div>
        </div>

        {/* Membership */}
        <div className="member-container">
          <div className="member-title">
            <div className="member-title-text">Membership</div>
            <img src="assets/Medal.png" alt="Membership Medal" />
          </div>
          <div className="member-shop">
            <a href="#">
              <img src="assets/membership.png" alt="Membership" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShopPage