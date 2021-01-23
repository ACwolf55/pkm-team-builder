import React, { Component } from 'react';
import axios from 'axios'

export default class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pkmName: '',
            pkmDisplay: {},
            pkmHp: null,
            pkmAtk: null,
            pkmDef: null,
            pkmSpecAtk: null,
            pkmSpecDef: null,
            pkmSpeed: null,

            mountedName:''

        };

    }





    getPokemon=(e)=> {
        e.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pkmName}`).then((res) => {
            this.setState({

                pkmHp: res.data.stats[0].base_stat,
                pkmAtk: res.data.stats[1].base_stat,
                pkmDef: res.data.stats[2].base_stat,
                pkmSpecAtk: res.data.stats[3].base_stat,
                pkmSpecDef: res.data.stats[4].base_stat,
                pkmSpeed: res.data.stats[5].base_stat,

                mountedName: this.state.pkmName
            })
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
        const {mountedName, pkmHp, pkmAtk, pkmDef, pkmSpecAtk, pkmSpecDef, pkmSpeed } = this.state

        return (
            <div className='pokemon-card'>
                <div id='pkm-search-form'>
                    <form onSubmit={this.getPokemon}>
                        <p><input type='text' placeholder='pokemon name' name='pkmName' onChange={this.pkmNameInput}/></p>
                        <p><button type='submit'>Find</button></p>
                    </form>

                    <h3>{mountedName}</h3>
                    <ul>
                        <li>HP: {pkmHp}</li>
                        <li>Attack: {pkmAtk}</li>
                        <li>Defense: {pkmDef}</li>
                        <li>Special Attack: {pkmSpecAtk}</li>
                        <li>Special Defense: {pkmSpecDef}</li>
                        <li>Speed: {pkmSpeed}</li>
                    </ul>


                </div>





            </div>

        )

    }
}