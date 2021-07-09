// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const Left = new GestureDescription('Left'); 

Left.addCurl(Finger.Thumb,FingerCurl.HalfCurl,1);
Left.addCurl(Finger.Thumb,FingerCurl.NoCurl,1);
Left.addDirection(Finger.Thumb,FingerDirection.VerticalUp,1);
Left.addDirection(Finger.Thumb,FingerDirection.DiagonalUpLeft,0.75);
Left.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,0.75);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {

    Left.addCurl(finger, FingerCurl.NoCurl, 1.0);
    Left.addDirection(finger, FingerDirection.HorizontalRight, 1);
    //Left.addDirection(finger, FingerDirection.DiagonalUpRight, 0.75);
    //Left.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.50);
  }