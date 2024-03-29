import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import Chat from './Components/Chat/Chat'
import AllUserTeams from './Components/AllUserTeams/AllUserTeams'
import SavedPokemonTeam from './Components/SavedPokemonTeam/SavedPokemonTeam'
import Loggedin from './Components/Loggedin/Loggedin'
import axios from 'axios'

export default (
    
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Loggedin' component={Loggedin} />
        <Route path='/Chat' component={Chat} />
        <Route path='/AllUserTeams' component={AllUserTeams} />
        <Route path='/SavedPokemonTeam/:teamid' component={SavedPokemonTeam}/>
    </Switch>

)



