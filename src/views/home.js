import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hola template</title>
        <meta property="og:title" content="Hola template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-container1">
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-right"></div>
              </nav>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us button">
              <span className="home-text">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding">
                  <span className="home-text1">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us1 button">
                  <span className="home-text2">work with us</span>
                </button>
              </nav>
            </div>
          </div>
          <header data-role="Header" className="home-header">
            <img
              alt="image"
              src="/screenshot%202023-10-07%20105656-200h.png"
              className="home-image01"
            />
            <div className="home-nav2">
              <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
            </div>
            <div className="home-btn-group">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu1">
              <div className="home-nav3">
                <div className="home-container2">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="home-image02"
                  />
                  <div data-role="CloseMobileMenu" className="home-menu-close1">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName9"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon06"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon10"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header1">
          <h1 className="home-text3">
            <span className="home-text4">
              Welcome to &quot;PeacefulMind&quot;. Our mission is to provide
              resources, community, and guidance for your journey to better
              mental health.
            </span>
            <br></br>
          </h1>
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/mh-700h.jpg" className="home-image03" />
        </div>
        <div className="home-information">
          <div className="home-purpose">
            <span className="home-caption">What is mental health</span>
            <span className="home-description">
              Caring for mental health is important for maintaining positive
              emotions and thoughts. It helps us be more productive, have better
              self-esteem, and form stronger relationships. It also has positive
              effects such as reducing eating disorders by managing stress.
              Additionally, it improves mood, reduces anxiety, brings inner
              peace, and enhances clear thinking.
            </span>
          </div>
        </div>
      </div>
      <h1 className="home-text6">Teen Health: Mental Health</h1>
      <a
        href="https://www.youtube.com/watch?v=1i9OktVsTWo"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link03"
      >
        <div className="home-container3">
          <video
            src="https://youtu.be/1i9OktVsTWo"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            className="home-video"
          ></video>
        </div>
      </a>
      <div className="home-header2">
        <div className="home-container4">
          <div className="home-heading">
            <h2 className="home-text7">Need someone to talk to?</h2>
            <span className="home-text8">
              Join our discord server and chat with individuals who share their
              personal stories and struggles. Connect with others who understand
              what you&apos;re going through, and find encouragement and
              friendship.
            </span>
          </div>
          <img alt="image" src="/d-200h.png" className="home-image04" />
        </div>
        <a
          href="https://discord.com/invite/et8zm9HZJk"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link04 button"
        >
          Let’s chat
        </a>
      </div>
      <footer className="home-footer">
        <div className="home-container5">
          <div className="home-header3">
            <img
              alt="image"
              src="/screenshot%202023-10-07%20105656-200h.png"
              className="home-image05"
            />
            <div className="home-socials">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                <img
                  alt="image"
                  src="/facebook%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <img
                  alt="image"
                  src="/twitter%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <img
                  alt="image"
                  src="/instagram%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <img
                  alt="image"
                  src="/linkedin%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <img
                  alt="image"
                  src="/youtube%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <img
                  alt="image"
                  src="/telegram%20-%20negative.svg"
                  className="social"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-contact">
            <span className="home-email">PEACEFULMIND@gmail.com</span>
            <span className="home-number">+65 12345678</span>
          </div>
          <div className="home-links-row">
            <div className="home-links-column">
              <span className="home-link11">About</span>
              <span className="home-link12">Team</span>
              <span className="home-link13">News</span>
              <span className="home-link14">Partners</span>
              <span className="home-link15">Careers</span>
              <span className="home-link16">Press &amp; Media</span>
            </div>
          </div>
        </div>
        <div className="home-socials1">
          <div className="home-row">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home-row1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
