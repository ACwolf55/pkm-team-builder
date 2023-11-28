import React, { Component } from 'react';
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'
import { connect } from 'react-redux'
import './PokemonTeam.css'

class PokemonTeam extends Component {
    constructor() {
        super();
        this.state = {
            teamName: '',
            savedTeam: ''
        }
    }

    saveTeam = () => {
        const { pokemon } = this.props.pokemonReducer
        console.log(pokemon.pokemon_1.pkmName)
        const { user_name, id } = this.props.userReducer.user
        if(!user_name){
            alert('login to save team')
        }else if(this.state.teamName==''){
            alert('enter team name')
        }else{
            console.log(this.state.teamName)
        axios.post('/user/team/', {
            pokemon_1: pokemon.pokemon_1.pkmName, pokemon_2: pokemon.pokemon_2.pkmName, pokemon_3: pokemon.pokemon_3.pkmName, pokemon_4: pokemon.pokemon_4.pkmName, pokemon_5: pokemon.pokemon_5.pkmName, pokemon_6: pokemon.pokemon_6.pkmName, team_name: this.state.teamName
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    savedTeam: res.data.team_name,
                    teamName: ''
                })
            })
            .catch(err => { alert(err.response.request.response) })

        }
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
                <Pokemon pokemon={pokemon.pokemon_1 || emptyPkm} pokeSpot={'1'} />
                <Pokemon pokemon={pokemon.pokemon_2 || emptyPkm}
                    pokeSpot={'2'} />
                <Pokemon pokemon={pokemon.pokemon_3 || emptyPkm}
                    pokeSpot={'3'} />
                <Pokemon pokemon={pokemon.pokemon_4 || emptyPkm}
                    pokeSpot={'4'} />
                <Pokemon pokemon={pokemon.pokemon_5 || emptyPkm}
                    pokeSpot={'5'} />
                <Pokemon pokemon={pokemon.pokemon_6 || emptyPkm}
                    pokeSpot={'6'} />
            </div>

            <div className='save-team-box'>
                <input type='text' placeholder='ex.team #1' name='teamName'
                    onChange={e => this.handleTeamName(e.target.value)} />
                <button onClick={this.saveTeam}>Save Team</button>
                <h3>{this.state.savedTeam}</h3>
            </div>

        </div>
    )

}
}
function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, {})(PokemonTeam)
