import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Auth from '../Auth/Auth'
import TeamSummary from '../TeamSummary/TeamSummary'
import PokemonTeam from '../PokemonTeam/PokemonTeam'
import './Home.css'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='home'>
                <Auth />
                <div>
                    {/* <TeamSummary /> */}
                    <PokemonTeam />
                </div>
            </div>
        )
    }
}

