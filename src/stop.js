// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const Stop = new GestureDescription('Stop'); 

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky,Finger.Thumb]) {
    Stop.addCurl(finger, FingerCurl.NoCurl, 1.0);
    Stop.addDirection(finger, FingerDirection.VerticalUp, 1);
    Stop.addDirection(finger, FingerDirection.VerticalUp, 1);
  }