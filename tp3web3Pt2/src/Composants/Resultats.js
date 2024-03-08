import React, { Component } from 'react';
import { lever, coucher, dureeJour, conversionDecJourHeure } from '../Modules/mecaniqueCeleste';
import leverImage from '../Images/Levant.jpg';
import coucherImage from '../Images/images.jfif';

class Resultats extends Component {
    genererCarte() {
        const { ville, date } = this.props;
        
        
        
        
        const heureLever = lever(ville.Latitude, ville.Longitude, ville.DecalageHoraire, date.jour, date.mois, date.annee); 
        const heureCoucher = coucher(ville.Latitude, ville.Longitude, ville.DecalageHoraire, date.jour, date.mois, date.annee);
        const duree = dureeJour(ville.Latitude, ville.Longitude, ville.DecalageHoraire, date.jour, date.mois, date.annee);
    
        const jourInfo = {
            jour: date.jour,
            lever: conversionDecJourHeure(heureLever),
            coucher: conversionDecJourHeure(heureCoucher),
            duree: duree
        };
        
        return jourInfo;
    }
    
    

    render() {
        const carte = this.genererCarte();
    
        return (
            <div className="resultats">
                <button className="button-close" onClick={() => this.props.supprimerCarte(this.props.index)}>x</button>
                <p className='villeNom'>{this.props.ville.Nom}</p>
                <div className='lever'>
                    <img src={leverImage} alt='Levant' className='leverImage' /> 
                    <div > {carte.lever} </div>  
                </div>
                <div className='coucher'>
                    <img src={coucherImage} alt='Couchant' className='coucherImage' />
                    <div> {carte.coucher} </div>  
                </div>
                <div className='duree'>
                    Durée: 
                    <div className="texteDroite"> {carte.duree} </div>  
                </div>
            </div>
        );
    }
}
    

export default Resultats;
