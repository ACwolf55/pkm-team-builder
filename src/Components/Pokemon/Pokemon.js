import React, { Component } from 'react';
import axios from 'axios'
import './Pokemon.css'
import { connect } from 'react-redux'
import { setPokemon } from '../../redux/pokemonReducer'


class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pkmName: ''
            // pkmHp: null,
            // pkmAtk: null,
            // pkmDef: null,
            // pkmSpecAtk: null,
            // pkmSpecDef: null,
            // pkmSpeed: null,
            // mountedName:''
        };
    }

    getPokemon=(e)=> {
        e.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pkmName}`).then((res) => {
            const pkmObj ={
                pkmName: this.state.pkmName,
                pkmHp: res.data.stats[0].base_stat,
                pkmAtk: res.data.stats[1].base_stat,
                pkmDef: res.data.stats[2].base_stat,
                pkmSpecAtk: res.data.stats[3].base_stat,
                pkmSpecDef: res.data.stats[4].base_stat,
                pkmSpeed: res.data.stats[5].base_stat,

                mountedName: this.state.pkmName

            }

            this.props.setPokemon(pkmObj)
        })

    }

    // pkmNameMount = (e) => {
    //     e.preventDefault()

    //     this.setState({
    //         pkmName: e.target.value
    //     })

    //     this.getPokemonStats()
    // }


      pkmNameInput=(e)=>{
        this.setState({
            pkmName: e.target.value
        })

      }

    render() {
        // const {mountedName, pkmHp, pkmAtk, pkmDef, pkmSpecAtk, pkmSpecDef, pkmSpeed } = this.props.pokemon

        return (
            <div className='pokemon-card'>
                <div id='pkm-search-form'>
                    <form onSubmit={this.getPokemon}>
                        <p><input type='text' placeholder='pokemon name' name='pkmName' onChange={this.pkmNameInput}/></p>
                        <p><button type='submit'>Find</button></p>
                    </form>

                    <h3>{this.props.pokemon.mountedName || null }</h3>

                </div>


                    <div className='pkm-stats'>
                        <ul>
                            <li>HP: {this.props.pokemon.pkmHp || null}</li>
                            <li>Attack: {this.props.pokemon.pkmAtk || null}</li>
                            <li>Defense: {this.props.pokemon.pkmDef || null}</li>
                            <li>Special Attack: {this.props.pokemon.pkmSpecAtk || null}</li>
                            <li>Special Defense: {this.props.pokemon.pkmSpecDef || null}</li>
                            <li>Speed: {this.props.pokemon.pkmSpeed || null}</li>
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