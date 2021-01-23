import './Header.css'
import { Link,withRouter } from 'react-router-dom';


	
function Header() {
	
  return(
    <Link to='/Home' className='home-link'>
     <header>
      Pokemon Team Builder
     </header>
    </Link>
    

  )
}

export default Header;
