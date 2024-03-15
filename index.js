function playInsVid(){
  let inspirationVideo=document.getElementById("daily-video")
  let introVid=document.getElementById("intro-video")
  document.getElementById("insplay-btn").style.display="none"
  inspirationVideo.play()
  introVid.pause()
}

function playIntroVid(){
  let introVid=document.getElementById("intro-video")
  let inspirationVideo=document.getElementById("daily-video")
  introVid.play()
  inspirationVideo.pause()
  
}

function selectIntro(){
  document.getElementById("introplay-btn").style.visibility="visible"
  document.getElementById("enaivoc-intro").style.opacity = "1.0";
  document.getElementById("insplay-btn").style.display="none"
  document.getElementById("enaivoc-intro").style.width="85%"
  document.getElementById("inspiration-video").style.width="55%"
  document.getElementById("inspiration-video").style.opacity = "0.3";
  document.getElementById("insplay-btn").style.top="123px"
}

function selectInspiration(){
  document.getElementById("insplay-btn").style.removeProperty("display")
  document.getElementById("enaivoc-intro").style.opacity = "0.3";
  document.getElementById("enaivoc-intro").style.width="55%"
  document.getElementById("inspiration-video").style.width="85%"
  document.getElementById("inspiration-video").style.opacity = "1.0";
  document.getElementById("insplay-btn").style.top="160px"
  document.getElementById("introplay-btn").style.visibility="hidden"
}