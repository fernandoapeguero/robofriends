import React from 'react';
import Card from './card';

const CardList = ({robots})=> {


    return (
        <div>
            {
                robots.map((item , i) => {

                    return  (<Card 
                    key={i} 
                    id={item.id} 
                    name={item.name}
                    username={item.username}/> 
                    )
                
                })
            }
        </div>
    )
    
    
}


export default CardList