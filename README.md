# In troduction

This script will help you keep your android browser run in the back ground, and play sound when you start joining the game.

# Usage

## Setup  bookmarklet
1. Create a new bookmark.
2. Copy the code above.
```javascript
javascript:(function() {
    var url = 'https://raw.githubusercontent.com/truong0235/GeforceNow-web-script/refs/heads/main/new-script.js';
    fetch(url)
        .then(response => response.text())
        .then(text => {
            eval(text);
        })
        .catch(error => console.error('Error loading script:', error));
})();

```
3. Go through your bookmark list.
4. Edit your new bookmark:
    - Edit your bookmark name as you like, you will need it when you want to use the script (my_script for example).
    - Change the url to the script you copy above.
5. Save it, and youre done the setup part.

## Use the script
1. Open Geforce Now website on your browser.
2. Tap on the URL bar, type your bookmark name you have set from above step (my_script for example), **click** on the bookmark when you see it.
3. Now you can join the queue, and let your browser run in the background, it will play sound when its end the wait time.
    - To check if the scipt is running or not, look at the notification section on your phone and see if your browser is playing audio or not.
    - To stop the script, simply refresh the tab (i dont have enough skill to make a menu for it).
# Disclaimer

I do not own the audio files [30_seconds_of_silence.mp3](https://www.youtube.com/watch?v=O51uFhJGf5s); [Usagi_Flap.ogg](https://www.youtube.com/watch?v=toPWvdaC84w), if you dont want your resource being used, please let me know by create issue ticket. 
