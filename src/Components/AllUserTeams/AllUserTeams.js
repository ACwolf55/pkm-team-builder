import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Link,withRouter } from 'react-router-dom';
import PokemonTeam from '../PokemonTeam/PokemonTeam'
import Nav from '../Nav/Nav'
import './AllUserTeams.css'
import SavedPokemon from '../SavedPokemon/SavedPokemon';



export default class AllUserTeams extends Component {
    constructor() {
        super();
        this.state = {

            teamNames:[]
        }
    }

    componentDidMount() {
        axios.get('/user/userTeamNames').then((res)=>{
            console.log(res.data)
            this.setState({
                teamNames: res.data
            })
   
        })

    }
    

    

    render() {
        
        // console.log(this.state)
        let mappedTeamNames = this.state.teamNames.map((el)=>(
            <Link to={`SavedPokemonTeam/${el.pokemon_team_id}`}>
            <li>{el.team_name}</li>
            </Link>
        ))

        

        return (
            <div className='all-pkm-teams'>
                <h1>ALL USER TEAMS</h1>
               
                <ul>{mappedTeamNames}</ul>
            </div>
        )
    }
}
