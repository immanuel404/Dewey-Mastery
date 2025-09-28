import React from 'react';
import '../assets/styles/task_a.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DraggableContainer from './_Draggable';
// import ScoreTotal from './_ScoreTotal';
import ForMobile from '../components/ForMobile'
import Bootstrap from '../components/xBootstrap'


// GENERATE CALL NUMBERS
function generateCallNumber() {
    const firstDecimal = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const secondDecimal = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    const arrLetters = ["ABA", "DCA", "TDA", "IEA", "DFA", "BGA", "EHA", "AIA", "BJA", "IKA"];
    const letter = arrLetters[Math.floor(Math.random() * arrLetters.length)];

    return `${firstDecimal}.${secondDecimal} ${letter}`;
}


// GET SORTED AND UNSORTED CALL NUMBERS
async function getCallNumbers() {
    const callNumbersArray = [];
    let count = 0;

    while (count < 10) {
        const callNumber = generateCallNumber();
        callNumbersArray.push(callNumber);
        count++;
    }

    // Sorting without modifying the original
    const sortedCallNumbersArray = [...callNumbersArray].sort((a, b) => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA - numB;
    });

    return { unsorted: callNumbersArray, sorted: sortedCallNumbersArray };
}





export default async function Activity_A() {
    const callNumbers = await getCallNumbers();

    return (
        <>
            <Bootstrap />
            <Navbar />
            <ForMobile />

            {/* <ScoreTotal /> */}

            <div className="task_a">
                <h1>Sorting Books</h1>
                <h5>Drag Elements Vertically To Sort Call Numbers in Ascending Order!</h5>

                <div className="callnumbers">
                    <DraggableContainer callNumbers={callNumbers} />
                </div>
            </div>

            <Footer />
        </>
    );
}