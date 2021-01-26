import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PokemonTeam from '../PokemonTeam/PokemonTeam'
import Nav from '../Nav/Nav'
import './AllUserTeams.css'


export default class AllTeamDisplay extends Component {
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
            mountedName: '',

            userTeams: null

            // ex. userTeams: 

            // [
            //     {
            //      "pokemon_1": "arcanine",
            //      "pokemon_2": "cinccino",
            //      "pokemon_3": "golem",
            //      "pokemon_4": "venusaur",
            //      "pokemon_5": "kabutops",
            //      "pokemon_6": "furret",
            //      "pokemon_team_id": 1
            //     },
            //     {
            //      "pokemon_1": "feraligatr",
            //      "pokemon_2": "nidoking",
            //      "pokemon_3": "lilligant",
            //      "pokemon_4": "lycanroc-midday",
            //      "pokemon_5": "raichu-alola",
            //      "pokemon_6": "pidgeot-mega",
            //      "pokemon_team_id": 2
            //     }
            //    ]
            // --- NEED TO PARSE JSON?

        }
    }

//     componentDidMount() {
//         axios.get('/user/allUserTeams')
//             .then(res => {
//                 this.setState({
//                     userTeam: res.data

//                 })
//             })

//         this.mapUserTeams()
//     }

//     mapUserTeams = () => {


//     }



//     getAllTeamPokemon = (e) => {
//         const { userTeam } = this.state.userTeams
//         e.preventDefault()
//         for (i = 0; i < userTeam.length; i++) {

//             axios.get(`https://pokeapi.co/api/v2/pokemon/${userTeams[i].pokemon_1}`).then((res) => {
//                 const pkmObj = {
//                     pkmName: this.state.pkmName,
//                     pkmHp: res.data.stats[0].base_stat,
//                     pkmAtk: res.data.stats[1].base_stat,
//                     pkmDef: res.data.stats[2].base_stat,
//                     pkmSpecAtk: res.data.stats[3].base_stat,
//                     pkmSpecDef: res.data.stats[4].base_stat,
//                     pkmSpeed: res.data.stats[5].base_stat,

//                     pokeSpot: this.props.pokeSpot,

//                     mountedName: this.state.pkmName
//                 }
//             })
//         }
//     }

//     pkmNameInput = (e) => {
//         this.setState({
//             pkmName: e.target.value
//         })

//     }

    render() {
        // const {mountedName, pkmHp, pkmAtk, pkmDef, pkmSpecAtk, pkmSpecDef, pkmSpeed } = this.props.pokemon
        console.log(this.props.pokemon)
        return (
            <div className='all-pkm-teams'>
                <h1>ALL USER TEAMS</h1>
            </div>
        )
    }
}
