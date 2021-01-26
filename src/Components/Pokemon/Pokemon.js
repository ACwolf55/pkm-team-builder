import React, { Component } from 'react';
import axios from 'axios'
import './Pokemon.css'
import { connect } from 'react-redux'
import { setPokemon } from '../../redux/pokemonReducer'


class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pkmName: '',
            pkmHp: null,
            pkmAtk: null,
            pkmDef: null,
            pkmSpecAtk: null,
            pkmSpecDef: null,
            pkmSpeed: null,
            mountedName: ''
        };
    }

    getPokemon = (e) => {
        e.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pkmName}`).then((res) => {
            const pkmObj = {
                pkmName: this.state.pkmName,
                pkmHp: res.data.stats[0].base_stat,
                pkmAtk: res.data.stats[1].base_stat,
                pkmDef: res.data.stats[2].base_stat,
                pkmSpecAtk: res.data.stats[3].base_stat,
                pkmSpecDef: res.data.stats[4].base_stat,
                pkmSpeed: res.data.stats[5].base_stat,

                pokeSpot: this.props.pokeSpot,

                mountedName: this.state.pkmName
            }
            this.props.setPokemon(pkmObj)
        })
    }

    pkmNameInput = (e) => {
        this.setState({
            pkmName: e.target.value
        })

    }

    render() {
        // const {mountedName, pkmHp, pkmAtk, pkmDef, pkmSpecAtk, pkmSpecDef, pkmSpeed } = this.props.pokemon
        console.log(this.props.pokemon)
        return (
            <div className='pokemon-card'>
                <div id='pkm-search-form'>
                    <form onSubmit={this.getPokemon}>
                        <p><input type='text' placeholder='pokemon name' name='pkmName' onChange={this.pkmNameInput} /></p>
                        <p><button type='submit'>Find</button></p>
                    </form>

                    <h3>{this.props.pokemon.mountedName}</h3>

                </div>


                <div className='pkm-stats'>
                    <ul>
                        <li>HP: {this.props.pokemon.pkmHp}</li>
                        <li>Attack: {this.props.pokemon.pkmAtk}</li>
                        <li>Defense: {this.props.pokemon.pkmDef}</li>
                        <li>Special Attack: {this.props.pokemon.pkmSpecAtk}</li>
                        <li>Special Defense: {this.props.pokemon.pkmSpecDef}</li>
                        <li>Speed: {this.props.pokemon.pkmSpeed}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState

}

export default connect(mapStateToProps, { setPokemon })(Pokemon)