"use client"
import React, { useEffect } from 'react';
import UseJsonData from './_UseJsonData'
import axios from 'axios';


export default function _Slider() {
    // get data from cutom hook
    const { level1, level2, level3, answer1, answer2, answer3  } = UseJsonData();

    useEffect(() => {
        const answers = document.querySelectorAll('.answer');
        const split_Description : any = answers[2]?.textContent?.split(' - ');
        // check question data is not undefined
        if(split_Description[1] == "undefined" || split_Description[1] == null){
            const question = document.querySelectorAll('.question');
            question[0].textContent = "An error occured:(  Please refresh page.";
        } else {
            const question = document.querySelectorAll('.question');
            question[0].textContent = "Find the category call number for: " + split_Description[1];
        }
        // remove loader
        const loader : NodeListOf<HTMLElement> = document.querySelectorAll('.spinner-grow');
        loader[0].style.display = 'none';
    }, [answer1]);


    // onclick listener -> Level 1
    const handleLevel1 = (event : React.MouseEvent<HTMLParagraphElement>) => {
        event.preventDefault()
        let currentValue = (event.target as HTMLElement).textContent;
        const answers = document.querySelectorAll('.answer');
        if(currentValue == answers[0].textContent){
            alert("Correct! Go to Next Question");
            // slide carousel
            const carousels = document.querySelectorAll('.carousel-item');
            carousels.forEach((element) => {
                element.classList.remove('active');
            });
            carousels[1].classList.add('active');
        } else {
            alert("Incorrect! The correct answer is " + answers[0].textContent);
            showConfirmation();
        }
    }

    // onclick listener -> Level 2
    const handleLevel2 = (event : React.MouseEvent<HTMLParagraphElement>) => {
        event.preventDefault()
        let currentValue = (event.target as HTMLElement).textContent;
        const answers = document.querySelectorAll('.answer');
        if(currentValue == answers[1].textContent){
            alert("Correct! Go to Next Question");
            // slide carousel
            const carousels = document.querySelectorAll('.carousel-item');
            carousels.forEach((element) => {
                element.classList.remove('active');
            });
            carousels[2].classList.add('active');
        } else {
            alert("Incorrect! The correct answer is " + answers[1].textContent);
            showConfirmation();
        }
    }

    // onclick listener -> Level 3
    const handleLevel3 = (event : React.MouseEvent<HTMLParagraphElement>) => {
        event.preventDefault()
        let currentValue = (event.target as HTMLElement).textContent;
        const answers = document.querySelectorAll('.answer');
        if(currentValue == answers[2].textContent){
            // is user logged-in
            const loggedInValue = getCookie('LoggedIn');
            if(loggedInValue){
                var scoreType = "Type_A"
                var countScore = 10
                const data = { loggedInValue, countScore, scoreType };

                axios.post('http://localhost/12DeweyMastery/score.php', data)
                .then(res => {
                    console.log(res.data);
                    alert("Correct Again! Well Done!");
                    showConfirmation();
                });
            } else {
                alert("Correct Again! Well Done!");
                showConfirmation();
            }
        } else {
            alert("Incorrect! The correct answer is " + answers[2].textContent);
            showConfirmation();
        }
    }

    // get value(user-id) from cookie
    function getCookie(cookieName : string) {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
            if (name === cookieName) {
                return decodeURIComponent(value);
            }
        }
        return null;
    }


    // confirmation message
    function showConfirmation() {
        var result = confirm('Want to Keep practicing?');
        if (result == true) {
            location.reload();
        } else {
            window.location.href = "/";
        }
    }
  

  return (
    <>
        <h3 className="question">Find the category call number for: </h3>

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div style={{ display:'none' }}>
                    <p className="answer">{answer1}</p>
                    <p className="answer">{answer2}</p>
                    <p className="answer">{answer3}</p>
                </div>

                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

                <div className="carousel-item active">
                {level1.map((item, index) => (
                    <p className="_level1" onClick={handleLevel1} key={index}>{item}</p>
                ))}
                </div>

                <div className="carousel-item">
                {level2.map((item, index) => (
                    <p className="_level2" onClick={handleLevel2} key={index}>{item}</p>
                ))}
                </div>

                <div className="carousel-item">
                {level3.map((item, index) => (
                    <p className="_level3" onClick={handleLevel3} key={index}>{item}</p>
                ))}
                </div>
            </div>
        </div>
    </>
  );
}