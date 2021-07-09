// // Import dependencies
// import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// // Define Gesture Description
// export const Start = new GestureDescription('Start');

// Start.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
// Start.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
// Start.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
// Start.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
// Start.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

// for (let finger of[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {

//     Start.addCurl(finger, FingerCurl.FullCurl, 1.0);
//     Start.addCurl(finger, FingerCurl.HalfCurl, 1.0);
//     Start.addDirection(finger, FingerDirection.VerticalUp, 0.75);
//     // Start.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
//     // Start.addDirection(finger, FingerDirection.HorizontalLeft, 0.2);
//     // Start.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
//     // Start.addDirection(finger, FingerDirection.HorizontalRight, 0.2);
// }



// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// describe victory gesture ✌️
export const Start = new GestureDescription('Start');


// thumb:
Start.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
Start.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
Start.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
Start.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
Start.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Start.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
Start.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
Start.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Start.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
Start.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
Start.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Start.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
Start.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
Start.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
Start.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Start.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
Start.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
Start.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
Start.setWeight(Finger.Index, 2);
Start.setWeight(Finger.Middle, 2);

export default Start;