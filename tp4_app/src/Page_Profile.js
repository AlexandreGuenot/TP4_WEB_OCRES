import React from 'react'
import { Davidi } from './data';
const Page_Profile = ({donnees})  => {

  function makeRandomColor(){
  var c = '';
  while (c.length < 7) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  alert("Marche pas mais le code hexa de la couleur random s'affiche bien dans la console ")
console.log('#' + c ) // Affiche bien l'hexa en Console... 
document.body.style.color = '#' + c;
}

    function Changervaleur(theId){
        
    }


    const [value, setValue] = React.useState(0); // Pour Les Likes
    return (
        <div className = "section-center">

            {donnees.map((element) => {
                const {id,nom,prenom,image,naissance,last_tweet} = element;

                return(
                    <div key={id}>
                    <img src={image} alt={nom} className="photo"></img>
                    <p>
                        <span className = "nom">{nom}</span>
                        <span className = "prenom">{prenom}</span>
                    </p>
                    <h2>{naissance}</h2>
                    <button className="btn-change-color"     
                            onClick={()=>makeRandomColor()}>
                        Changer La couleur
                    </button>
                    <div className="post-container">
                    <p>{last_tweet}</p>
                    <button className="btn-like" 
                            onClick = {() => Changervaleur(id)}>
                            Like
                    </button>
                    <h1 className="value-like">{value}</h1>
                    
                    </div>
                    </div>
                );
            })
            }
        </div>
        
);
}
export default Page_Profile;