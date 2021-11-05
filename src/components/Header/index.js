import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Cookies from 'js-cookie'

import CartContext from '../../Context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const getColor = current => {
    const {history} = props
    if (history.location.pathname === current) {
      console.log(history.location.pathname)
      return '#f7931e'
    }
    return '#334155'
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length
        console.log(cartList)

        return (
          <>
            {cartItemsCount > 0 && (
              <span className="cart-count-badge">{cartList.length}</span>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-container">
      <div className="nav-bar-large-container">
        <div className="icon-container">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/ddw5fowln/image/upload/v1635412673/tastyKitchen/Group_7420_lshsvn.png"
              alt="website logo"
            />
          </Link>
          <h1 className="icon-heading">Tasty Kitchen</h1>
        </div>

        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li className="nav-menu-item" style={{color: getColor('/')}}>
              Home
            </li>
          </Link>

          <Link to="/cart" className="nav-link">
            <li className="nav-menu-item" style={{color: getColor('/cart')}}>
              Cart
              {renderCartItemsCount()}
            </li>
          </Link>

          <Link to="/profile" className="nav-link">
            <li className="nav-menu-item" style={{color: getColor('/profile')}}>
              Profile
            </li>
          </Link>
          <li>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
        <Popup
          modal
          trigger={
            <button type="button" className="hamburger-btn">
              <GiHamburgerMenu size={25} className="hamburger" />
            </button>
          }
          position="top right"
        >
          {close => (
            <div className="modal-container">
              <ul className="nav-link-container">
                <Link to="/" className="nav-link">
                  <li className="nav-menu-item" style={{color: getColor('/')}}>
                    Home
                  </li>
                </Link>
                <Link to="/cart" className="nav-link">
                  <li
                    className="nav-menu-item"
                    style={{color: getColor('/cart')}}
                  >
                    Cart
                    {renderCartItemsCount()}
                  </li>
                </Link>
                <Link to="/profile" className="nav-link">
                  <li
                    className="nav-menu-item"
                    style={{color: getColor('/profile')}}
                  >
                    Profile
                  </li>
                </Link>
                <li>
                  {' '}
                  <button
                    type="button"
                    className="logout-desktop-btn"
                    onClick={onClickLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default withRouter(Header)
