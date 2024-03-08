import React, { Component } from 'react';

export class OutilsDeSelection extends Component {
    
    

    render() {
        const { villes, villeSelectionnee, handleVilleChange } = this.props;

        return (
            <div className='OutilsSelection'>
                
                <div className='villes'>
                    <select className= "selecteurVille" value={villeSelectionnee.Nom} onChange={handleVilleChange}>
                        {villes.map((ville, index) => (
                            <option key={index} value={ville.Nom}>{ville.Nom}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className="bouttonAjouter" onClick={this.props.ajouterCarte}>Ajouter</button>

                </div>

                


            </div>
        );
    }
}

export default OutilsDeSelection;
