import React, { Component } from 'react';
import axios from 'axios'
import { render } from '@testing-library/react';
import Pokemon from '../Pokemon/Pokemon'
import './PokemonTeam.css'

export default class PokemonTeam extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

render(){
    return(
    <div className='pokemon-team-box'>
        <div className='pokemon-team'>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
        </div>

        <div className='save-team-box'>
            <input type='text' placeholder='ex.team #1' name='teamName'/>
            <button type='submit'>Save Team</button>
        </div>

    </div>
    )

}
}

