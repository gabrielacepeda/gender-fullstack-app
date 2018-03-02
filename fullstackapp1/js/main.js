
document.getElementById("female").onclick = makeReq;
document.getElementById("male").onclick = makeReq2;

function makeReq(){
//var gender = document.getElementById("male").value;
//var gender = document.getElementById("female").value;

  var request = new XMLHttpRequest();
//  request.open('GET', '/api?sex='+male, true);
  request.open('GET', '/api?sex=female', true);


  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("msg").innerHTML = data.msg
        document.getElementById("msg").innerHTML = data.msg


      } else{
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
    buttonClicks();
}

//change color function
function buttonClicks(){
    document.getElementsByTagName("body")[0].style.backgroundColor="pink";
}
function makeReq2(){
//var gender = document.getElementById("male").value;
//var gender = document.getElementById("female").value;

  var request = new XMLHttpRequest();
  request.open('GET', '/api?sex=male', true);
  //request.open('GET', '/api?sex=female', true);


  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("msg").innerHTML = data.msg
        document.getElementById("msg").innerHTML = data.msg


      } else{
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
    buttonClick();
}

//change color function
function buttonClick(){
    document.getElementsByTagName("body")[0].style.backgroundColor="lightblue";
}
