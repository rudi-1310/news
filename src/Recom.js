import React from 'react';
import axios from 'axios';
export default function Recom() {

    console.log(localStorage.getItem('history'))
    // const { spawn } = require('child_process')

    // Create an array of data to send to Python


    // Convert the array elements to strings
    // const datasetStrings = localStorage.getItem('history').map(String);

    // // Spawn a Python process and pass the dataset as command-line arguments
    // const pythonProcess = spawn('python', ['reco.py', ...datasetStrings]);

    // // Handle the stdout and stderr streams of the Python process (if needed)
    // pythonProcess.stdout.on('data', (data) => {
    //     console.log(`Python stdout: ${data}`);
    // });

    // pythonProcess.stderr.on('data', (data) => {
    //     console.error(`Python stderr: ${data}`);
    // });

    // // Handle the Python process exit event (if needed)
    // pythonProcess.on('close', (code) => {
    //     console.log(`Python process exited with code ${code}`);
    // });

    return (
        <div>
            hello
        </div>
    )
}
