// Importing all neccesary libraries
import "./App.css";
import React, { useRef } from "react";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";

// Importing pre-defined gesture (using fingerpose library)
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
        // loading handpose model
        const net = await handpose.load(); //It returns neutral network (net).
        console.log("Handpose model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            detect(net);// for detecting hand 'detect' function is called.
        }, 100);// calling detect function after every 100 ms.
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

            // if hand is detected then:
            if (hand.length > 0) {

                // Loading the pre-defined gesture into GE for calculating the confidence by comparing with the detected hand gesture
                const GE = new fp.GestureEstimator([
                    Stop,
                    Start,
                    Left,
                    Right,
                    Moveup,
                    Movedown,
                ]);
                
                // The gesture of the hand is detected 
                const gesture = await GE.estimate(hand[0].landmarks, 7);

                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    // console.log(gesture.gestures);


                    // It is then compared with the predefined gesture and confidence value is calculated
                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.confidence
                    );

                    // Amongst the different confidence value againt all the pre-defined gesture the max value is taken
                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );
                    console.log(gesture.gestures[maxConfidence].name);
                    var v = gesture.gestures[maxConfidence].name
                    
                    // The detected gesture is then save into a invisible div ,which is the send to the unity for movement of the character model(see /public/index.html)
                    document.getElementById("insert").innerHTML = v;
                    
                }
            }

            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };


    // calling runHandpose function, which in turn run detect function .
    runHandpose();

    // Styling of the unity container and the camera feed window.
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

export default App;