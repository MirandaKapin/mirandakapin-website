import React from 'react'

const Home = React.createClass({
  render () {
    return (
      <div className="">
        <div className="row">
          <div className="top-padding">

            <div className="medium-10 medium-offset-1 columns ">

              <div className="pg-content">

                <div className="row">
                  <div className="medium-3 small-12 columns">
                    <div className="row">
											<figure className="small-4 small-offset-4 medium-12 medium-offset-0 columns">
                        <img className="" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/171/138/261fcf7.jpg" alt="Miranda Kapin image" />
                      </figure>
                    </div>
                  </div>
                  <div className="medium-9 small-12 columns">
                    <div className="main-header">
                      <h2>I&#39;m <strong>Miranda Kapin</strong></h2>
                      <h5 className="sub-heading">Web Developer / Product Manager</h5>
                    </div>


                    <div className="main-header-list">
                      <div className="row">
                        <div className="small-3 columns title">Location</div>
                        <div className="small-9 columns content">Marina del Rey, California</div>
                      </div>
                      <div className="row">
                        <div className="small-3 columns title">Email</div>
                        <div className="small-9 columns content"><a href="mailto:mirandakapin@gmail.com">mirandakapin@gmail.com</a></div>
                      </div>
                      <div className="row">
                        <div className="small-3 columns title">Phone</div>
                        <div className="small-9 columns content"><a href="tel:+18057940193">805.794.0193</a></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className="small-12 columns">
                    <div className="large-text about">
                      Hello! I'm Miranda Kapin. Web Developer and Product Leader. Experienced with all stages of the development cycle for both B2B and B2C Web Applications.
                      Well-versed in several programming languages and frameworks including ReactJS, NodeJS, and Demandware.
                      Strong background in project management, customer relations, and analysis.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
})

export default Home
