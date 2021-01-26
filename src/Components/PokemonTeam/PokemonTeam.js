import React, { Component } from 'react';
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'
import {connect} from 'react-redux'
import './PokemonTeam.css'

class PokemonTeam extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

render(){
    const {pokemon} = this.props.pokemonReducer
    console.log(pokemon)
    const emptyPkm = {
        pkmName: '',
        pkmHp: null,
        pkmAtk: null,
        pkmDef: null,
        pkmSpecAtk: null,
        pkmSpecDef: null,
        pkmSpeed: null,
        mountedName:''
    };
    return(
    <div className='pokemon-team-box'>
        <div className='pokemon-team'>
            <Pokemon pokemon={pokemon[0] || emptyPkm}/>
            <Pokemon pokemon={pokemon[1] || emptyPkm}/>
            <Pokemon pokemon={pokemon[2] || emptyPkm}/>
            <Pokemon pokemon={pokemon[3] || emptyPkm}/>
            <Pokemon pokemon={pokemon[4] || emptyPkm}/>
            <Pokemon pokemon={pokemon[5] || emptyPkm}/>
        </div>

        <div className='save-team-box'>
            <input type='text' placeholder='ex.team #1' name='teamName'/>
            <button type='submit'>Save Team</button>
        </div>

    </div>
    )

}
}
function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, { })(PokemonTeam)
