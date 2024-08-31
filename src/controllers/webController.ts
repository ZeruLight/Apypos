import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";



export const getWebContent = (req: Request, res: Response) => {
  
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Current Path</title>
    <style>
        body,
        html {
            height: 100%
        }

        body {
            font: 22px \\30D2\\30E9\\30AE\\30CE\\89D2\\30B4 ProN W3;
            font-size: 22px;
            font-family: Hiragino Kaku Gothic ProN, Hiragino Kaku Ghothic ProM W3, sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
            line-height: 1.2;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none
        }

        body div,
        body textarea {
            box-sizing: border-box
        }

        .normalMode ::-webkit-scrollbar {
            display: none
        }

        #content {
            height: 100%;
            width: 100%
        }

        .font-blue {
            color: #003567
        }

        .font-blackred {
            color: #a01c38
        }

        .font-black {
            color: #180614
        }

        .font-green {
            color: #064809
        }

        .font-violet {
            color: #c71585
        }

        .font-cream {
            color: #fef5c9
        }

        .font-brown {
            color: #4f1211
        }

        .font-orange {
            color: #f05c00
        }

        .font-white {
            color: #fff
        }

        .font-bold {
            font-weight: 700
        }

        .font-fat {
            font-size: 27px;
            font-weight: bolder
        }

        .font-link {
            color: #0d00f3;
            text-decoration: underline
        }

        .font-red {
            color: #ad0000
        }

        .font-yellow {
            color: #ff0
        }

        .font-black {
            color: #000
        }

        .font-stroke-white {
            text-shadow: #fff 0 1px 1px, #fff 0 -1px 1px, #fff 1px 0 1px, #fff -1px 0 1px, #fff 1px -1px 1px, #fff 1px 1px 1px, #fff -1px -1px 1px, #fff -1px 1px 1px
        }

        .font-stroke-cream {
            text-shadow: #dbcba0 0 1px 1px, #dbcba0 0 -1px 1px, #dbcba0 1px 0 1px, #dbcba0 -1px 0 1px, #dbcba0 1px -1px 1px, #dbcba0 1px 1px 1px, #dbcba0 -1px -1px 1px, #dbcba0 -1px 1px 1px
        }

        .font-stroke-purple-double {
            text-shadow: #4f1b07 0 1px 1px, #4f1b07 0 -1px 1px, #4f1b07 1px 0 1px, #4f1b07 -1px 0 1px, #4f1b07 1px -1px 1px, #4f1b07 1px 1px 1px, #4f1b07 -1px -1px 1px, #4f1b07 -1px 1px 1px, #4f1b07 0 -2px 1px, #4f1b07 2px 0 1px, #4f1b07 -2px 0 1px, #4f1b07 2px -2px 1px, #4f1b07 2px 2px 1px, #4f1b07 -2px -2px 1px, #4f1b07 -2px 2px 1px
        }

        .font-stroke-black {
            text-shadow: #000 0 1px 1px, #000 0 -1px 1px, #000 1px 0 1px, #000 -1px 0 1px, #000 1px -1px 1px, #000 1px 1px 1px, #000 -1px -1px 1px, #000 -1px 1px 1px
        }

        .font-stroke-black-double {
            text-shadow: #000 0 1px 1px, #000 0 -1px 1px, #000 1px 0 1px, #000 -1px 0 1px, #000 1px -1px 1px, #000 1px 1px 1px, #000 -1px -1px 1px, #000 -1px 1px 1px, #000 0 -2px 1px, #000 2px 0 1px, #000 -2px 0 1px, #000 2px -2px 1px, #000 2px 2px 1px, #000 -2px -2px 1px, #000 -2px 2px 1px
        }

        .font-stroke-brown {
            text-shadow: #4f1b07 0 1px 1px, #4f1b07 0 -1px 1px, #4f1b07 1px 0 1px, #4f1b07 -1px 0 1px, #4f1b07 1px -1px 1px, #4f1b07 1px 1px 1px, #4f1b07 -1px -1px 1px, #4f1b07 -1px 1px 1px
        }

        .font-stroke-darkblue {
            text-shadow: #294552 0 1px 1px, #294552 0 -1px 1px, #294552 1px 0 1px, #294552 -1px 0 1px, #294552 1px -1px 1px, #294552 1px 1px 1px, #294552 -1px -1px 1px, #294552 -1px 1px 1px
        }

        .font-stroke-cream2 {
            text-shadow: beige 0 1px 1px, beige 0 -1px 1px, beige 1px 0 1px, beige -1px 0 1px, beige 1px -1px 1px, beige 1px 1px 1px, beige -1px -1px 1px, beige -1px 1px 1px
        }

        .text-shadow {
            text-shadow: 2px 2px 1px rgba(0, 0, 0, .2)
        }

        .text-center {
            text-align: center
        }

        .text-right {
            text-align: right
        }

        .text-left {
            text-align: left
        }

        div.block-center {
            margin-left: auto;
            margin-right: auto
        }

        div.horizon {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex
        }

        div.horizon.middle {
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center
        }

        div.horizon.stretch {
            -webkit-box-align: stretch;
            height: 100%
        }

        div.horizon>div {
            -webkit-box-sizing: border-box
        }

        div.horizon>div.flex {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1
        }

        div.horizon.auto>div+div {
            margin-left: 5px
        }

        div.justify {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between
        }

        div.margin-syurai-img {
            margin-top: 30px;
            margin-bottom: 20px
        }

        div.margin-l {
            margin-top: 20px;
            margin-bottom: 20px
        }

        div.margin-m {
            margin-top: 10px;
            margin-bottom: 10px
        }

        div.margin-s {
            margin-top: 5px;
            margin-bottom: 5px
        }

        div.margin-r10 {
            margin-right: 10px
        }

        div.padding-side-l {
            padding-left: 20px;
            padding-right: 20px
        }

        textarea {
            background-color: transparent;
            -webkit-appearance: none;
            border-radius: 0;
            border: none;
            outline: none;
            resize: none;
            color: #fdffbe;
            font-size: 17px
        }

        div.load-indicator {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 8px solid #fff;
            border-right-color: transparent;
            -webkit-animation: spin 1s ease-out infinite;
            animation: spin 1s ease-out infinite;
            display: inline-block
        }

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(2turn);
                transform: rotate(2turn)
            }
        }

        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(2turn);
                transform: rotate(2turn)
            }
        }

        @-webkit-keyframes blink {
            0% {
                opacity: 1
            }

            20% {
                opacity: 0
            }

            40% {
                opacity: 1
            }

            to {
                opacity: 1
            }
        }

        @keyframes blink {
            0% {
                opacity: 1
            }

            20% {
                opacity: 0
            }

            40% {
                opacity: 1
            }

            to {
                opacity: 1
            }
        }

        .anim-blink {
            -webkit-animation: blink 1s linear infinite;
            animation: blink 1s linear infinite
        }

        .flip-h {
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1)
        }

        .no-tap {
            pointer-events: none
        }

        button,
        input,
        select,
        textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            margin: 0;
            padding: 0;
            background: none;
            border: none;
            border-radius: 0;
            outline: none
        }

        div.checkbox {
            position: relative
        }

        div.checkbox,
        div.checkbox>div.check {
            display: inline-block
        }

        div.checkbox>div.check:before {
            content: "\\3000";
            width: 32px;
            height: 32px;
            display: inline-block;
            background-color: #fff;
            box-shadow: inset 1px 2px 3px 0 #000;
            border-radius: 6px;
            line-height: 34px;
            font-size: 34px;
            color: orange
        }

        div.checkbox.checked>div.check:before {
            content: "\\2713"
        }

        div.checkbox div.label {
            display: inline-block;
            font-size: 21px;
            position: relative;
            top: -5px;
            cursor: pointer;
            margin-left: 10px
        }

        div.checkbox>input {
            display: none
        }

        .shadow-normal {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, .5)
        }

        .fade-enter {
            opacity: .01
        }

        .fade-active {
            opacity: 1
        }

        .fade-active,
        .fade-leave {
            -webkit-transition: opacity .5s ease-in;
            transition: opacity .5s ease-in
        }

        .fade-leave {
            opacity: .01
        }

        .timetable-container {
            -webkit-overflow-scrolling: touch
        }

        .timetable-container table {
            border-collapse: collapse;
            border-spacing: 0;
            table-layout: fixed;
            border: 0
        }

        .timetable-container .scrollBody,
        .timetable-container .scrollHead {
            display: block;
            -webkit-overflow-scrolling: touch
        }

        .timetable-container .scrollBody {
            overflow-y: auto
        }

        .timetable-container td,
        .timetable-container th {
            padding: 0;
            margin: 0;
            table-layout: fixed
        }

        .timetable-container tr {
            padding: 0;
            table-layout: fixed
        }

        .no {
            width: 30px
        }

        .name {
            width: 50px
        }

        .address {
            width: 200px
        }

        img {
            margin: 0
        }

        div.scroll {
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch
        }

        .top-image img {
            vertical-align: top
        }

        .slidein {
            opacity: 0;
            -webkit-transform: translate(-150px);
            transform: translate(-150px);
            overflow-x: hidden
        }

        .slidein.active {
            opacity: 1;
            -webkit-transform: translate(0);
            transform: translate(0);
            overflow-x: hidden
        }

        .animation-all {
            -webkit-transition: all .5s ease 0ms;
            transition: all .5s ease 0ms
        }

        .no-wrap {
            white-space: nowrap
        }

        .table-regular {
            background-color: beige
        }

        .table-brownback,
        .table-regular {
            border: 1px solid #000;
            border-spacing: 0 0
        }

        .table-brownback {
            background-color: #aa721e;
            white-space: nowrap
        }

        .table-borderuponly,
        .table-noborder {
            background-color: beige;
            white-space: nowrap
        }

        .table-borderuponly {
            border: 1px solid #000;
            border-bottom-style: none;
            border-left-style: none;
            border-right-style: none
        }

        .table-nouponly {
            border: 1px solid #000;
            border-top-style: none;
            background-color: beige;
            white-space: nowrap
        }

        .table-blackback {
            border: 1px solid #000;
            border-spacing: 0 0;
            background-color: rgba(0, 0, 0, .5);
            white-space: nowrap
        }

        .relative {
            position: relative
        }

        .absolute {
            position: absolute
        }

        .cursor-pointer {
            cursor: pointer
        }
    </style>
</head>

<body>

    <div style="width: 640px; height: 100%; margin-left: auto; margin-right: auto;">
        <div style="position: relative; height: 100%;">
            <div style="margin-bottom: -20px; position: fixed; top: 0px; z-index: 20; width: 640px;">
                <div>
                    <div class="text-center font-bold" style="background-color: black;"><img
                            src="https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/title/title_member_mhxr.png">
                    </div>
                    <div class="text-center"
                        style="background-image: url(&quot;https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_member_header.png&quot;); width: 100%; height: 88px; background-size: auto; padding-top: 1px;">
                        <div style="position: relative;">
                            <div class="text-center" style="padding-top: 4px;">
                                <div
                                    style="background-image: url(&quot;https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_member_h_title.png&quot;); width: 490px; height: 72px; background-size: auto; display: inline-block;">
                                    <div
                                        style="padding-top: 14px; font-weight: bold; font-size: 35px; vertical-align: top;">
                                        Not Found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style="background-image: url(&quot;https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_wood_02.png&quot;); background-size: contain; padding-top: 120px; min-height: 100%; overflow-x: hidden;">
                <!-- react-empty: 18 -->
                <div style="display: block;">
                    <div>
                        <div style="margin: 30px auto 10px; width: 613px;">
                            <div class="block-center font-stroke-cream font-brown" style="width: 613px;">
                                <div class="block-center font-stroke-cream font-brown"
                                    style="background-image: url(&quot;https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_paper_top_02.png&quot;); height: 40px; width: 613px; background-size: auto;">
                                </div>
                                <div class="block-center"
                                    style="background-image: url(&quot;https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_paper_center_02.png&quot;); width: 613px; padding-top: 1px; padding-bottom: 1px; background-size: auto;">
                                    <div
                                        style="margin-top: -40px; margin-bottom: -55px; padding-bottom: 1px; position: relative; z-index: 1;">
                                        <div style="padding: 10px 10px 50px 20px;">
                                            <div class="font-bold" style="padding: 20px 40px 50px;">
                                                <div class="text-center margin-m font-green font-bold"
                                                    style="font-size: 30px;">Monster Hunter Explore</div>
                                                <div class="text-center" style="margin-left: -10px;"><img
                                                        src="https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_paper_line.png"
                                                        width="530" height="17"></div>
                                                <div class="text-center margin-m font-red font-bold font-stroke-white"
                                                    style="font-size: 35px;">This page cannot be displayed.</div>
                                                <div class="text-left margin-m" style="font-size: 25px;">
                                                    <!-- react-text: 37 -->
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
        pathElement.textContent = window.location.pathname +" has been lost to history.";
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
    </script><!-- /react-text --><br>
                                                </div>
                                                <div class="text-center margin-m"><img
                                                        src="https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/character/b601405fd7c70b327aa4a36be56d767128be19041603ab5d0a54cf97ec8cf289.png">
                                                </div>
                                                <div class="text-center" style="margin-left: -10px;"><img
                                                        src="https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_paper_line.png"
                                                        width="530" height="17"></div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-center font-stroke-cream font-brown"
                                    style="background-image: url(&quot;https://web.archive.org/web/20200928092520/https://dl.mh-xr.jp/web/image2/bg/bg_paper_end_02.png&quot;); height: 55px; width: 613px; background-size: auto;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`);

};
