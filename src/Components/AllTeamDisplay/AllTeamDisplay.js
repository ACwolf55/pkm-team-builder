import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PokemonTeam from '../PokemonTeam/PokemonTeam'
import Nav from '../Nav/Nav'
import './AllTeamDisplay.css'


export default class AllTeamDisplay extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='all-pkm-teams'>
                 <Nav />
                 <div className='team-display'>
                <PokemonTeam/>
                <PokemonTeam/>
                <PokemonTeam/>
                </div>


            </div>


        )

    }
}
