var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false
	video.loop = false
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.autoplay)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
	video.play()
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .90
	console.log("Speed is ", video.playbackRate)
})

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 1.10 
	console.log("Speed is ", video.playbackRate)
})

document.querySelector('#skip').addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Current time is ", video.currentTime)

})

document.querySelector('#mute').addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == true){
		video.muted = false
		this.innerHTML = "Mute"

		
	} else {
		video.muted = true
		this.innerHTML = "Unmute"
		
	}
})

document.querySelector('#slider').addEventListener("click", function() {
	console.log("Volume");
	video.volume = this.value / 100 
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
})

document.querySelector('#vintage').addEventListener("click", function() {
	console.log("Old School")
	document.querySelector("video").className = "oldSchool"
})

document.querySelector('#orig').addEventListener("click", function() {
	console.log("Original")
	document.querySelector("video").classList.remove("oldSchool")
})