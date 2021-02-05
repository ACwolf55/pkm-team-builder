import React, { Component } from "react";
import axios from "axios";
import "./Pokemon.css";
import { connect } from "react-redux";
import { setPokemon } from "../../redux/pokemonReducer";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pkmName: "",
      pkmHp: null,
      pkmAtk: null,
      pkmDef: null,
      pkmSpecAtk: null,
      pkmSpecDef: null,
      pkmSpeed: null,
      pkmSprite: "",
      mountedName: "",
    };
  }

  getPokemon = (e) => {
    e.preventDefault();
     axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.pkmName}`)
      .then((res) => {
        const pkmObj = {
          pkmName: this.state.pkmName,
          pkmHp: res.data.stats[0].base_stat,
          pkmAtk: res.data.stats[1].base_stat,
          pkmDef: res.data.stats[2].base_stat,
          pkmSpecAtk: res.data.stats[3].base_stat,
          pkmSpecDef: res.data.stats[4].base_stat,
          pkmSpeed: res.data.stats[5].base_stat,
          pkmSprite: res.data.sprites.front_default,

          pokeSpot: this.props.pokeSpot,

          mountedName: this.state.pkmName,
        };
        this.setState({
            pkmSprite: res.data.sprites.front_default
        })
        this.props.setPokemon(pkmObj);
      });
  };

  pkmNameInput = (e) => {
    this.setState({
      pkmName: e.target.value,
    });
  };

  render() {
    const {
      pkmHp,
      pkmAtk,
      pkmDef,
      pkmSpecAtk,
      pkmSpecDef,
      pkmSpeed,
      mountedName,
      pkmSprite,
    } = this.props.pokemon;
    console.log(this.props)
    return (
      <div className="pkm-card">
        <div id="pkm-search-form">
          <form onSubmit={this.getPokemon}>
            <p>
              <input
                type="text"
                placeholder="pokemon name"
                name="pkmName"
                onChange={this.pkmNameInput}
              />
            </p>
            <p>
              <button type="submit">Find</button>
            </p>
          </form>
          <div className="pkm-name-sprite">
            <h2>
              <b>{mountedName}</b>
            </h2>
            <div className="pkm-sprite">
              {this.state.pkmSprite === '' ? null : <img src={pkmSprite} /> }
            </div>
          </div>
        </div>
        {this.state.pkmSprite === '' ? null:
        <div className="pkm-stats">
          <ul>
            <li>HP: {pkmHp}</li>
            <li>Attack: {pkmAtk}</li>
            <li>Defense: {pkmDef}</li>
            <li>Special Attack: {pkmSpecAtk}</li>
            <li>Special Defense: {pkmSpecDef}</li>
            <li>Speed: {pkmSpeed}</li>
          </ul>
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, { setPokemon })(Pokemon);
