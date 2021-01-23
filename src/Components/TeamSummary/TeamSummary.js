import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import './TeamSummary.css'


export default class TeamSummary extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

render(){
    return(
        <div className='team-summary'>
            <h3>Highest stat total pkm: </h3>
            <h3>Fastest pkm: </h3>


        </div>
    )

}
}