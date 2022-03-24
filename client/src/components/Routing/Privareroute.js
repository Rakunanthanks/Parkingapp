import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  {Route,Navigate} from 'react-router-dom'
const Privareroute = ({component:Component,auth:{isAuthenticated,loading},...rest}) => 
   <Route {...rest} render ={props =>!isAuthenticated && !loading?
    (<Navigate to='/login' />):(<Component{...props}/>)}/>
   


Privareroute.propTypes = {
    auth:PropTypes.object.isRequired
}
const mapStateProps=state=>({
    auth: state.auth

})
export default connect(mapStateProps)(Privareroute)