window.addEventListener('load',firstLoad)
function firstLoad(){
  document.getElementById("home-btn").style.display="none"
  document.getElementById("video").style.display="none"
}
if(window.location.search.includes('runFunction=true')){
   lessonMenu();
}
function playInsVid(){
  document.getElementById("home-btn").style.removeProperty("display")
  document.getElementById("introplay-btn").style.visibility="visible"
  document.getElementById("introplay-btn").style.removeProperty("display")
  document.getElementById("insplay-btn").style.display="none"
  let inspirationVideo=document.getElementById("video-play")
  let introVid=document.getElementById("intro-video")
  inspirationVideo.currentTime=0;
  inspirationVideo.play()
  introVid.pause()
  document.getElementById("home").style.display="none"
  document.getElementById("video").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
}

function playIntroVid(){
  document.getElementById("home-btn").style.removeProperty("display")
  document.getElementById("insplay-btn").style.visibility="visible"
  let introVid=document.getElementById("video-play")
  let inspirationVideo=document.getElementById("video-play")
  introVid.currentTime=0;
  introVid.play()
  
  document.getElementById("introplay-btn").style.display="none"
  document.getElementById("insplay-btn").style.removeProperty("display")
  document.getElementById("home").style.display="none"
  document.getElementById("video").style.removeProperty("display")
  
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
  
  
}

function selectIntro(){
  document.getElementById("introplay-btn").style.visibility="visible"
  document.getElementById("enaivoc-intro").style.opacity = "1.0";
  document.getElementById("insplay-btn").style.visibility="hidden"
  document.getElementById("enaivoc-intro").style.width="90%"
  document.getElementById("inspiration-video").style.width="55%"
  document.getElementById("inspiration-video").style.opacity = "0.3";
/**  document.getElementById("insplay-btn").style.top="26%"
  document.getElementById("introplay-btn").style.top="30%"**/
  let inspirationVideo=document.getElementById("daily-video")
  inspirationVideo.pause()
  
}

function selectInspiration(){
  document.getElementById("insplay-btn").style.visibility="visible"
  document.getElementById("enaivoc-intro").style.opacity = "0.3";
  document.getElementById("enaivoc-intro").style.width="55%"
  document.getElementById("inspiration-video").style.width="90%"
  document.getElementById("inspiration-video").style.opacity = "1.0";
  /**document.getElementById("insplay-btn").style.top="26%"**/
  /**document.getElementById("introplay-btn").style.visibility="hidden"**/
  let introVid=document.getElementById("intro-video")
  introVid.pause()
/**  document.getElementById("introplay-btn").style.top="30%"**/
  document.getElementById("introplay-btn").style.visibility="hidden"
  
}
function Home(){
  document.getElementById("home").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="white"
  let Video=document.getElementById("video-play")
  Video.pause()
  document.getElementById("introplay-btn").style.removeProperty("display")
  document.getElementById("insplay-btn").style.removeProperty("display")
  document.getElementById("home-btn").style.display="none"
  
  document.getElementById("video").style.display="none"
}
function lessonMenu(){
  document.getElementById("lesson-menu").style.visibility="visible"
  document.getElementById("lesson-menu").style.position="absolute"
  document.getElementById("lesson-menu").style.top="90px";
  document.getElementById("lesson-menu").style.left="0%";
  document.getElementById("home-page").style.visibility="hidden"
  document.getElementById("insplay-btn").style.visibility="hidden"
  document.getElementById("introplay-btn").style.visibility="hidden"
}


function replay(){
  let Video=document.getElementById("video-play")
  Video.currentTime= 0;
  video.play()
}
function pause(){
  let Video=document.getElementById("video-play")
  Video.pause()
  document.getElementById("video-pause").style.display="none"
  document.getElementById('videoplay-btn').style.removeProperty("display")
}

function videoPlay(){
  let Video=document.getElementById("video-play")
  Video.play()
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
}
function Endedvideo(){
  document.getElementById("video-pause").style.display="none"
  document.getElementById('videoplay-btn').style.removeProperty("display")
  let Video=document.getElementById0("video-play")
  Video.currentTime= 0;
}
$("#start-piano").click(() => {
  let selectedOption= $("select#dropdown-menu").find(":selected");
  let dataDescription = selectedOption.attr("data-description");
  localStorage.setItem("selectedSongDescription",dataDescription);
let songSelect = $("select#dropdown-menu").val();
localStorage.setItem("selectedSong", songSelect);
window.location.href = "Piano.html";
});
