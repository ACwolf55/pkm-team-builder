import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import Chat from './Components/Chat/Chat'
import AllUserTeams from './Components/AllUserTeams/AllUserTeams'
import SavedPokemonTeam from './Components/SavedPokemonTeam/SavedPokemonTeam'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={Home} />
        <Route path='/Chat' component={Chat} />
        <Route path='/AllUserTeams' component={AllUserTeams} />
        <Route path='/SavedPokemonTeam/:teamid' component={SavedPokemonTeam}/>
    </Switch>

)
