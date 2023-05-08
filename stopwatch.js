const sw = new Stopwatch()

function Stopwatch(){
	this.duration = 0
	let startTime = 0
	this.start = function() {
		if(startTime>0){
			throw new Error('Stopwatch has already started.')
		}
		startTime = Date.now()
        console.log(startTime)
	},
	this.stop = function() {
		if(this.duration>0){
			throw new Error("Stopwatch is not started")
		}
		this.duration = (Date.now() - startTime)/1000


	},
	this.reset = function() {
		if(this.duration===0 || startTime===0){
			throw new Error("You cannot reset nothing")
		}
		this.duration = 0
		startTime = 0
		//stop counting
		//can't stop twice in a row; already stopped therefore its not stopped
	}
}
