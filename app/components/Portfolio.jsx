import React, { PropTypes } from 'react'

const Portfolio = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="medium-10 medium-offset-1 columns">
          <h1>Portfolio</h1>
          <div className="pg-content">
            <div className="row">

              <div className="medium-3 small-6 columns">
                <h5>Something 1</h5>
                <div>
                  Contents here
                </div>
              </div>
              <div className="medium-3 small-6 columns">
                <h4>Something 2</h4>
                <div>
                  Contents here
                </div>
              </div>
              <div className="medium-3 small-6 columns">
                <h4>Something 3</h4>
                <div>
                  Contents here
                </div>
              </div>
              <div className="medium-3 small-6 columns">
                <h4>Something 4</h4>
                <div>
                  Contents here
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
