

 
     
       // Set the date we're counting down to
       var countDownDate = new Date("July 5, 2022 15:37:25").getTime();
       
       // Update the count down every 1 second
       var x = setInterval(function() {
       
         // Get today's date and time
         var now = new Date().getTime();
           
         // Find the distance between now and the count down date
         var distance = countDownDate - now;
           
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
           
         // Output the result in an element with id="demo"
         document.getElementById("demo").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";

         document.getElementById("demo2").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo3").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo4").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo5").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo6").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo7").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo8").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo9").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo10").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo11").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
         document.getElementById("demo12").innerHTML =  hours + ": "
         + minutes + ": " + seconds + " ";
        
        
           
         // If the count down is over, write some text 
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("demo").innerHTML = "EXPIRED";
           document.getElementById("demo2").innerHTML = "EXPIRED";
           document.getElementById("demo3").innerHTML = "EXPIRED";
           document.getElementById("demo4").innerHTML = "EXPIRED";
           document.getElementById("demo5").innerHTML = "EXPIRED";
           document.getElementById("demo6").innerHTML = "EXPIRED";
           document.getElementById("demo7").innerHTML = "EXPIRED";
           document.getElementById("demo8").innerHTML = "EXPIRED";
           document.getElementById("demo9").innerHTML = "EXPIRED";
           document.getElementById("demo10").innerHTML = "EXPIRED";
           document.getElementById("demo11").innerHTML = "EXPIRED";
           document.getElementById("demo12").innerHTML = "EXPIRED";
          
         }
       }, 1000);
     

//For demo1

  // Set the date we're counting down to
  var countDownDate = new Date("July 7, 2022 21:59:25").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML =  hours + ": "
    + minutes + ": " + seconds + " ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo1").innerHTML = "EXPIRED";
    }
  }, 1000);
 
  //for live chat
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

     


        