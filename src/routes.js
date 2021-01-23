import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import Chat from './Components/Chat/Chat'
import AllTeamDisplay from './Components/AllTeamDisplay/AllTeamDisplay'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={Home} />
        <Route path='/Chat' component={Chat} />
        <Route path='/AllTeamDisplay' component={AllTeamDisplay} />
    </Switch>

)
