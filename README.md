# Hand-Gesture-Gaming 

[Game-Link](https://chaitanya-chafale.github.io/Hand-Gesture-Gaming/)

## About the project
* This Project takes hand gesture (through webcam of your laptop) as an input to move a 3D character model in a 3D environment build in Unity 3D.

## Features
* Currently there are 6 hand gestures used in the project:
  * Move Front
  * Stop
  * Move Left
  * Move Right
  * Jump
  * Crouch
* Background music is also integrated with the environment.

## Installation
  1. Clone the repository
  2. In the Clonned folder terminal, run command 'npm install' to install all the dependencies required for the project(make sure npm package manager is installed)
  3. Open /src/app.js in any js editor(example Visual Studio Code).
  4. Run command 'npm run'.
  5. Enjoy 😎.

## Project Roadmap

* Using the Tensorflow Hand Recognition Model for hand and gesture detection.
  * [Mediapipe HandPose Model](https://github.com/tensorflow/tfjs-models/tree/master/handpose): MediaPipe Handpose is a lightweight ML pipeline consisting of two models: A Balze-palm detector and a hand-skeleton finger     tracking model(Hand Landmark model). It predicts 21 3D hand keypoints per detected hand. For more details, please read [Google AI blogpost](https://ai.googleblog.com/2019/08/on-device-real-time-hand-tracking-with.html).
  * [Fingerpose library for building user generated gesture](https://github.com/andypotato/fingerpose) (6 hand gesture, specified above)

* Building the 3D Environment in **Unity 3D**
  * Creating character in Unity 3D
  * Giving Animations to the Character using Adobe's Mixamo.
  * Developing C# Script for movement of the 3D character.
  * Creating 3D Environment by adding Objects such as trees, elevated lands, bridge, pond
  * Integrating this environment with the character created.
  * Adding sound to the environment.
  
* Integrating the 3D Environment and the Gesture Recognition Model
   * Using **WebGL** library to convert Unity Model to HTML.
   * Calling script functions in C# from React.js using Unity Model Instance.
   
* Hosting the project website on Github through Github Pages.

## Pre-defined Gestures
![image](https://user-images.githubusercontent.com/57006874/120470102-cc150980-c3c0-11eb-9034-3cea8e26c10a.png)

## Demo
You can play this game by clicking on [Game Link](https://chaitanya-chafale.github.io/Hand-Gesture-Gaming/).<br/>
Note: This game can be played on Laptop/PC only.<br/>
To watch how the Project works: [Project Demo](https://www.linkedin.com/posts/ashutosh-gupta-b9a949193_react-gesturerecognition-unity3d-ugcPost-6798659191981514752-CFtx) <br/>


## Screenshots

<!-- Hand Gesture Recognition

![Hand Gesture Recognition Model](https://user-images.githubusercontent.com/57006874/120469047-81df5880-c3bf-11eb-8644-de02c66c5e06.gif) -->

Unity-Environment

![Environment](https://github.com/chaitanya-chafale/Hand-Gesture-Gaming/blob/main/public/Unity%20Environment.gif)

Unity-Character

![Character](https://user-images.githubusercontent.com/57006874/120463113-332ec000-c3b9-11eb-931f-c5867198de9c.png)


## Contributors
LinkedIn - Github <br/>
[Chaitanya Chafale](https://www.linkedin.com/in/chaitanya-chafale/) - [chaitanya-chafale](https://github.com/chaitanya-chafale) <br/>
[Atharva Sawarkar](https://www.linkedin.com/in/atharvasawarkar/) - [Atharva787](https://github.com/Atharva787) <br/>
[Ashutosh Gupta](https://www.linkedin.com/in/ashutosh-gupta-b9a949193/) - [Ashutosh0212](https://github.com/Ashutosh0212) <br/>
[Apoorva Mandavgane](https://www.linkedin.com/in/apoorva-ashish-mandavgane-b116a718b/) - [alpha-maverick](https://github.com/alpha-maverick) <br/>
[Karan Jadhav](https://www.linkedin.com/in/karan-jadhav-722a71176/) - [karanjadhav12](https://github.com/karanjadhav12)

Also I would like to thanks [Nicholas Renotte](https://www.linkedin.com/in/nicholasrenotte/) for helping us to complete this project through his youtube videos and its explanations.<br/>
Video: [Real Time AI GESTURE RECOGNITION with Tensorflow.JS + React.JS + Fingerpose](https://www.youtube.com/watch?v=9MTiQMxTXPE&list=PLgNJO2hghbmhqne2KldbiWfzMGJSB6mQK&index=5)<br/>
Github: [Gesture recognition](https://github.com/nicknochnack/GestureRecognition)

