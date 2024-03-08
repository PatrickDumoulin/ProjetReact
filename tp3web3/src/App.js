import React, { Component } from 'react';
import OutilsDeSelection from './Composants/OutilsDeSelection';
import Resultats from './Composants/Resultats';
import './App.css';

class App extends Component {
  state = {
    titre: "Lever et coucher du soleil",

    villeSelectionnee: null,
    moisSelectionne: "Choix", 

    villes: [
      {Nom: "Berlin", Latitude: 52, Longitude: 13, DecalageHoraire: 1},
      {Nom: "Séoul", Latitude: 37, Longitude: 127, DecalageHoraire: 9},
      {Nom: "Montréal", Latitude: 46, Longitude: -71, DecalageHoraire: -4},
    ],
    mois: [
      {Id: 1, Nom: "Janvier", NombreJours: 31},
      {Id: 2, Nom: "Février", NombreJours: 28},
      {Id: 3, Nom: "Mars", NombreJours: 31},
      {Id: 4, Nom: "Avril", NombreJours: 30},
      {Id: 5, Nom: "Mai", NombreJours: 31},
      {Id: 6, Nom: "Juin", NombreJours: 30},
      {Id: 7, Nom: "Juillet", NombreJours: 31},
      {Id: 8, Nom: "Août", NombreJours: 31},
      {Id: 9, Nom: "Septembre", NombreJours: 30},
      {Id: 10, Nom: "Octobre", NombreJours: 31},
      {Id: 11, Nom: "Novembre", NombreJours: 30},
      {Id: 12, Nom: "Décembre", NombreJours: 31},

    ],
    villeSelectionnee: {Nom: "Berlin", Latitude: 52, Longitude: 13, DecalageHoraire: 1},
    moisSelectionne: "Choix" 
  };


  handleMoisChange = (event) => {
    this.setState({
      moisSelectionne: event.target.value,
    });
  };
  
  handleVilleChange = (event) => {
    const villeNom = event.target.value;
    const ville = this.state.villes.find((v) => v.Nom === villeNom);
    this.setState({
      villeSelectionnee: ville,
      moisSelectionne: "Choix" 
    });
  };
  

  render() {
    return (
      <div>
        <h1 className = "titre">{this.state.titre}</h1>
        <OutilsDeSelection className = "OutilsSelection"
          villes={this.state.villes} 
          mois={this.state.mois}
          villeSelectionnee={this.state.villeSelectionnee}
          moisSelectionne={this.state.moisSelectionne}
          handleVilleChange={this.handleVilleChange}
          handleMoisChange={this.handleMoisChange}
        />
        <Resultats
          
          ville={this.state.villeSelectionnee}
          mois={this.state.mois.find(m => m.Nom === this.state.moisSelectionne)}
          annee={2023} 
        />
        
      </div>
    );
  }
}

export default App;
