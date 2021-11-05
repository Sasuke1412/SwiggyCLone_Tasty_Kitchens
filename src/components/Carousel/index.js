import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import './index.css'

class Carousel extends Component {
  state = {
    offersList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getCarousel()
  }

  getCarousel = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.offers.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
    }))
    this.setState({offersList: updatedData, isLoading: false})
  }

  renderCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    }
    const {offersList} = this.state
    return (
      <Slider {...settings} className="carousel-container">
        {offersList.map(eachImage => (
          <img src={eachImage.imageUrl} alt="offer" />
        ))}
      </Slider>
    )
  }

  renderLoader = () => (
    <div className="carousel-loader" testid="restaurants-offers-loader">
      <Loader type="ThreeDots" color="#F7931E" height={30} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderCarousel()
  }
}

export default Carousel
