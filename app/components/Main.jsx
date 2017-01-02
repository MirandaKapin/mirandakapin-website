import React from 'react'
import ReactDOM from 'react-dom';
import { Link, DirectLink, Element, Events, scroll, scrollSpy } from 'react-scroll';
import { StickyContainer, Sticky } from 'react-sticky';

import Nav from 'Nav';
import Home from 'Home';
import Portfolio from 'Portfolio';

var durationFn = function(deltaTop) {
    return deltaTop;
};

var Main = React.createClass({

  componentDidMount: function() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

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
      <StickyContainer>
        <Sticky>
          <Nav/>
        </Sticky>


        <Element name="home" className="element" >
          <Home />
        </Element>

        <Element name="portfolio" className="element">
          <Portfolio />
        </Element>

        <Element name="contact" className="element">
          Contact
        </Element>



      </StickyContainer>
    );
  }

});

module.exports = Main;
