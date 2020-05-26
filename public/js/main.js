window.onload = async () => {
	const dsp = document.getElementById("dsp");
	dsp.onclick = function() {
		if (dsp.checked) {
			resumeAudio();
			console.log("DSP ON");
			// Module.foo(); // this is how to call an emscripten function called "foo" if it exists 
		}
		else {
			suspendAudio();
			console.log("DSP OFF");
		}
	}
};