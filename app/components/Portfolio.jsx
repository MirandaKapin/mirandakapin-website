import React from 'react'

const Portfolio = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="medium-10 medium-offset-1 columns">

          <div className="">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">

              <div className="medium-6 columns tile">
                <div className="inside">
                  <a href="http://s.codepen.io/Mkapin/debug/bBPjLd" target="_blank" >
                    <div className="wrapper">
                      <image src="images/calculator.png"></image>
                    </div>
                    <h5>Calculator</h5>
                  </a>
                </div>
              </div>

              <div className="medium-6 columns tile">
                <div className="inside">
                  <a href="http://s.codepen.io/Mkapin/debug/VmzNXo" target="_blank" >
                    <div className="wrapper">
                      <image src="images/wikipedia.png"></image>
                    </div>
                    <h5>Search Wikipedia</h5>
                  </a>
                </div>
              </div>
              <div className="medium-6 columns tile">
                <div className="inside">
                  <a href="http://s.codepen.io/Mkapin/debug/jVLQQW" target="_blank" >
                    <div className="wrapper">
                      <image src="images/WeatherProject.png"></image>
                    </div>
                    <h5>Weather Application</h5>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Portfolio
