const sw = new Stopwatch()

function Stopwatch(){
	let duration = 0
	let startTime = 0
	this.start = function() {
		if(startTime>0){
			throw new Error('Stopwatch has already started.')
		}
		startTime = Date.now()
        console.log(startTime)
	},
	this.stop = function() {
		if(duration>0){
			throw new Error("Stopwatch is not started")
		}
		duration = (Date.now() - startTime)/1000


	},
	this.reset = function() {
		if(duration===0 || startTime===0){
			throw new Error("You cannot reset nothing")
		}
		duration = 0
		startTime = 0
	}

	Object.defineProperty(this, 'duration',{
		get: function() { return duration; }
	} )
}
