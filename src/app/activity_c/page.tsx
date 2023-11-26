import React from 'react'
import '../assets/styles/task_c.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from './_Slider'
// import ScoreTotal from './_ScoreTotal';
import Bootstrap from '../components/xBootstrap'
import ForMobile from '../components/ForMobile'


export default function Activity_C() {
  return (
    <>
      <Bootstrap />
      <Navbar />
      <ForMobile />

      {/* <ScoreTotal /> */}

      <div className="task_c">
        <h1>Finding Call Numbers</h1>
        <h5>Traverse the Dewey Decimal Hierarchy to Find the Correct Call Number.</h5>
        <br />
        <Slider />
      </div>

      <Footer />
    </>
  );
}