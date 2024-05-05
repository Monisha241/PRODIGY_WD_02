let startBtn = document.getElementById('start'); 
        let stopBtn = document.getElementById('stop'); 
        let resetBtn = document.getElementById('reset'); 
        let lapBtn = document.getElementById('lap'); 
        let clearLapsBtn = document.getElementById('clearLaps'); 

        let hour = 0;
        let minute = 0; 
        let second = 0; 
        let count = 0; 
        let timer;
        let lapCounter = 1; 

        startBtn.addEventListener('click', function () { 
            timer = true; 
            stopWatch(); 
        }); 
  
        stopBtn.addEventListener('click', function () { 
            timer = false; 
        }); 
  
        resetBtn.addEventListener('click', function () { 
            timer = false; 
            hour = 0; 
            minute = 0; 
            second = 0; 
            count = 0; 
            lapCounter = 1; // Reset lap counter
            document.getElementById('hr').innerHTML = "00"; 
            document.getElementById('min').innerHTML = "00"; 
            document.getElementById('sec').innerHTML = "00"; 
            document.getElementById('count').innerHTML = "00"; 
            document.getElementById('lapTimes').innerHTML = ""; // Clear lap times
        }); 

        lapBtn.addEventListener('click', function () { // Event listener for lap button
            if (timer) {
                displayLapTime(); // Call function to display lap time
            }
        });

         clearLapsBtn.addEventListener('click', function () { // Event listener for clear laps button
            document.getElementById('lapTimes').innerHTML = ""; // Clear lap times
            lapCounter = 1; // Reset lap counter
        });

        function displayLapTime() {
            let lapTime = document.createElement('p');
            lapTime.textContent = "Lap " + lapCounter + ": " + hour + "h " + minute + "m " + second + "s " + count;
            document.getElementById('lapTimes').appendChild(lapTime);
            lapCounter++;
        }
  
        function stopWatch() { 
            if (timer) { 
                count++; 
                if (count == 100) { 
                    second++; 
                    count = 0; 
                } 
                if (second == 60) { 
                    minute++; 
                    second = 0; 
                } 
                if (minute == 60) { 
                    hour++; 
                    minute = 0; 
                    second = 0; 
                } 
                let hrString = hour; 
                let minString = minute; 
                let secString = second; 
                let countString = count; 
  
                if (hour < 10) { 
                    hrString = "0" + hrString; 
                } 
                if (minute < 10) { 
                    minString = "0" + minString; 
                } 
                if (second < 10) { 
                    secString = "0" + secString; 
                } 
                if (count < 10) { 
                    countString = "0" + countString; 
                } 
                document.getElementById('hr').innerHTML = hrString; 
                document.getElementById('min').innerHTML = minString; 
                document.getElementById('sec').innerHTML = secString; 
                document.getElementById('count').innerHTML = countString; 
                setTimeout(stopWatch, 10); 
            } 
        }