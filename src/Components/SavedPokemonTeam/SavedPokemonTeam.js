import React, { Component } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import { connect } from "react-redux";
import "./SavedPokemonTeam.css";
import SavedPokemon from "../SavedPokemon/SavedPokemon";

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
    } = this.state;
    return (
      <div className="saved-pkm-team-box">

          <h1>{this.state.teamName}</h1>
        <div className="saved-pkm-pokemon-team">
          <SavedPokemon pokemon={pokemon_1} />
          <SavedPokemon pokemon={pokemon_2} />
          <SavedPokemon pokemon={pokemon_3} />
          <SavedPokemon pokemon={pokemon_4} />
          <SavedPokemon pokemon={pokemon_5} />
          <SavedPokemon pokemon={pokemon_6} />
        </div>
      </div>
    );
  }
}

export default SavedPokemonTeam;
