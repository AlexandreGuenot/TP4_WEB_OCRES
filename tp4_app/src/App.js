import React, { useState } from 'react';
import Choix_Profile from './Choix_Profile';
import Page_Profile from './Page_Profile';
import donnees from './data';

function App() {
    const[profils, setProfils] = useState([]); // profils == menuitems
    function filterProfils(active_profile) {
    const newprofil = donnees.filter((item) => item.prenom === active_profile);
    setProfils(newprofil);
    console.log(newprofil);
    console.log('Le Clique fonctionne') //Vérif que le clique appelle cette fonction et c'est le cas Niquel // 
  } 
return(
<div>
             <div className ="header">
                <Choix_Profile 
                filterProfils= {filterProfils}>
                </Choix_Profile>
            </div>
            <div className="main">
            <Page_Profile 
            donnees = {profils}>
            </Page_Profile>
            </div>
    </div>
    
);
}
export default App;
