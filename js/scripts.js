var pingPonged = []

function pingPongIt(inputNumber) {
  for (var number = 1; number <= inputNumber; number++) {
    if (number % 15 === 0) {
      pingPonged.push("pingpong")
    } else if (number % 3 === 0) {
      pingPonged.push("ping")
    } else if (number % 5 === 0) {
      pingPonged.push("pong")
    } else {
      pingPonged.push(number)
    }
  }
}


$(document).ready(function() {
  $("form#pingPongInput").submit(function(event) {
    $("#btnSubmit").toggle()
    $("#btnClear").show()
    event.preventDefault()
    var inputNumber = parseInt($("input#inputNumber").val())
    pingPongIt(inputNumber)
    pingPonged.forEach(function(inputNumber) {
      $("#results").append("<li>" + inputNumber + "</li>").addClass('blue')
    })

    })
  })
})
