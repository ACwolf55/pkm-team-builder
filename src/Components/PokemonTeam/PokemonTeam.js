import React, { Component } from 'react';
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'
import { connect } from 'react-redux'
import './PokemonTeam.css'

class PokemonTeam extends Component {
    constructor() {
        super();
        this.state = {
            teamName:''
        }
    }

    saveTeam = () => {
            console.log(this.props.pokemon[0])
    //     const {pokemon[0].pkmName,
    //          pokemon[1].pkmName, pokemon[2].pkmName,
    //           pokemon[3].pkmName, pokemon[4].pkmName,
    //            pokemon[5].pkmName} = this.props.pokemon

    //     axios.post('/user/team/', {
    //         this.state.teamName, pokemon[0].pkmName, pokemon[1].pkmName, pokemon[2].pkmName, pokemon[3].pkmName, pokemon[4].pkmName, pokemon[5].pkmName}
    //         .then(res=> {
    //         this.setState({
    //             teamName:''
    //         })
    //         .catch(err => {alert(err.response.request.response)})
    //     })
    // }
    }

    handleTeamName = (value) => {
        this.setState({
            teamName: value
        })

    }

    render() {
        const { pokemon } = this.props.pokemonReducer
        console.log(pokemon)
        const emptyPkm = {
            pkmName: '',
            pkmHp: null,
            pkmAtk: null,
            pkmDef: null,
            pkmSpecAtk: null,
            pkmSpecDef: null,
            pkmSpeed: null,
            mountedName: ''
        };
        return (
            <div className='pokemon-team-box'>
                <div className='pokemon-team'>
                    <Pokemon pokemon={pokemon.pokemon_1 || emptyPkm} pokeSpot={'1'}/>
                    <Pokemon pokemon={pokemon.pokemon_2 || emptyPkm} 
                    pokeSpot={'2'}/>
                    <Pokemon pokemon={pokemon.pokemon_3 || emptyPkm}
                    pokeSpot={'3'}/>
                    <Pokemon pokemon={pokemon.pokemon_4 || emptyPkm}
                    pokeSpot={'4'} />
                    <Pokemon pokemon={pokemon.pokemon_5 || emptyPkm} 
                    pokeSpot={'5'}/>
                    <Pokemon pokemon={pokemon.pokemon_6 || emptyPkm} 
                    pokeSpot={'6'}/>
                </div>

                <div className='save-team-box'>
                    <input type='text' placeholder='ex.team #1' name='teamName'
                        onChange={e => this.handleTeamName(e.target.value)} />
                    <button onClick={this.saveTeam}>Save Team</button>
                </div>

            </div>
        )

    }
}
function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, {})(PokemonTeam)
