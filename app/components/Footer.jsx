var React = require('react');

import FontAwesome from 'react-fontawesome';

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer">
        <div className="icons">
          <a href="https://www.linkedin.com/in/miranda-kapin-b65a1726" target="_blank">
            <FontAwesome name="linkedin" size='2x' />
          </a>
          <a href="https://github.com/MirandaKapin" target="_blank">
            <FontAwesome name="github" size='2x' />
          </a>
          <a href="http://codepen.io/Mkapin/" target="_blank">
            <FontAwesome name="codepen" size='2x' />
          </a>
        </div>
        <div className="footer-text">
          Copyright &copy; 2017 Miranda Kapin<br/>
          All Rights Reserved
        </div>
      </div>
    );
  }

});

module.exports = Footer;
