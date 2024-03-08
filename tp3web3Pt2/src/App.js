import React, { Component } from 'react';
import OutilsDeSelection from './Composants/OutilsDeSelection';
import Resultats from './Composants/Resultats';
import './App.css';


class App extends Component {
  state = {
    titre: <p>Éphémérides</p>,
    date: {jour: 22, mois: 1, annee: 2023},

    villeSelectionnee: null,
    cartes: [],

    villes: [
      {Nom: "Berlin", Latitude: 52, Longitude: 13, DecalageHoraire: 1},
      {Nom: "Séoul", Latitude: 37, Longitude: 127, DecalageHoraire: 9},
      {Nom: "Montréal", Latitude: 46, Longitude: -71, DecalageHoraire: -4},
      {Nom: "Paris", Latitude: 48, Longitude: 2, DecalageHoraire: 2},
      {Nom: "Tokyo", Latitude: 35, Longitude: 139, DecalageHoraire: 9},
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
    
  };

  
  handleVilleChange = (event) => {
    const villeNom = event.target.value;
    const ville = this.state.villes.find((v) => v.Nom === villeNom);
    this.setState({
      villeSelectionnee: ville,
    });
  };

  ajouterCarte = () => {
    const { villeSelectionnee, cartes } = this.state;
    if (villeSelectionnee && !cartes.includes(villeSelectionnee)) {
        this.setState(prevState => ({
            cartes: [...prevState.cartes, villeSelectionnee]
        }));
    }
};

  supprimerCarte = (index) => {
    const { cartes } = this.state;
    this.setState({
        cartes: cartes.filter((_, i) => i !== index),
    });
  };



  

  render() {
    const mois = this.state.mois.find(m => m.Id === this.state.date.mois);
    return (
      <div>
        
        <h1 className = "titre">{this.state.titre}</h1>
        <h4 className = "soustitre">{this.state.date.jour} {mois.Nom} {this.state.date.annee}</h4>
        <OutilsDeSelection className = "OutilsSelection"
          villes={this.state.villes} 
          ajouterCarte={this.ajouterCarte}
          
          villeSelectionnee={this.state.villeSelectionnee}
          
          handleVilleChange={this.handleVilleChange}
          handleMoisChange={this.handleMoisChange}
        />
        <div className='cartes-container'>
        {this.state.cartes.map((carte, index) => (
        <Resultats
            key={index}
            date={this.state.date}
            index={index} 
            ville={carte}
            supprimerCarte={this.supprimerCarte} 
            mois={this.state.date.mois}
            annee={this.state.date.annee}
        />
       
    ))}
    </div>

        
      </div>
    );
  }
}

export default App;
