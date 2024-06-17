const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let hour = 0;
let min = 0;
let seg = 0;
let count = 0;

startBtn.addEventListener('click', function(){
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function(){
    timer = false;
});

resetBtn.addEventListener('click', function(){
    timer = false;
    hour = 0;
    min = 0;
    seg = 0;
    count = 0;
    
    document.getElementById('hora').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('seg').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch(){
    if(timer){
        count++;

        if(count == 100){
            seg++;
            count = 0;
        }
        if(seg == 60){
            min++;
            seg = 0;
        }
        if(min == 60){
            hour++;
            min = 0;
            seg = 0; 
        }

        let hrString = hour; 
        let minString = min; 
        let segString = seg; 
        let countString = count;

        if(hour < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(seg < 10){
            segString = "0" + segString;
        }
        if(count < 10){
            countString = "0" + countString;
        }

        document.getElementById('hora').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('seg').innerHTML = segString; 
        document.getElementById('count').innerHTML = countString; 
        
        setTimeout(stopWatch, 10); 

    }
}