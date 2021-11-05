import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Carousel from '../Carousel'
import AllRestaurants from '../AllRestaurants'
import Footer from '../Footer'

import './index.css'

class HomeRoute extends Component {
  state = {search: '', canSendSearch: false}

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />

        <div className="bg-container">
          <Carousel />

          <AllRestaurants />
        </div>
        <Footer />
      </>
    )
  }
}

export default HomeRoute
