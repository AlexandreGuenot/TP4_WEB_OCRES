import React from 'react'
const Page_Profile = ({donnees})  => { // donnees == items
    return (
        
        <div className = "section-center">
            {donnees.map((element) => {
                const {id,nom,prenom,image,naissance,last_tweet } = element;
                return(
                    <div key={id}>
                    <img src={image} alt={nom} className="photo"></img>
                    <p>
                        <span className = "nom">{nom}</span>
                        <span className = "prenom">{prenom}</span>
                    </p>
                    <h2>{naissance}</h2>
                    <div className="post-container">
                    <p>{last_tweet}</p>
                    </div>
                    </div>
                );
            })
            }
        </div>
        
);
}
export default Page_Profile;