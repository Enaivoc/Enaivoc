function playInsVid(){
  document.getElementById("introplay-btn").style.visibility="visible"
  document.getElementById("introplay-btn").style.removeProperty("display")
  document.getElementById("insplay-btn").style.display="none"
  let inspirationVideo=document.getElementById("video-play")
  let introVid=document.getElementById("intro-video")
  inspirationVideo.currentTime=0;
  inspirationVideo.play()
  introVid.pause()
  document.getElementById("home").style.display="none"
  document.getElementById("video").style.visibility="visible"
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
}

function playIntroVid(){
  document.getElementById("insplay-btn").style.visibility="visible"
  let introVid=document.getElementById("video-play")
  let inspirationVideo=document.getElementById("video-play")
  introVid.currentTime=0;
  introVid.play()
  
  document.getElementById("introplay-btn").style.display="none"
  document.getElementById("insplay-btn").style.removeProperty("display")
  document.getElementById("home").style.display="none"
  document.getElementById("video").style.visibility="visible"
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
  
  
}

function selectIntro(){
  document.getElementById("introplay-btn").style.visibility="visible"
  document.getElementById("enaivoc-intro").style.opacity = "1.0";
  document.getElementById("insplay-btn").style.visibility="visible"
  document.getElementById("enaivoc-intro").style.width="90%"
  document.getElementById("inspiration-video").style.width="55%"
  document.getElementById("inspiration-video").style.opacity = "0.3";
  document.getElementById("insplay-btn").style.top="123px"
  document.getElementById("introplay-btn").style.top="295px"
  let inspirationVideo=document.getElementById("daily-video")
  inspirationVideo.pause()
  
}

function selectInspiration(){
  document.getElementById("insplay-btn").style.visibility="visible"
  document.getElementById("enaivoc-intro").style.opacity = "0.3";
  document.getElementById("enaivoc-intro").style.width="55%"
  document.getElementById("inspiration-video").style.width="90%"
  document.getElementById("inspiration-video").style.opacity = "1.0";
  document.getElementById("insplay-btn").style.top="148px"
  /**document.getElementById("introplay-btn").style.visibility="hidden"**/
  let introVid=document.getElementById("intro-video")
  introVid.pause()
  document.getElementById("introplay-btn").style.top="330px"
  
}
function Home(){
  document.getElementById("home").style.removeProperty("display")
  document.getElementById("video").style.visibility="hidden"
  document.getElementById("body").style.backgroundColor="white"
  let Video=document.getElementById("video-play")
  Video.pause()
  document.getElementById("introplay-btn").style.removeProperty("display")
  document.getElementById("insplay-btn").style.removeProperty("display")
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
}￼Enter
