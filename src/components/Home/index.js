import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  console.log(props)
  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          First Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for job
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button
            className="find-jobs-btn"
            type="button"
            onClick={onClickFindJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
