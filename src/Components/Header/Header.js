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
      <h1>Pokemon Team Builder <img src="https://www.pikpng.com/pngl/m/59-590145_pokeball-8-bit-pixel-art-pokemon-clipart.png" alt="Pokeball - 8 Bit Pixel Art Pokemon Clipart@pikpng.com"></img></h1>  
     </header>
     
    </Link>
    

  )
}

function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, {updateUser})(Header)
