import React, { Component } from 'react';

import './style.css';

class Contact extends Component {

  state = {
    formName: '',
    formEmail: '',
    formMessage: '',
    formURL: ''
  }

  change = e => {
		this.setState({
      [e.target.name]: e.target.value,
      formURL: `mailto:rjshoemaker55@gmail.com?subject=Website%20Inquiry&body=${this.state.formMessage}`
    });
    console.log(this.state.formURL)
	};

  render() {
    return (
      <div className='container main-section'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1 className='main-header'>Contact Me</h1>
            <h2 className='secondary-header'>Fill out the form below to e-mail me. I usually respond within a day.</h2>
          </div>
        </div>
        <div className='row' id='email-wrapper'>
          <div className='col-lg-6 col-sm-12'>
            <div id='email-form'>
              <form>
                Name
                <input 
                  className="new-email-inputs"
                  type="text" 
                  name="formName" 
                  placeholder="Name" 
                  value={this.state.formName}
                  onChange={e => this.change(e)}
                />
                Email
                <input 
                  className="new-email-inputs"
                  type="text" 
                  name="formEmail" 
                  placeholder="Email" 
                  value={this.state.formEmail}  
                  onChange={e => this.change(e)}
                />
                Message
                <br/>
                <textarea 
                  id="new-email-textarea"
                  rows="4" 
                  name="formMessage" 
                  placeholder="Message" 
                  value={this.state.formMessage}
                  onChange={e => this.change(e)} 
                />
              </form>
            </div>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <div id='email-preview'>
              <h4>Your Message</h4>
              <div id='new-email'>
                <p className='new-email-sections'><strong>From: </strong>{this.state.formName} ({this.state.formEmail})</p>
                <p className='new-email-sections'><strong>To: </strong>RJ Shoemaker</p>
                <p className='new-email-sections'><strong>Message: </strong>{this.state.formMessage}</p>
              </div>
            </div>
            <a id="email-send" href={this.state.formURL}>Send</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;