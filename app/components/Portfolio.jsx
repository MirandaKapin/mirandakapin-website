import React, { PropTypes } from 'react'

const Portfolio = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="medium-10 medium-offset-1 columns">

          <div className="pg-content">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">

              <div className="large-3 medium-6 columns">

                <div>
                  Contents here
                </div>
                <h5>Something 1</h5>
              </div>
              <div className="large-3 medium-6 columns">
                <h4>Something 2</h4>
                <div>
                  Contents here
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <h4>Something 3</h4>
                <div>
                  Contents here
                </div>
              </div>
              <div className="large-3 medium-6 columns">
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
