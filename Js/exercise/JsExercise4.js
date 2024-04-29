let i = 0
 let interval = setInterval(() => {
       i++
       console.log(i)
       if(i === 10){
            clearInterval(interval);
       }
    }, 2000);


    

