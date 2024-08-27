/* Pushes the key id's into the notes array, making all piano key divs available to notes array */
const style=document.createElement('style');
style.innerHTML='#lesson-menu{visibility: visible;}';
  document.head.appendChild(style);
const keys = [
  "c-key",
  "csharp-key",
  "d-key",
  "dsharp-key",
  "e-key",
  "f-key",
  "fsharp-key",
  "g-key",
  "gsharp-key",
  "a-key",
  "asharp-key",
  "b-key",
  "chigh-key",
  "csharphigh-key",
  "dhigh-key",
  "dsharphigh-key",
  "ehigh-key",
  "fhigh-key"
];

const notes = [];

keys.forEach(key => {
  notes.push(document.getElementById(key));
});

/* Sets a delay before the pressed note disapears from the display in #notebox */
let timerNote;
const timerNoteDelay = () => {
  clearTimeout(timerNote);
  timerNote = setTimeout(() => {
    $("#notebox").html(" ");
  }, 1500);
};

/* Stops note audio playing on repeated key presses of the same key */
const stopAudio = audio => {
  audio.pause();
  audio.currentTime = 0;
};

/* Events triggered on a key being pressed */
const keyDown = key => {
  let playAudio = key.target.getAttribute("data-sound"); // assigns the data-sound attribute of the pressed key to playAudio
  let targetPlayAudio = document.getElementById(playAudio); // matches the data-sound info the ID of the audio track
  stopAudio(targetPlayAudio); // resets audio track if pressed before audio finished
  targetPlayAudio.play(); // plays audio on keypress
  key.target.setAttribute(
    "style",
    "background-color: #ffee1c; border: #aac900; border-width: 2px; border-style: inset"
  ); // indicates key has been pressed visually
  $("#notebox").html(key.target.getAttribute("data-note")); // fetch and pass note displayed in notebox above piano
};

/* Events triggered on a key being released */
const keyUp = key => {
  key.target.setAttribute("style", "background-color: ; border: ");
  timerNoteDelay();
};

/* Assigns the keyDown and keyUp variables to pointer events and tutorDemo and makes them available to all piano keys. keyPress uses pointer instead of mouse to allow multi-finger input on touchscreen laptops */
const keyPress = note => {
  note.onpointerdown = () => {
    keyDown(event);
  };
  note.onpointerup = () => {
    keyUp(event);
  };
  note.onpointerleave = () => {
    keyUp(event);
  };
};

/* Makes the keyPress variable available to all the key divs that were pushed to the notes array */
notes.forEach(keyPress);

/*Starts the tutorDemo function on press of the 'Go' button. Disables the 'Go' button for 4 seconds to prevent additional presses*/
let startTutorButton;
let videoEnded = false;
let demoEnded = false;
let videoPaused = false;

$(document).ready(() => {
  startTutorButton=$("#startTutor");
  startTutorButton.click(function() {
    videoEnded = false;
    demoEnded = false;
    videoPaused = false;
     startTutorButton.hide();
    const video=document.getElementById("intro-video")
     video.addEventListener("ended",function (){
       videoEnded = true;
       checkBothEnded();
     });
     
     tutorDemo(function(){
       demoEnded = true;
       checkBothEnded();
     });
     playIll();
     
     
  });
});

function checkBothEnded(){
  startTutorButton.hide();
       if((videoEnded || videoPaused) && demoEnded){
         startTutorButton.css('display','block');
       }
     }
function tutorDemo(callback){
  document.documentElement.click();
  const keyObject = {};
  const speed = $("select#speed-select").val();
  const barLength = $("select#bar-select").val() * 2;
  const storageVar = window.localStorage.getItem("selectedSong");
  const order = JSON.parse(storageVar);
  let lastNote = order.length-1;
  let lastNoteFinished = false;
  order.forEach((note) => {
    const audioId = document.getElementById(note.note).getAttribute("data-sound");
    const audio = document.getElementById(audioId);
    audio.load();
    audio.play().then(() => {
      audio.pause();
      audio.currentTime=0;
    });
  });
  setTimeout(() => {
  for (let i = 0; i < order.length; i++) {
    const barLengthCorrected = barLength + i - order[i].time;
    const correctTiming = Math.round(order[i].time * speed*10)/10;
    if (i >= barLengthCorrected) {
      break;
    }
    ((i) => {
      setTimeout(() => {
       const keyId = document.getElementById(order[i].note);
        keyObject.target = keyId;
        const playAudio = keyId.getAttribute("data-sound");
        keyDown(keyObject);
        document.getElementById(playAudio).play();

          setTimeout(() => {
            keyUp(keyObject);
          }, speed / 2.5);

        keyDown(keyObject);
        if(i===lastNote){
            lastNoteFinished = true;
            checkBothEnded();
        }
      }, correctTiming);
    })(i);
  }
  },100);
  callback();


  function checkDemoEnd(){
    if(lastNoteFinished&&demoEnded){
      const video = document.getElementById("intro-video");
      video.pause();
      video.currentTime=0;
      videoPaused = true;
      checkBothEnded();
    }
  }
  callback();
  
}

function playIll(){
  document.getElementById("intro-video").play()
}


function syncVideoWithDemo(barLength){
  const video = document.getElementById("intro-video");
  const demoDuration = barLength*2;
  video.addEventListener("timeupdate",function(){
    if (demoEnded&&video.currentTime >= demoDuration){
      video.pause();
      video.currentTime=0;
      videoPaused = true;
      checkBothEnded();
    }
  });
}
$("select#bar-select").on("change", function(){
  const barLength = $(this).val()*1.2;
  syncVideoWithDemo(barLength)
});

/*
tutorDemo

Iterates through the song array, and simulates a user click on each key
- keyObject asigns the key buttons(html) as an object
- speed changes the demo play speed
- barLength changes how much of the song is played in the demo (4 beats per bar)
- storageVar pulls the song data string from local storage
- order parses storageVar into an array of objects
'if' statement breaks the song loop when the barLength is reached
'setTimeout' example was learnt from 'https://stackoverflow.com/questions/11764714/applying-delay-between-iterations-of-javascript-for-loop', and modified
First 'setTimeout' sets the delay between notes. This is modified by the 'correctTiming' variable, which uses the 'time' value of the song array
Second 'setTimeout' simulates time the key is held down (colour highlighting)
*/



/*Uses (https://github.com/kayahr/jquery-fullscreen-plugin/) to toggle fullscreen view*/

function toggleFullscreen() {
  $(document).toggleFullScreen();
}

$("#fullscreen-button").click(toggleFullscreen);
$("#help-button").click(() => {
  $("#modal").show();
});

$("#close-modal").click(() => {
  $("#modal").hide();
});
$(document).ready(() => {
  let selectedSongDescription= localStorage.getItem("selectedSongDescription");
  let videoSource = $("#intro-video")
  videoSource.attr("src",selectedSongDescription);
});

$('#start-quiz').click(function(){
  $(this).text('Coming Soon');
});