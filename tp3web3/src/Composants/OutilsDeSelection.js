import React, { Component } from 'react';

export class OutilsDeSelection extends Component {
    render() {
        const { villes, mois, moisSelectionne, villeSelectionnee, handleVilleChange, handleMoisChange } = this.props;

        return (
            <div className='OutilsSelection'>
                
                <div className='villes'>
                    <select className= "selecteurVille" value={villeSelectionnee.Nom} onChange={handleVilleChange}>
                        {villes.map((ville, index) => (
                            <option key={index} value={ville.Nom}>{ville.Nom}</option>
                        ))}
                    </select>
                </div>

                <div className='mois'>
                    <select className='selecteurMois' value={moisSelectionne} onChange={handleMoisChange}>
                        <option value="Choix">Choix</option>
                            {mois.map((m, index) => (
                                <option key={index} value={m.Nom}>{m.Nom}</option>
             ))}
                </select>
            </div>


            </div>
        );
    }
}

export default OutilsDeSelection;
