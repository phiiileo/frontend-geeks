function Stopwatch (){
    this.duration = 0;
    let i;

    this.start = ()=>{
        i = setInterval(() => {
            console.log(++this.duration)
        }, 1000);
    }

    this.stop = () =>{
     clearInterval(i)
     this.duration = 0
    }
    this.pause = () =>{
        console.log(this.duration)
        clearInterval(i);
    }
    this.reset =  ()=>{
        console.log(this.duration)
    }

    Object.defineProperty(this, "gettime", {
       value: 8
    })
}

const newWatch = new Stopwatch();
newWatch.start();
// newWatch.stop()
setTimeout(()=>newWatch.stop(),5000)
// setTimeout(()=>newWatch.stop(),4000)

// newWatch.reset()
console.log(newWatch.gettime)