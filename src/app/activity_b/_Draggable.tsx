"use client"
import { useEffect, useRef } from 'react';
import axios from 'axios';


type CallNumberProps = {
    callNumbers: {
        unsorted: string[];
        sorted: string[];
        answers: string[];
    }
};

const _Draggable = ({ callNumbers } : CallNumberProps) => {
    const timerRef = useRef<HTMLDivElement | null>(null);
    const scoreRef = useRef<HTMLDivElement | null>(null);
    let countdownTime = 90;
    let stopTimer = false;

    const draggedItem = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const dragStartHandler = (event: DragEvent) => {
            draggedItem.current = event.target as HTMLDivElement;
            event.dataTransfer?.setData('text/plain', ''); // Required for Firefox
        };
        const dragOverHandler = (event: DragEvent) => {
            event.preventDefault();
        };
        const dropHandler = (event: DragEvent) => {
            event.preventDefault();
            const dropTarget = event.target as HTMLElement;
            // Swap the innerHTML of the dragged and drop target elements
            if (draggedItem.current && dropTarget && draggedItem.current !== dropTarget) {
                const temp = draggedItem.current.innerHTML;
                draggedItem.current.innerHTML = dropTarget.innerHTML;
                dropTarget.innerHTML = temp;
            }
            draggedItem.current = null;
        };

        const draggableElements : NodeListOf<HTMLElement> = document.querySelectorAll('.draggable');
        draggableElements.forEach((element: HTMLElement) => {
            element.addEventListener('dragstart', dragStartHandler);
            element.addEventListener('dragover', dragOverHandler);
            element.addEventListener('drop', dropHandler);
        });


        // update the timer
        function updateTimer() {
            const minutes = Math.floor(countdownTime / 60);
            const seconds = countdownTime % 60;
            timerRef.current!.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        // start the countdown
        let countdownInterval : any;
        function startCountdown() {
            countdownInterval = setInterval(function () {
                updateTimer();
                countdownTime--;
                if (countdownTime < 0 || stopTimer === true) {
                    clearInterval(countdownInterval);
                    if(countdownTime < 0){
                        var result = confirm('Out of Time! Want to keep practicing?');
                        if (result == true) {
                            location.reload();
                        } else {
                            window.location.href = "/";
                        }
                    }
                }
            }, 1000);
        }
        startCountdown();

        return () => {
            // clear interval -> unmount
            clearInterval(countdownInterval);
            // event listeners on component unmount
            draggableElements.forEach((element) => {
                element.removeEventListener('dragstart', dragStartHandler);
                element.removeEventListener('dragover', dragOverHandler);
                element.removeEventListener('drop', dropHandler);
            });
        };
    }, []);


    const StopTimer = ()  => {
        stopTimer = true;
        const elementsArray : string[] = [];
        const answersArray : string[] = [];

        const elements : NodeListOf<HTMLElement>  = document.querySelectorAll('.draggable');
        elements.forEach((element) => {
            elementsArray.push(element.innerHTML);
        });
        const answers = document.querySelectorAll('.answer');
        answers.forEach((answer) => {
            answersArray.push(answer.innerHTML);
        });
        
        let countScore = 0;
        for(let i=0; i<elements.length;i++) {
            if(elementsArray[i]==answersArray[i]){
                ++countScore;
            } else {
                elements[i].style.backgroundColor = 'red';
            }
        }


        const StoreScore = (countScore : number)  => {
            // is user logged-in
            const loggedInValue = getCookie('LoggedIn');
            if(loggedInValue){
                var scoreType = "Type_A"
                const data = { loggedInValue, countScore, scoreType };

                axios.post('http://localhost/12DeweyMastery/score.php', data)
                .then(res => {
                    console.log(res.data);
                });
            }
        }
        StoreScore(countScore);

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


        // alert -> message
        setTimeout(() => {
            alert("You Scored: " + countScore*2 + "/10");
            var result = confirm('Want to Keep practicing?');
            if (result == true) {
                location.reload();
            } else {
                window.location.href = "/";
            }
        }, 1000); 
    }


  return (
    <>
        <div className="static">
            <div id="timer" ref={timerRef}>1:30</div>
            <div id="score" ref={scoreRef}></div>
            <button id="stopTimer" onClick={StopTimer}>Stop</button>
        </div>

        <div id="non-drag-container">
        {callNumbers.unsorted && callNumbers.unsorted.map((callNumber, index) => (
            <div className="non-draggable" key={index}>
                {callNumber}
            </div>
        ))}
        </div>
        
        <div id="drag-container">
        {callNumbers.sorted && callNumbers.sorted.map((callNumber, index) => (
            <div className="draggable" draggable="true" key={index}>
                {callNumber}
            </div>
        ))}
        </div>

        <div id="answer">
        {callNumbers.answers && callNumbers.answers.map((callNumber, index) => (
            <div className="answer" key={index}>
                {callNumber}
            </div>
        ))}
        </div>
    </>
  );
};

export default _Draggable;
