"use strict";

var React     = require('react');
var ReactDOM  = require('react-dom');
var FontAwesome = require('react-fontawesome');
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};


var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-nav" >
      <div className="row">
        <div className="small-12" >


          <div className="top-bar top-bar-full">

            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text cursive">
                  Miranda Kapin
                </li>
              </ul>
            </div>

            <div className="top-bar-right" id="main-menu" data-responsive-menu="drilldown small-dropdown">
              <ul className="menu"  data-magellan >
                <li>
                  <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} >
                    <div className="xs"><FontAwesome name='home' /></div>
                    <span className="sm">Home</span>

                  </Link>
                </li>
                <li>
                  <Link activeClass="active" className="experience" to="experience" spy={true} smooth={true} duration={500} >
                    <div className="xs"><FontAwesome name='building' /></div>
                    <span className="sm">Experience</span>

                    </Link>
                </li>
                <li>
                  <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} >
                    <div className="xs"><FontAwesome name='briefcase' /></div>
                    <span className="sm">Portfolio</span>
                  </Link>
                </li>

                <li>
                  <Link activeClass="active" className="education" to="education" spy={true} smooth={true} duration={500} >
                    <div className="xs"><FontAwesome name='graduation-cap' /></div>
                    <span className="sm">Education</span>
                  </Link>
                </li>
                {/*  <li>
                  <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >
                    <div className="xs"><FontAwesome name='phone' /></div>
                    <span className="sm">Contact</span>
                  </Link>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

});

module.exports = Nav;
