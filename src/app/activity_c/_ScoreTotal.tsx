"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';


interface ScoreData {
    myscore: number;
}


const _ScoreTotal = () => {
    const [scoreData, setScoreData] = useState<ScoreData>({ myscore: 0 });

    useEffect(() => {
        // GET USER SCORE
        async function getScore() {
            const loggedInValue = getCookie('LoggedIn');
            if(loggedInValue){
                const scoretype = "Type_A";
                const data = { loggedInValue, scoretype };

                await axios.post('http://localhost/12DeweyMastery/read.php', data)
                .then(res => {
                    setScoreData(res.data)
                });
            }
        }
        getScore();

        // get value(user-id) from cookie
        function getCookie(cookieName : string) {
            const cookies = document.cookie.split(';');
                for (const cookie of cookies) {
                const [name, value] = cookie.trim().split('=');
                if (name === cookieName) {
                    return decodeURIComponent(value);
                }
            }
        }

    }, []);


  return (
    <>
        {scoreData.myscore>0 && (
            <div className="totalScoreC">
                <h1>{scoreData.myscore} pts</h1>
            </div>
        )}
    </>
  );
};

export default _ScoreTotal;
