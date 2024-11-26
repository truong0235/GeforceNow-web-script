//todo: 
//convert it into bookmarklet
//post it to github
//change the audio source
//learn js more and touch grass



//check if the browser allows autoplay or not
//---old code from me
// async function isAutoPlay(audio) {
//     return audio.play().then(() => {
//         console.log("auto play successed");
//         return true; 
//     }).catch((error) => {
//         console.log("auto play failed")
//         return false; 
//     });
// }
//

//new line, suggested by ballkicker, discord kqm
const isAutoPlay = async (audio) => {
    try {
      await audio.play();
      console.log("auto play successed");
      return true;
    } catch {
      console.log("auto play failed");
      return false;
    }
  }
  
  async function main() {
      var blankAudio = "https://github.com/truong0235/GeforceNow-web-script/raw/refs/heads/main/audio/30_seconds_of_silence.mp3";
      var alertAudio = "https://github.com/truong0235/GeforceNow-web-script/raw/refs/heads/main/audio/Usagi_Flap.ogg";
      headerElement = document.querySelector('.font-header4');
      var audio1 = new Audio(blankAudio); 
      var audio2 = new Audio(alertAudio);
      audio1.loop = true;
      var flagCanAutoPlay = false;
      const checkAutoplay = setInterval(async () => {
        const temp = await isAutoPlay(audio1);
        if (temp) {
          flagCanAutoPlay = true;
          audio1.play();
          clearInterval(checkAutoplay);
        }
      }, 2000);
      const checkLoadingElement = setInterval(() =>{
        if (flagCanAutoPlay){
          if (headerElement !== null){
            audio2.play();
            setTimeout(() => {
              alert("XD");
              setTimeout(() => {
              audio2.pause();
                },2000);
            }, 2000);
            clearInterval(checkLoadingElement);
          }
          console.log("checking element");
          headerElement = document.querySelector('.font-header4');
        }
      }, 2000 );
  }
  main();
  
