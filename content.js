// script for modifies video element on web page
function setPlaybackSpeed(speed){
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.playbackRate = speed
    })
}

//listen for message from the popup
chrome.runtime.onMessage.addListener((request,sender,sendResponse) =>{
    if(request.action === "changeSpeed"){
        setPlaybackSpeed(request.speed)
        sendResponse({status:"Success"})
    }
})