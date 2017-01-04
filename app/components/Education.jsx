import React from 'react'

const Education = React.createClass({
  render () {
    return (
      <div>
        <div className="row">
          <div className="medium-10 medium-offset-1 columns">

            <div className="">
              <h1 className="text-center">Education</h1>
              <div className="row">

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">October 2016</div>
                    <div className="location">Product Manager Training</div>
                    <div className="title">Santa Monica, California</div>
                    <div className="description">

                    </div>
                  </div>
                </div>

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">November 2014</div>
                    <div className="location">Agile/Scrum Training</div>
                    <div className="title">Santa Monica, California</div>
                    <div className="description">

                    </div>
                  </div>
                </div>

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">2008 - 2013</div>
                    <div className="location">University of California, Los&nbsp;Angeles</div>
                    <div className="title">B.S. Mathematics Applied Science<br/>Minor in Statistics</div>
                    <div className="description"></div>
                  </div>
                </div>

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">October 2013</div>
                    <div className="location">Demandware Training</div>
                    <div className="title">Demandware Certification</div>
                    <div className="description"></div>
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

export default Education
