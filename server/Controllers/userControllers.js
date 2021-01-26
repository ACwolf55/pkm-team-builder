module.exports = {

    saveTeam: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.session.user)
        console.log(req.body)
        const { pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6, team_name } = req.body

        const pkmMembersTable = await db.save_team1([pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6])
        const pkm = await db.save_team2([pkmMembersTable.pokemon_team_id, req.session.user.id, team_name])

        // const result = await db.getTeam([team_name])
        // const existingTeam = result[0]

        // if (existingTeam) {
        //   return res.status(409).send('Team name already in use')
        // }

        // const newTeam = await db.save_team([team_name, pkm1,pkm2,pkm3,pkm4,pkm5,pkm6])
        // console.log(newTeam)

        // const team = newTeam[0]

        // req.session.user = { user_name: user.user_name, id: user.pkm_user_id }
        // return res.status(201).send(req.session.user)
    },

    getAllUserTeams: (req, res) => {
        const db = req.app.get('db')

        const allUserTeams = db.all_user_teams([req.session.user.id])

        return res.status(201).send(allUserTeams)

    },

    allTeams: (req, res) => {
        const db = req.app.get('db')
    },

    getTeam: (req, res) => {
        const db = req.app.get('db')

    },

    editTeam: (req, res) => {
        const db = req.app.get('db')

    },

    deleteTeam: (req, res) => {
        const db = req.app.get('db')

    }

}