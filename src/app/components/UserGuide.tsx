import React from 'react'
import '../assets/styles/_modal.css'

export default function UserGuide() {
  return (
    <div>
        <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#guide">Guide</button>

        <div id="guide" className="modal fade" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-success" id="staticBackdropLabel">HELP - GUIDE</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> 
                    <div className="modal-body" style={{textAlign: 'center'}}>
                        <h5><b>Here's the place to gain mastery of the Dewey Decimal System</b></h5>
                        <p>Engage with three primary tasks..</p><br />
                        <h6>&#10022; Replacing Books: drag & sort the call numbers in ascending order from top to bottom.</h6>
                        <h6>&#10022; Identifying Areas: drag elements vertically to match a call number to its correct description.</h6>
                        <h6>&#10022; Finding Call Numbers: Test your knowledge of call numbers by traversing through the classification heirarchy to find the right call number.</h6>
                        <br /><h5>&#10029; Create an account, track your points & earn rewards.</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}