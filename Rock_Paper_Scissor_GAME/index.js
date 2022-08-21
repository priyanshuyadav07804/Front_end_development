function Rock(){
    var com ,you = "Rock";
    var a = ["Paper","Scissor"];
    var r = Math.floor(Math.random() * a.length);
    com = a[r];
    if(you == "Rock" && com == "Scissor"){
      alert("WOW! You have Won the game.\n\nyour choice = "+you+" & computer choice = "+com)
      
    }
    else if(you == "Rock" && com == "Paper"){
      alert("Oho! You have Lost the game.\n\nyour choice = "+you+" & computer choice = "+com)
    }
  }
  function Paper(){
    var com ,you = "Paper";
    var a = ["Rock","Scissor"];
    var r = Math.floor(Math.random() * a.length);
    com = a[r];
    if(you == "Paper" && com == "Rock"){
      alert("WOW! You have Won the game.\n\nyour choice = "+you+" & computer choice = "+com)
    }
    else if(you == "Paper" && com == "Scissor"){
      alert("Oho! You have Lost the game.\n\nyour choice = "+you+" & computer choice = "+com)
    }
  }
  function Scissor(){
    var com ,you = "Scissor";
    var a = ["Rock","Paper"];
    var r = Math.floor(Math.random() * a.length);
    com = a[r];
    if(you == "Scissor" && com == "Paper"){
      alert("WOW! You have Won the game.\n\nyour choice = "+you+" & computer choice = "+com)
    }
    else if(you == "Scissor" && com == "Rock"){
      alert("Oho! You have Lost the game.\n\nyour choice = "+you+" & computer choice = "+com)
    }
  }
