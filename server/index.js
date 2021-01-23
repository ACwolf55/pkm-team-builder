require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bcrypt = require('bcryptjs')

const authCtrl = require('./Controllers/authControllers')
const userCtrl = require('./Controllers/userControllers')
const pkmCtrl = require('./Controllers/pkmControllers')

const {SERVER_PORT, CONNECTION_STRING,SESSION_SECRET} = process.env

const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl:{ rejectUnauthorized:false}
}).then(db => {
    app.set('db', db)
    console.log('db ready!')
    
    app.listen(SERVER_PORT, console.log(`RUNNING @ PORT ${SERVER_PORT}`))
})

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

// Endpoints -

// Auth
app.post('/auth/register',authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

// User Teams Endpoints:
// app.get('/user/user_teams',userCtrl.allTeams)
// app.get('/url/user/team/:id',userCtrl.getTeam)
// app.post('url/user/:id/team/',userCtrl.newTeam)
// app.put('/url/user/:id/team/:id',userCtrl.editTeam)
// app.delete('/url/user/:id/team/:id',userCtrl.deleteTeam)

// Pokemon component end points:
// app.get('/url/user/user_team/pokemon/:id',pkmCtrl.getPkm)
// app.delete('/url/user/user_team/pokemon/:id',pkmCtrl.deletePkm)
