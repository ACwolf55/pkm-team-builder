import './Header.css'
import { Link,withRouter } from 'react-router-dom';
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/userReducer'
import axios from 'axios'

	
function Header(props) {

	useEffect(()=> {
    axios.get('/auth/session').then((res)=>{
      if(res.data.id){
        props.updateUser(res.data)
      }
    })
  }, [])

  return(
    <Link to='/Home' className='home-link'>
     <header>
      Pokemon Team Builder
     </header>
    </Link>
    

  )
}

function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, {updateUser})(Header)
