import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="homeContainer">
    <Header />
    <div className="whole-cont">
      <div className="jobDescriptionContainer">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary, information,
          company reviews.Find the job that fits your abilities
        </p>
        <Link to="/jobs">
          <button className="jobButton" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
      className="homeImage-large"
      alt="home"
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png"
      className="homeImage-small"
      alt="home"
    />
  </div>
)
export default Home
