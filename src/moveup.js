// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const Moveup = new GestureDescription('Moveup'); 

Moveup.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Moveup.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
Moveup.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
Moveup.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    Moveup.addCurl(finger, FingerCurl.FullCurl, 1.0);
    Moveup.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    Moveup.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}