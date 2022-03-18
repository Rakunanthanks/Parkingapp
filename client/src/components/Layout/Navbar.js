import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({auth: {isAuthenticated,loading},logout}) => {
  const authLinks=(
    <ul><li><a onClick={logout} href="#!">
      <i className='fas fa-sign-out-alt'></i>{' '}
    <span className='hide-sm'>Logout</span></a>
    </li></ul>
  );
const guestLinks=(
  <ul>
      <li><Link to="/Adminlogin"> Admin</Link></li>
      <li><Link to="/OwnerLanding">Parking Owners</Link></li>
      <li><Link to ="/Register">Register</Link></li>
      <li><Link to="/Login">SignIn</Link></li>
    </ul>

)
  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to ='/'>
       Parking Space 
      </Link>
    </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}
  </nav>
  )
}

Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps =state=>({
  auth:state.auth
})

export default connect(mapStateToProps,{logout}) (Navbar);