import React ,{Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createProfile} from '../../actions/profile'
import {Link,useNavigate} from 'react-router-dom'




const Createprofile = ({createProfile,useNavigate}) => {
    const [formData,setFormData] = useState({
        location: '',
        desc:'',
        postcode:'',
        phnno:'',
        adress:''
    });
    const {
        location,
        desc,
        postcode,
        phnno,
        adress
    }=formData;
   
    
    
//    const navigate =useNavigate();

    const onChange= (e)=>setFormData({...formData,[e.target.name]:[e.target.value]});

    const onSubmit = (e) => {
      e.preventDefault();
      createProfile(formData,  useNavigate ? true : false);
    };
   
  return (
    <div>
      <div style={{
     "margin-top":"75px",
     "border-radius": "5px",
      "padding": "20px",
      "box-sizing": "border-box"


   }}></div>
    <Fragment>
        <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Enter your Parking space details
      </p>
    
      <form className="form" onSubmit={onSubmit}>
        < div className="form-group"/>
        <div className="form-group">
          <select name="option"  onChange={onChange}>
            <option>Select Parking Type</option>
            <option value="Private House">Private House</option>
            <option value="Cottage">Cottage</option>
            <option value="Hotel">Hotel</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Commercial parking space">Commercial parking space</option>

            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of what type of place it is.
          </small>
        </div> 
    
         
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={onChange}/>
          <small className="form-text"
            >City & State</small
          >
        </div>
        <div className="form-group">
        <textarea
            placeholder="A short description about your place"
            name="desc"
            value={desc}
            onChange={onChange}
          />
          <small className="form-text"
            >Describe your Space</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Mobile number" name="phnno" value={phnno} onChange={onChange}/>
          <small className="form-text"
            >Mobile Number</small
          >
          <textarea
            placeholder="Adress of your place"
            name="adress"
            value={adress}
            onChange={onChange}
          />
          <small className="form-text"
            >Adress of your space</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Postcode" name="postcode" value={postcode} onChange={onChange}/>
          <small className="form-text"
            >Parking space postcode</small
          >
       </div>
       {/* <div className="form-group">
       <h4>From Date</h4>
          <input type="date" name="from" value={date} onChange={onChange} />
        </div>
        <small className="form-text"
            >Date available</small
          >
          <div className="form-group">
       <h4>Time from</h4>
          <input type="time" name="from"  onChange={onChange} />
        </div>
        <small className="form-text"
            >Time available</small
          >
         */}


        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/Dashboard" className="btn btn-primary my-1">
            Go Back
          </Link>
      </form>
    </Fragment>
    </div>
  )
  }


Createprofile.propTypes =  {
  createProfile:PropTypes.func.isRequired
}
  

{/* export default connect({createProfile}); */}

const mapStateToProps=state=>({
    profile:state.profile
});
export default connect(mapStateToProps,{createProfile})(Createprofile);



