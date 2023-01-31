import React from 'react';

function Card({teamName, teamWin, teamLoss}){
    let scoreboard = <img src="Score-Group-A.jpg" />;

    return(
        <div>
            <table className="m-auto">
                <thead>
                    <tr className="flex m-auto">
                        <td className="border-px border-solid text-center px-5 w-1/5">{teamName}</td>
                        <td className="border-px border-solid text-center px-5 w-1/5">{teamWin}</td>
                        <td className="border-px border-solid text-center px-5 w-1/5">{teamLoss}</td>
                    </tr>
                </thead>
            </table>
         </div>       
    )
}

export default Card;