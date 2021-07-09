
import React, { useRef } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";


import * as fp from "fingerpose";

import { Stop } from "./stop";
import { Start } from "./start";
import { Left } from "./left";
import { Right } from "./right";
import { Movedown } from "./movedown";
import { Moveup } from "./moveup";

function App() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runHandpose = async() => {
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 100);
    };

    const detect = async(net) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);
            // console.log(hand);

            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    Stop,
                    Start,
                    Left,
                    Right,
                    Moveup,
                    Movedown,
                ]);

                const gesture = await GE.estimate(hand[0].landmarks, 7);

                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    // console.log(gesture.gestures);

                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.confidence
                    );
                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );
                    console.log(gesture.gestures[maxConfidence].name);
                    var v = gesture.gestures[maxConfidence].name

                    document.getElementById("insert").innerHTML = v;
                    
                }
            }

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    runHandpose();

    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <Webcam ref = { webcamRef }
                style = {
                    {
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        // marginLeft: "auto",
                        // marginRight: "auto",
                        // left: 0,
                        // right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 250,
                        height: 188,
                        transform: 'scaleX(-1)',
                    }
                }
                />

                <canvas ref = { canvasRef }
                style = {
                    {
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        // marginLeft: "auto",
                        // marginRight: "auto",
                        // left: 0,
                        // right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 250,
                        height: 188,
                        transform: 'scaleX(-1)',
                    }
                }
                />

            </header>  
        </div >
    );
}

// function abc() {
//     console.log(a);
//     mygi.SendMessage('Cylinder', 'MoveForward');
// }
export default App;