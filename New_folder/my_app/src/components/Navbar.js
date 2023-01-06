import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: 'aquamarine'}}>
    <div className="container-fluid"  style={{}}>
      <a className="navbar-brand navelem" href="/">{props.title1}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link navelem" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navelem" href="/">Contact</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled </a>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="type here" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" style={{backgroundColor:'#5C5CFF', color:'white'}}>Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title1: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title1: 'About Suddha'
}