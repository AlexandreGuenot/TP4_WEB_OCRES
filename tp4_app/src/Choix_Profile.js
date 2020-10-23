import React from 'react'

const Choix_Profile = ({filterProfils})  => {
    return (
        <div className ="btn-container">
            <button className="content-btn"
                    onClick={()=> filterProfils('Gaëlle')}>
                    Gaëlle
            </button>
            <button className="content-btn"
                    onClick={()=> filterProfils('Davidi')}>
                    Davidi
            </button>
            <button className="content-btn"
                    onClick={()=> filterProfils('Alexandre')}>
                    Alexandre
            </button>
        </div>
    );
}
export default Choix_Profile;
