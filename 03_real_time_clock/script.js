    // const clock = document.getElementById('#clock')       //we can also use query selector
    // // const clock = document.querySelector('#clock')          

    // // let date = new Date()
    // // console.log(date.toLocaleTimeString());

    // setInterval(function () {                                 //it will run continuously after every 1 sec
    //     let date = new Date();
    //     // console.log(date.toLocaleTimeString());
    //     clock.innerHTML = date.toLocaleTimeString();
    //     // clock.innerText = date.toLocaleTimeString()
    // },1000);

    let clock = document.getElementById("clock");
    if (clock) {
      let updateTime = function() {
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
        setTimeout(updateTime, 1000);
      };
      updateTime();
    }