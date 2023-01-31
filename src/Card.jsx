import React from 'react';

function Card(){
    let scoreboard = <img src="Score-Group-A.jpg"/>;
    let scoreboard2 = <img src="Score-group-B.jpg"/>
    return(
        <div>
        <div class="overflow-hidden bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div class="mt-6 text-lg leading-8 text-gray-600">
                            {scoreboard}
                        </div>
                    </div>                            
                </div>  
            </div> 
         </div>        
    
    )
}

export default Card;