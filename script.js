function func() {
  // intializing elements
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("box-1").value;
  b2 = document.getElementById("box-2").value;
  b3 = document.getElementById("box-3").value;
  b4 = document.getElementById("box-4").value;
  b5 = document.getElementById("box-5").value;
  b6 = document.getElementById("box-6").value;
  b7 = document.getElementById("box-7").value;
  b8 = document.getElementById("box-8").value;
  b9 = document.getElementById("box-9").value;

  // Checking if Player X won
  if (b1 == "X" && b2 == "X" && b3 == "X") {
    Disable_other_Boxes_for_X([1, 2, 3], [4, 5, 6, 7, 8, 9]);

  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    Disable_other_Boxes_for_X([1, 4, 7], [2, 3, 5, 6, 8, 9]);

  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    Disable_other_Boxes_for_X([7, 8, 9], [1, 2, 3, 4, 5, 6]);

  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    Disable_other_Boxes_for_X([3, 6, 9], [1, 2, 4, 5, 7, 8]);

  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    Disable_other_Boxes_for_X([1, 5, 9], [2, 3, 4, 6, 7, 8])

  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    Disable_other_Boxes_for_X([3, 5, 7], [1, 2, 4, 6, 8, 9])

  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    Disable_other_Boxes_for_X([2, 5, 8], [1, 3, 4, 6, 7, 9])

  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    Disable_other_Boxes_for_X([4, 5, 6], [1, 2, 3, 7, 8, 9])
  }

  // Checking of Player 0 finish
  else if (b1 == "0" && b2 == "0" && b3 == "0") {
    Disable_other_Boxes_for_O([1, 2, 3], [4, 5, 6, 7, 8, 9])

  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    Disable_other_Boxes_for_O([1, 4, 7], [2, 3, 5, 6, 8, 9])
      ;
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    Disable_other_Boxes_for_O([7, 8, 9], [1, 2, 3, 4, 5, 6])

  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    Disable_other_Boxes_for_O([3, 6, 9], [1, 2, 4, 5, 7, 8])

  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    Disable_other_Boxes_for_O([1, 5, 9], [2, 3, 4, 6, 7, 8])

  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    Disable_other_Boxes_for_O([3, 5, 7], [1, 2, 4, 6, 8, 9])

  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    Disable_other_Boxes_for_O([2, 5, 8], [1, 3, 4, 6, 7, 9])

  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    Disable_other_Boxes_for_O([4, 5, 6], [1, 2, 3, 7, 8, 9])

  } else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("winner").innerHTML = " Unfortunately Match Tie ";
    // window.alert("Match Tie");

  } else {
    document.getElementById("display-player").innerHTML =
      flag === 1 ? "player X Turn" : "Player O Turn";
  }
}



// function for player x
function Disable_other_Boxes_for_X(num1, num2) {
  let i;
  document.getElementById("winner").innerHTML = "Player X won";
  for (i of num2) {
    document.getElementById(`box-${i}`).disabled = true;
  }
  for (i of num1) {
    document.getElementById(`box-${i}`).style.backgroundColor = "green";
  }
  // window.alert(" X Player won");
  document.getElementById('display-player').innerHTML = "Congratulations player X"
}


// function for player O
function Disable_other_Boxes_for_O(num1, num2) {
  let i;
  document.getElementById("winner").innerHTML = "Player O won";
  for (i of num2) {
    document.getElementById(`box-${i}`).disabled = true;
  }
  for (i of num1) {
    document.getElementById(`box-${i}`).style.backgroundColor = "green";
  }
  // window.alert(" O Player won");
  document.getElementById('display-player').innerHTML = "Congratulations Player 0"
}


// common function for all functions 
let flag = 1
function myfunc(box_num) {
  if (flag == 1) {
    document.getElementById(`box-${box_num}`).value = "X";
    document.getElementById(`box-${box_num}`).disabled = true;
    flag = 0;
  } else {
    document.getElementById(`box-${box_num}`).value = "0";
    document.getElementById(`box-${box_num}`).disabled = true;
    flag = 1;
  }
}


// Function to reset game
function reset() {
  location.reload();
}

