// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const Right = new GestureDescription('Right'); 

Right.addCurl(Finger.Thumb,FingerCurl.HalfCurl,1);
Right.addCurl(Finger.Thumb,FingerCurl.NoCurl,1);
Right.addDirection(Finger.Thumb,FingerDirection.VerticalUp,1);
Right.addDirection(Finger.Thumb,FingerDirection.DiagonalUpLeft,0.75);
Right.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,0.75);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {

    Right.addCurl(finger, FingerCurl.NoCurl, 1.0);
    Right.addDirection(finger, FingerDirection.HorizontalLeft, 1);
    //Left.addDirection(finger, FingerDirection.DiagonalUpRight, 0.75);
    //Left.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.50);
  }