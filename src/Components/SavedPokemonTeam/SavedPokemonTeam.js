import React, { Component } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import { connect } from "react-redux";
import "./SavedPokemonTeam.css";
import SavedPokemon from "../SavedPokemon/SavedPokemon";
import TeamSummary from "../TeamSummary/TeamSummary";

class SavedPokemonTeam extends Component {
  constructor() {
    super();
    this.state = {
      pokemon_1: "",
      pokemon_2: "",
      pokemon_3: "",
      pokemon_4: "",
      pokemon_5: "",
      pokemon_6: "",

      teamName: "",

      pkmTeam: [],
    };

    //     res.data =
    //     [
    //         {
    //             "pokemon_team_id": 20,
    //             "pokemon_1": "gyarados",
    //             "pokemon_2": "emboar",
    //             "pokemon_3": "samurott",
    //             "pokemon_4": "lilligant",
    //             "pokemon_5": "toucannon",
    //             "pokemon_6": "pinsir"
    //         }
    //     ]
    //
  }

  objectStats = (pkmObj) => {
    const { pkmTeam } = this.state;
    // pkmTeam.push(pkmObj);
    this.setState({
      pkmTeam: [...pkmTeam, pkmObj],
    });
  };

  componentDidMount() {
    axios
      .get(`/user/team/SavedTeam/${this.props.match.params.teamid}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          pokemon_1: res.data[0].pokemon_1,
          pokemon_2: res.data[0].pokemon_2,
          pokemon_3: res.data[0].pokemon_3,
          pokemon_4: res.data[0].pokemon_4,
          pokemon_5: res.data[0].pokemon_5,
          pokemon_6: res.data[0].pokemon_6,
        });
        // axios
        //   .get(`user/team/TeamName/${this.props.match.params.teamid}`)
        //   .then((res) => {
        //     this.setState({
        //       teamName: res.data,
        //     });
        //   });
      });
  }

  render() {
    
    const {
      pokemon_1,
      pokemon_2,
      pokemon_3,
      pokemon_4,
      pokemon_5,
      pokemon_6,
      pkmTeam,
    } = this.state;

    
   
    let filterHp = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmHp - pkmA.pkmHp)[0]
    let filterAtk = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmAtk - pkmA.pkmAtk)[0]
    let filterDef = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmDef - pkmA.pkmDef)[0]
    let filterSpecAtk = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmSpecAtk - pkmA.pkmSpecAtk)[0]
    let filterSpecDef = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmSpecDef - pkmA.pkmSpecdef)[0]
    let filterSpd = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmSpeed - pkmA.pkmSpeed)[0]
    
    console.log(pkmTeam[0])
    let pkm1 = pkmTeam[0]
    console.log(pkm1)
    // console.log(pkm1.pkmAtk)

    // if(pkmTeam.length>5){
    // for(let i=0;i<6;i++){
    //    let pkm[i]_Total = Math.sum(pkmTeam[i].pkmHp,pkmTeam[i].pkmAtk,pkmTeam[i].pkmDef,pkmTeam[i].pkmSpecAtk,pkmTeam[i].pkmSpecDef[i],pkmTeam[i].pkmSpeed)


    //   }
    //   let highestTotal = Math.max(pkm1_Total,pkm2_Total,pkm3_Total,pkm4_Total,pkm5_Total,pkm6_Total)
    // }
    
    // let pkm1_Total = Math.sum(pkmTeam[0].pkmHp,pkmTeam[0].pkmAtk,pkmTeam[0].pkmDef,pkmTeam[0].pkmSpecAtk,pkmTeam[0].pkmSpecDef[0],pkmTeam[0].pkmSpeed)
    // let pkm2_Total = Math.sum(pkmTeam[1].pkmHp,pkmTeam[1].pkmAtk,pkmTeam[1].pkmDef,pkmTeam[1].pkmSpecAtk,pkmTeam[1].pkmSpecDef[1],pkmTeam[1].pkmSpeed)
    // let pkm3_Total = Math.sum(pkmTeam[2].pkmHp,pkmTeam[2].pkmAtk,pkmTeam[2].pkmDef,pkmTeam[2].pkmSpecAtk,pkmTeam[2].pkmSpecDef[2],pkmTeam[2].pkmSpeed)
    // let pkm4_Total = Math.sum(pkmTeam[3].pkmHp,pkmTeam[3].pkmAtk,pkmTeam[3].pkmDef,pkmTeam[3].pkmSpecAtk,pkmTeam[3].pkmSpecDef[3],pkmTeam[3].pkmSpeed)
    // let pkm5_Total = Math.sum(pkmTeam[4].pkmHp,pkmTeam[4].pkmAtk,pkmTeam[4].pkmDef,pkmTeam[4].pkmSpecAtk,pkmTeam[4].pkmSpecDef[4],pkmTeam[4].pkmSpeed)
    // let pkm6_Total = Math.sum(pkmTeam[5].pkmHp,pkmTeam[5].pkmAtk,pkmTeam[5].pkmDef,pkmTeam[5].pkmSpecAtk,pkmTeam[5].pkmSpecDef[5],pkmTeam[5].pkmSpeed)

    // let highestTotal = Math.max(pkm1_Total,pkm2_Total,pkm3_Total,pkm4_Total,pkm5_Total,pkm6_Total)





   
   

    console.log(filterAtk)
    console.log(filterSpd);

    const mappedTeams = pkmTeam.map((el, index) => {
      return (
        <SavedPokemon pokemon={el} objectStats={this.objectStats} key={index} />
      );
    });
    console.log(mappedTeams);
    return (
      <section>

       { filterSpd ? <TeamSummary pkmTeam={pkmTeam} pkmHighAtk={filterAtk} pkmHighSpd={filterSpd} pkmHighDef={filterDef} pkmHighSpecDef={filterSpecDef} pkmHighSpecAtk={filterSpecAtk} pkmHighHp={filterHp}/> : 'Loading'} 

        <div className="saved-pkm-team-box">
          <h1>{this.state.teamName}</h1>
          <div className="saved-pkm-team">
            <SavedPokemon pokemon={pokemon_1} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_2} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_3} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_4} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_5} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_6} objectStats={this.objectStats} />
          </div>
        </div>
      </section>
    );
  }
}

export default SavedPokemonTeam;
