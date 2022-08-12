import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />

      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/product" className="nav-link">
            Products
          </Link>
        </li>

        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>

      <ul className="nav-list-icons">
        <li>
          <Link to="/" className="nav-image-icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
              alt=" nav home"
              className="link-image"
            />
          </Link>
        </li>

        <li>
          <Link to="/product" className="nav-image-icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="link-image"
            />
          </Link>
        </li>

        <li className="home-img">
          <Link to="/cart" className="nav-image-icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
              alt="nav cart"
              className="link-image"
            />
          </Link>
        </li>
      </ul>

      <button type="button" className="logout-button">
        Logout
      </button>
      <button type="button" className="logout-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)

export default Header
