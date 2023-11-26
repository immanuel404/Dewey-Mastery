import React from 'react';
import '../assets/styles/task_b.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DraggableContainer from './_Draggable';
// import ScoreTotal from './_ScoreTotal';
import Bootstrap from '../components/xBootstrap'
import ForMobile from '../components/ForMobile'


// GET CALL NUMBERS
async function getCallNumbers() {
    const callDictionary = [
    ["000", "A general class used for works not limited to any one specific discipline"],
    ["100", "Covers philosophy, parapsychology and occultism, and psychology"],
    ["200", "Devoted to religion"],
    ["300", "Covers the social sciences"],
    ["400", "Comprises language, linguistics, and specific languages"],
    ["500", "Devoted to the natural sciences and mathematics"],
    ["600", "Deals with technology"],
    ["700", "Covers the art, fine and decorative arts, music and performing arts"],
    ["800", "Covers literature, and includes rhetoric, prose, poetry, drama"],
    ["900", "Devoted primarily to history and geography"]
  ];
  
  const callNumbers : string[] = [];
  const callDescriptions : string[] = [];

  while (callNumbers.length < 5) {
    const randomIndex = (Math.floor(Math.random() * 10) + 1)-1;

    if (!callNumbers.includes(callDictionary[randomIndex][0])) {
      callNumbers.push(callDictionary[randomIndex][0]);
      callDescriptions.push(callDictionary[randomIndex][1]);
    }
  }

  // Sorting without modifying the original
  const sortedDescritionArray = [...callDescriptions].sort((a, b) => {
    return a.localeCompare(b);
  });

  return { unsorted: callNumbers, sorted: sortedDescritionArray, answers: callDescriptions };
}


export default async function Activity_B() {
  const callNumbers = await getCallNumbers();

  return (
    <>
      <Bootstrap />
      <Navbar />
      <ForMobile />

      {/* <ScoreTotal /> */}

      <div className="task_b">
        <h1>Identifying Areas</h1>
        <h5>Drag Descriptions Vertically to Match its Corresponding Call Number.</h5>

        <div className="callnumbers">
          <DraggableContainer callNumbers={callNumbers} />
        </div>
      </div>

      <Footer />
    </>
  );
}