document.addEventListener("DomContentLoaded", () =>{
    const openVideoButton = document.getElementById("open-video");
    const closeVedioButton = document.getElementById("close-video");
    const videoFrame = document.getElemntById('video-frame');
    const videoPopup = document.getElementById("video-popup");
    
    openVideoButton.addEventListener("click", () =>{
      videoFrame.src = "https://www.youtube.com/embed/Ua14FNE0TrE?autoplay=1";/*replace vedio id*/
      video.style.display = "flex";
    });
    
    closeVedioButton.addEventListener("click", () =>{
       videoFrame.src = "";
      videoPopup.style.display = "none";
    });
    
  //   close popup when clicking outside the vedio content 
    videoPopup.addEventListener("click", (e) => {
      if (e.target === videoPopup){
        videoFrame.src = "";
        videoPopup.style.display = "none";
      }
    })
  })