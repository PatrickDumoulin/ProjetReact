import React, { Component } from 'react';
import { lever, coucher, dureeJour, conversionDecJourHeure } from '../Modules/mecaniqueCeleste';

class Resultats extends Component {
    genererTableau() {
        const { ville, mois, annee } = this.props;
        
        if (!ville || !mois || mois.Nom === "Choix") {
            return null;
          }
        
        const jours = [];
    
        for (let jour = 1; jour <= mois.NombreJours; jour++) {
            const heureLever = lever(ville.Latitude, ville.Longitude, ville.DecalageHoraire, jour, mois.Id, annee);
            const heureCoucher = coucher(ville.Latitude, ville.Longitude, ville.DecalageHoraire, jour, mois.Id, annee);
            const duree = dureeJour(ville.Latitude, ville.Longitude, ville.DecalageHoraire, jour, mois.Id, annee);
    
            jours.push({
                jour: jour,
                lever: conversionDecJourHeure(heureLever),
                coucher: conversionDecJourHeure(heureCoucher),
                duree: duree
            });
        }
    
        return jours;
    }
    

    render() {
        const tableau = this.genererTableau();

        if (tableau === null) {
            return <div className="resultats">Aucun résultat à afficher</div>;
        }

        return (
            <div className="resultats">
                
                <table>
                    <thead>
                        <tr>
                            <th>Jour</th>
                            <th>Lever</th>
                            <th>Coucher</th>
                            <th>Durée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableau.map((jourInfo, index) => (
                            <tr key={index}>
                                <td>{jourInfo.jour}</td>
                                <td>{jourInfo.lever}</td>
                                <td>{jourInfo.coucher}</td>
                                <td>{jourInfo.duree}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Resultats;
