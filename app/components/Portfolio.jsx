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
                  <a href="http://codepen.io/Mkapin/full/bBPjLd/" target="_blank" >
                    <div className="wrapper">
                      <image src="images/calculator.png"></image>
                    </div>
                    <h5>Calculator</h5>
                    <h6>Codepen.io, HTML, CSS/SCSS, Javascript</h6>
                  </a>
                </div>
              </div>

              <div className="medium-6 columns tile">
                <div className="inside">
                  <a href="http://codepen.io/Mkapin/full/VmzNXo/" target="_blank" >
                    <div className="wrapper">
                      <image src="images/wikipedia.png"></image>
                    </div>
                    <h5>Search Wikipedia</h5>
                    <h6>Codepen.io, HTML, CSS/SCSS, Javascript, Wikipedia API</h6>
                  </a>
                </div>
              </div>
              <div className="medium-6 columns tile">
                <div className="inside">
                  <a href="http://codepen.io/Mkapin/full/jVLQQW/" target="_blank" >
                    <div className="wrapper">
                      <image src="images/WeatherProject.png"></image>
                    </div>
                    <h5>Weather Application</h5>
                    <h6>Codepen.io, HTML, CSS/SCSS, Javascript, Open&nbsp;Weather&nbsp;API</h6>
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
