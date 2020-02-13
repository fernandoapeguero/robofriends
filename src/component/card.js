import React  from "react";
import './card.css';
import 'tachyons';

const Card = ({id , name , username}) => {

    return (
        
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" id={id}>
                <h2>{name}</h2>
                <p>{username}</p>
                <img src={`https://robohash.org/${id}`} alt="Bob The Robot" />
            </div>
    )


}

export default Card;