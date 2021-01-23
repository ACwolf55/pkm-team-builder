import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav'
import './Chat.css'


export default class Chat extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

render(){
    return(
        <div className='chat'>
        <Nav/>
        <h1> CHATROOM</h1>
        </div>
    )

}
}
