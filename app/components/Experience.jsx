import React from 'react'

const Experience = React.createClass({
  render () {
    return (
      <div>
        <div className="row">
          <div className="medium-10 medium-offset-1 columns">

            <div className="">
              <h1 className="text-center">Experience</h1>
              <div className="row">

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">April 2014 - Present</div>
                    <div className="location">Transplant Connect</div>
                    <div className="title">Business Analyst</div>
                    <div className="description">
                      <span><b>Accomplishments</b></span>
                        <span className="li">Managed the creation of a mobile web application from discovery, UI design, content planning, execution, QA and delivery.</span>
                        <span className="li">Created reusable release notes generator by using <b>Jira</b>&apos;s <b>REST API</b> with <b>Python</b>.</span>
                        <br/>
                      <span><b>Responsibilities</b></span>
                        <span className="li">Interviewed clients to determine pain points and inefficiencies in their processes.</span>
                        <span className="li">Built prototypes with <b>ReactJS</b> to validate our upcoming products or features.</span>
                        <span className="li">Shadowed users to see how they used our systems.</span>
                        <span className="li">Analyzed log files for determining customer usage patterns and devices for prioritizing future work.</span>
                        <span className="li">Handled requests from clients; formatted requests into user stories, received estimates from required development teams, and prioritized projects as per executive direction.</span>
                        <span className="li">Prioritized work through backlog grooming for current and future sprints.</span>
                        <span className="li">Created documentation in Confluence for non-technical individuals to track software implementation details as well as centralize team knowledge.</span>
                        <span className="li">Created workflow diagrams for conveying complicated processes.</span>
                        <span className="li">Presented released projects to clients via broadcasted webinars.</span>
                    </div>
                  </div>
                </div>

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">March 2013 - March 2014</div>
                    <div className="location">Guthy-Renker</div>
                    <div className="title">Front-End Developer / <br/>Demandware Developer</div>
                    <div className="description">
                      Built the front-end architecture for getDepend.com mobile.
                      Created new landing pages, templates, and scripts for several <b>ecommerce</b> websites.
                      Managed workload for other developers.
                      Trained new developers on <b>Demandware</b> and the development environment.
                      Implemented javascript pixels in our sites for user tracking with <b>Omniture</b>.
                      Created proof of concepts for emerging projects. Performed maintenance work on production websites, including bugs and outages.
                    </div>
                  </div>
                </div>

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">June 2012 - March 2013</div>
                    <div className="location">UCLA Alumni Association</div>
                    <div className="title">Programmer/Analyst</div>
                    <div className="description">
                      Create internal and external web applications for reporting.
                      Manage internal website for any bugs that come up.
                      Create and update reports requested by members of the team.
                      Used <b>HTML</b>, <b>CSS</b>, <b>Javascript/jQuery</b>, <b>Coldfusion</b>, and <b>SQL</b>.

                    </div>
                  </div>
                </div>

                <div className="medium-6 columns tile">
                  <div className="job">
                    <div className="dates">January 2012 - June 2012</div>
                    <div className="location">Aurora Capital Group</div>
                    <div className="title">Accounting Clerk</div>
                    <div className="description">
                      Managed over 50 bank accounts.
                      Evaluated and Optimized spending.
                      Developed Excel Spreadsheets to increase productivity and manage human error.
                      Reconciled accounts every month to insure accuracy.

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

export default Experience
