import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Link,withRouter } from 'react-router-dom';
import { logout, updateUser } from '../../redux/userReducer'
import './Nav.css'

class Nav extends Component {
    constructor() {
        super();
        this.state = {


        };

    }

    


    logoutButton =()=> {
        axios.get('/auth/logout')
            .then(() => {
                console.log('test')
                this.props.logout()
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.props)
        const { user_name, id } = this.props.userReducer.user
        return (
            <nav className='side-nav'>
                <h1>{user_name}</h1>
                <h3>id: {id}</h3>
                <button onClick={this.logoutButton}>Logout</button>

                <Link to='/AllUserTeams' className='all-teams-link'>
                    <h1>View all Team</h1>
                </Link>

                <Link to='/Chat' className='chat-link'>
                    <h1>Chatroom</h1>
                </Link>
            </nav>
        )

    }
}
function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, { logout, updateUser })(withRouter(Nav))