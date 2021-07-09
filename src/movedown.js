// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const Movedown = new GestureDescription('Movedown'); 

Movedown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Movedown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
Movedown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
Movedown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    Movedown.addCurl(finger, FingerCurl.FullCurl, 1.0);
    Movedown.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    Movedown.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}