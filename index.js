window.addEventListener('load',firstLoad)
function firstLoad(){
  document.getElementById("home-btn").style.display="none"
  document.getElementById("enaivocDescription-videoDiv").style.display="none"
  document.getElementById("montlyCartoon-videoDiv").style.display="none"
}
if(window.location.search.includes('runFunction=true')){
   lessonMenu();
}
function playEnaivocDescriptionVideo(){
  document.getElementById("montlyCartoon-videoDiv").style.display="none"
  document.getElementById("home-btn").style.removeProperty("display")
  document.getElementById("montlyCartoonDiv-btn").style.visibility="visible"
  document.getElementById("montlyCartoonDiv-btn").style.removeProperty("display")
  let Video=document.getElementById("intro-video")
  document.getElementById("home").style.display="none"
  document.getElementById("enaivocDescription-videoDiv").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
}

function playMontlyCartoonVideo(){
  document.getElementById("enaivocDescription-videoDiv").style.display="none"
  document.getElementById("home-btn").style.removeProperty("display")
  document.getElementById("enaivocDescriptionDiv-btn").style.visibility="visible"
  document.getElementById("enaivocDescriptionDiv-btn").style.removeProperty("display")
  document.getElementById("home").style.display="none"
  document.getElementById("montlyCartoon-videoDiv").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="black"
}
function ClickEnaivocDescriptionDiv(){
  document.getElementById("enaivocDescriptionDiv-btn").style.visibility="visible"
  document.getElementById("montlyCartoonDiv").style.opacity = "0.3";
  document.getElementById("montlyCartoonDiv").style.width="55%"
  document.getElementById("montlyCartoonDiv").style.height="110px"
  document.getElementById("enaivocDescriptionDiv").style.width="90%"
  document.getElementById("enaivocDescriptionDiv").style.height="170px"
  document.getElementById("enaivocDescriptionDiv").style.opacity = "1.0";
  document.getElementById("montlyCartoonDiv-btn").style.visibility="visible"
  
}
function ClickMontlyCartoonDiv(){
  document.getElementById("montlyCartoonDiv-btn").style.visibility="visible"
  document.getElementById("montlyCartoonDiv").style.opacity = "1.0";
  document.getElementById("montlyCartoonDiv").style.width="90%"
  document.getElementById("montlyCartoonDiv").style.height="170px"
  document.getElementById("enaivocDescriptionDiv").style.width="55%"
  document.getElementById("enaivocDescriptionDiv").style.height="110px"
  document.getElementById("enaivocDescriptionDiv").style.opacity = "0.3";
}
function Home(){
  document.getElementById("home").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="white"
  document.getElementById("montlyCartoonDiv-btn").style.removeProperty("display")
  document.getElementById("enaivocDescriptionDiv-btn").style.removeProperty("display")
  document.getElementById("home-btn").style.display="none"
  document.getElementById("enaivocDescription-videoDiv").style.display="none"
  document.getElementById("montlyCartoon-videoDiv").style.display="none"
  
}
function lessonMenu(){
  document.getElementById("lesson-menu").style.visibility="visible"
  document.getElementById("lesson-menu").style.position="absolute"
  document.getElementById("lesson-menu").style.top="90px";
  document.getElementById("lesson-menu").style.left="0%";
  document.getElementById("home-page").style.visibility="hidden"
  document.getElementById("enaivocDescriptionDiv-btn").style.visibility="hidden"
  document.getElementById("montlyCartoonDiv-btn").style.visibility="hidden"
}
$("#start-piano").click(() => {
  let selectedOption= $("select#dropdown-menu").find(":selected");
  let dataDescription = selectedOption.attr("data-description");
  localStorage.setItem("selectedSongDescription",dataDescription);
let songSelect = $("select#dropdown-menu").val();
localStorage.setItem("selectedSong", songSelect);
window.location.href = "Piano.html";
});
