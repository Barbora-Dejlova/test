import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name2 = this.props.data.name2;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio3 = this.props.data.bio3;
      var bio4 = this.props.data.bio4;
      var bio5 = this.props.data.bio5;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="BD Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>What we do</h2>

            <p>{bio}</p>

<p><li>{bio4}</li>

<li>{bio5}</li></p>

<h2>Who are our clients?</h2>

<p>{bio3}</p>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact</h2>
                  <p className="address">
						   <span>{name2}</span><br />
                     <span>
						        {street}<br />
                   </span>
						   <span>
						         {city} {state}, {zip}<br />
                   </span>
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>


               
               <div className="columns download">
                  <p>
                     <a href="https://form.123formbuilder.com/5739931/form" className="button"><i className="fa fa-download"></i>Contact form</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;


