var isAutoPlay = async (audio) => {
	try {
		await audio.play();
		console.log("auto play successed");
		return true;
	} catch {
		console.log("auto play failed");
	}
	return false;
}

function isLoading() {
	var target = document.querySelector('.loading-ui-header');
	if (target) {
		if (target.textContent.includes('Loading')) {
			console.log('found you');
			return true;
		}
		console.log('found the target, not in loading stage yet');
	} else console.log('cant find the targeting element');
	return false;
}

async function main() {
	var blankAudio = "https://github.com/truong0235/GeforceNow-web-script/raw/refs/heads/main/audio/30_seconds_of_silence.mp3";
	var alertAudio = "https://github.com/truong0235/GeforceNow-web-script/raw/refs/heads/main/audio/Usagi_Flap.ogg";
	var audio1 = new Audio(blankAudio);
	var audio2 = new Audio(alertAudio);
	audio1.loop = true;
	var handleAutoPlay = setInterval(async () => {
		if (await isAutoPlay(audio1)) {
			clearInterval(handleAutoPlay);
			var handleLoading = setInterval(() => {
				if (isLoading()) {
					clearInterval(handleLoading);
					audio2.play();
					setTimeout(() => {
						alert('XD');
						audio2.pause();
					}, 2000);
				}
			}, 1500);
		}
	}, 3000);
}
main();
