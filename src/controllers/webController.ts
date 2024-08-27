import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";



export const getWebContent = (req: Request, res: Response) => {
  
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Current Path</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: white;
        }
        .path {
            font-size: 1.5em;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Current Path</h1>
    <p class="path" id="path"></p>
    <h1>Web View Function</h1>
    <ul>
      <li>mhxr://menu/multi</li>
      <li>mhxr://menu/nyankentai</li>
      <li>mhxr://menu/kouekiten</li>
      <li>mhxr://menu/shop</li>
      <li>mhxr://</li>
      <li>youtube.com // opens up browser</li>
    </ul>
    <!-- Textbox for user input -->
    <input type="text" id="userInput" placeholder="Enter text here">
    
    <!-- Button to trigger the JavaScript function -->
    <button onclick="sendToBrowser()">Submit</button>
    <script>
        // JavaScript to get the current path and display it
        const pathElement = document.getElementById('path');
        pathElement.textContent = window.location.pathname;
        function sendToBrowser() {
            // Get the value from the input field
            var inputText = document.getElementById('userInput').value;

            // Check if inputText is not empty
            if (inputText) {
                // Call the windows.wv.callBrowser with the input text
                windows.wv.callBrowser(inputText);
            } else {
                alert('Please enter some text!');
            }
        }
    </script>
</body>
</html>`);

};
