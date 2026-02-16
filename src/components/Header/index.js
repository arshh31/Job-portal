import {Link, withRouter} from 'react-router-dom'
import {FaShoppingBag} from 'react-icons/fa'
import {IoMdHome, IoIosLogOut} from 'react-icons/io'
import Cookie from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div>
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
          />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li className="listItems">Home</li>
            <IoMdHome className="logo-icons" size={26} color="#f1f5f9" />
          </Link>
          <Link to="/jobs" className="nav-link">
            <li className="listItems">Jobs</li>
            <FaShoppingBag className="logo-icons" size={24} color="#f1f5f9" />
          </Link>
        </ul>
      </div>

      <div>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <IoIosLogOut
          className="logo-icons"
          size={26}
          color="#f1f5f9"
          onClick={onClickLogout}
        />
      </div>
    </nav>
  )
}
export default withRouter(Header)
