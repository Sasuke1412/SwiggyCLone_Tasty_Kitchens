import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="logo-container">
      <img
        src="https://res.cloudinary.com/ddw5fowln/image/upload/v1635412673/tastyKitchen/Group_7420_lshsvn.png"
        alt="website-footer-logo"
        className="logo"
      />
      <h1 className="heading">Tasty Kitchen</h1>
    </div>
    <p className="description">
      The only thing we are serious about is food.
      <br /> Contact us on
    </p>
    <div className="social-icons-container">
      <FaPinterestSquare
        testid="pintrest-social-icon"
        className="social-icons"
      />
      <FaInstagram testid="instagram-social-icon" className="social-icons" />
      <FaTwitter testid="twitter-social-icon" className="social-icons" />
      <FaFacebookSquare
        testid="facebook-social-icon"
        className="social-icons"
      />
    </div>
  </div>
)

export default Footer
