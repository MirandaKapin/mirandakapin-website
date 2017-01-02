"use strict";

var React     = require('react');
var ReactDOM  = require('react-dom');
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

  componentDidMount: function() {

    scrollSpy.update();

  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
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
                  <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} >Home</Link>
                </li>
                <li>

                  <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} >Portfolio</Link>
                </li>
                <li>
                  <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                </li>
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
