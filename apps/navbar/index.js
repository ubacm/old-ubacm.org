import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import M from 'materialize-css'

const Navbar = () => {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  }, [])

  return (
    <>
      <div className="navbar-fixed">
        <nav className="z-depth-1">
          <div className="container">
            <a href="/" className="brand-logo">
              <img className="logo" src="/assets/ubacm.png" />
              <span className="branding">UB ACM</span>
            </a>
            <a
              href="#"
              data-target="mobile_nav"
              className="sidenav-trigger show-on-large"
            >
              <i className="fas fa-bars" />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/schedule">Event Schedule</a>
              </li>
              <li>
                <a href="/join">Stay Updated</a>
              </li>
              {/* <li>
                <a
                  href="https://apps.ubacm.org/"
                  className="btn waves-effect waves-light"
                >
                  Apps
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile_nav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="/assets/davis_new.jpg" />
            </div>
            <h4 className="white-text">UB ACM</h4>
          </div>
        </li>
        {/* <li>
          <a className="waves-effect" href="https://apps.ubacm.org/">
            <i className="fas fa-user" />
            Chapter Apps
          </a>
        </li> */}
        {/* <li>
          <a
            className="waves-effect"
            href="https://apps.ubacm.org/events/check-in/"
          >
            Check In
          </a>
        </li> */}
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Chapter Activities</a>
        </li>
        <li>
          <a className="waves-effect" href="/join">
            Stay Updated
          </a>
        </li>
        <li>
          <a className="waves-effect" href="/schedule">
            Event Schedule
          </a>
        </li>
        {/* <li>
          <a className="waves-effect" href="/hack">
            <i>
              <img className="img_icon" src="/assets/hacknights/logo.png" />
            </i>
            Hack Nights
          </a>
        </li> */}
        <li>
          <a className="waves-effect" href="/space">
            <i>
              <img className="img_icon" src="/assets/hackspace/logo.png" />
            </i>
            Hackspace
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">UB ACM</a>
        </li>
        <li>
          <a className="waves-effect" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="waves-effect" href="/team">
            E-Board
          </a>
        </li>
        <li>
          <a className="waves-effect" href="/conduct">
            Code of Conduct
          </a>
        </li>
        <li>
          <a className="waves-effect" href="/constitution">
            Chapter Constitution
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Social</a>
        </li>
        <li>
          <a
            className="waves-effect"
            href="https://discord.gg/ZXcG9tKPcJ"
            target="_blank"
          >
            <i className="fas fa-external-link-alt" />
            Discord
          </a>
        </li>
        {/* <li>
          <a
            className="waves-effect"
            href="https://www.facebook.com/ubacm.org"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"/>
            Facebook
          </a>
        </li> */}
        <li>
          <a
            className="waves-effect"
            href="https://github.com/ubacm"
            target="_blank"
          >
            <i className="fas fa-external-link-alt" />
            GitHub
          </a>
        </li>
      </ul>
    </>
  )
}

ReactDOM.render(<Navbar />, document.getElementById('app__navbar'))
