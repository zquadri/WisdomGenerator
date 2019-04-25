var sad = [
  "Some days are just bad days, that's all. You have to experience sadness to know happiness, and remind yourself that not every day is going to be a good day, that's just the way it is!",
  "The word 'happy' would lose its meaning if it were not balanced by sadness",
  "Worry never robs tomorrow of its sorrow, it only saps today of its joy.",
  "Things change. And friends leave. Life doesn't stop for anybody.",
  "It will never rain roses: when we want to have more roses, we must plant more roses.",
  "Sometimes you've got to be able to listen to yourself and be okay with no one else understanding.",
  "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water. ",
  "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.",
  "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it’s there if you look deep.",
  "Tears are words the mouth can’t say nor can the heart bear."
];

var stressed = [
  "The greatest weapon against stress is our ability to choose one thought over another.",
  "Stress and worry, they solve nothing. What they do is block creativity. You are not even able to think about the solutions. Every problem has a solution. ",
  "Its not stress that kills us, it is our reaction to it.",
  "Rule number one is, don’t sweat the small stuff. Rule number two is, it’s all small stuff.",
  "The more tranquil a man becomes, the greater is his success, his influence, his power for good. Calmness of mind is one of the beautiful jewels of wisdom.",
  "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
  "A diamond is just a piece of charcoal that handled stress exceptionally well",
  "Stress happens when you try to control your life experiences. Relax and remember the only real control you have is over yourself.",
  "Stress is the inability to tell the difference between what is happening and what you think is happening",
  "Trying to be a perfectionist brings increased stress and hinders performance."
];

var angry = [
  "Anger does not solve problems - anger only makes things worse. I go by the old saying, 'Don't make important decisions when you're angry.'",
  "Every time you get angry, you poison your own system.",
  "There are two things a person should never be angry at, what they can help, and what they cannot.",
  "When thou art above measure angry, bethink thee how momentary is man's life."
];

var happy = [
  "Be happy for this moment. This moment is your life.",
  "You might not make it to the top, but if you are doing what you love, there is much more happiness there than being rich or famous.",
  "Happiness radiates like the fragrance from a flower and draws all good things towards you.",
  "Happiness held is the seed; Happiness shared is the flower."
];

var nervous = [
  "Being nervous isn’t bad. It just means something important is happening.     ",
  "Every time you go out there, you want to be a little nervous, have a little bit of butterflies in your stomach and get the juices flowing.",
  "When you feel nervous, recall your pride.",
  "If you're not nervous then you're not paying attention.  ",
  "To show his nervousness was not shameful; only to admit it.  ",
  "You don’t have to control your thoughts. You just have to stop letting them control you.  "
];

var lazy = [
  "Work hard and become a leader; be lazy and never succeed.",
  "A lazy person, whatever the talents with which he starts out, have condemned himself to second-rate thoughts, and to second-rate friends.",
  "Lazy people are always eager to be doing something.  ",
  "The lazy man is apt to be envious.",
  "In doing nothing men learn to do evil.",
  "Towards evening the lazy person begins to get busy."
];

var dropdown = document.getElementById("dropdown");
var headingText = document.getElementById("title");
var instructions = document.getElementById("instructions");
var wisdomButton = document.getElementById("wisdomButton");
var curr = "temp";
var quote = document.getElementById("quote");

dropdown.addEventListener("change", function(event) {
  if (event.target.value == "sad") {
    document.body.style.backgroundColor = "#a29bfe";
    title.style.color = "#fff";
    instructions.style.color = "#fff";
    dropdown.style.color = "#303030";
    dropdown.style.background = "#fff";
    wisdomButton.style.color = "#303030";
    wisdomButton.style.background = "#fff";
    curr = "sad";
  }
  if (event.target.value == "angry") {
    document.body.style.backgroundColor = "#e55039";
    title.style.color = "#fff";
    instructions.style.color = "#fff";
    dropdown.style.color = "#303030";
    dropdown.style.background = "#fff";
    wisdomButton.style.color = "#303030";
    wisdomButton.style.background = "#fff";
    curr = "angry";
  }
  if (event.target.value == "happy") {
    document.body.style.backgroundColor = "pink";
    title.style.color = "#fff";
    instructions.style.color = "#fff";
    dropdown.style.color = "#303030";
    dropdown.style.background = "#fff";
    wisdomButton.style.color = "#303030";
    wisdomButton.style.background = "#fff";
    curr = "happy";
  }
  if (event.target.value == "nervous") {
    document.body.style.backgroundColor = "blue";
    title.style.color = "#fff";
    instructions.style.color = "#fff";
    dropdown.style.color = "#303030";
    dropdown.style.background = "#fff";
    wisdomButton.style.color = "#303030";
    wisdomButton.style.background = "#fff";
    curr = "nervous";
  }
  if (event.target.value == "lazy") {
    document.body.style.backgroundColor = "white";
    title.style.color = "#fff";
    instructions.style.color = "#fff";
    dropdown.style.color = "#303030";
    dropdown.style.background = "#fff";
    wisdomButton.style.color = "#303030";
    wisdomButton.style.background = "#fff";
    curr = "lazy";
  }

  //Math.floor((Math.random() * 10) + 1);
});
var countArray = [];
wisdomButton.addEventListener("click", function(event) {
  if (curr === "sad") {
    while (true) {
      var index = Math.floor(Math.random() * sad.length);
      var newIndex = countArray.find(function(element) {
        return (element = index);
      });
      if (newIndex === index) {
        continue;
      } else {
        newIndex = index;
        countArray.push(newIndex);
        break;
      }
    }
    console.log(newIndex);
    console.log(index);
    quote.textContent = '"' + sad[newIndex] + '"';
  }
  if (curr === "angry") {
    while (true) {
      var index = Math.floor(Math.random() * angry.length);
      var newIndex = countArray.find(function(element) {
        return (element = index);
      });
      if (newIndex === index) {
        continue;
      } else {
        newIndex = index;
        countArray.push(newIndex);
        break;
      }
    }
    console.log(newIndex);
    console.log(index);
    quote.textContent = '"' + angry[newIndex] + '"';
  }
  if (curr === "happy") {
    while (true) {
      var index = Math.floor(Math.random() * happy.length);
      var newIndex = countArray.find(function(element) {
        return (element = index);
      });
      if (newIndex === index) {
        continue;
      } else {
        newIndex = index;
        countArray.push(newIndex);
        break;
      }
    }
    console.log(newIndex);
    console.log(index);
    quote.textContent = '"' + happy[newIndex] + '"';
  }
  if (curr === "nervous") {
    while (true) {
      var index = Math.floor(Math.random() * nervous.length);
      var newIndex = countArray.find(function(element) {
        return (element = index);
      });
      if (newIndex === index) {
        continue;
      } else {
        newIndex = index;
        countArray.push(newIndex);
        break;
      }
    }
    console.log(newIndex);
    console.log(index);
    quote.textContent = '"' + stressed[newIndex] + '"';
  }
  if (curr === "lazy") {
    // var index = 0;
    // quote.textContent = lazy[index];
    // index++;
    while (true) {
      var index = Math.floor(Math.random() * lazy.length);
      var newIndex = countArray.find(function(element) {
        return (element = index);
      });
      if (newIndex === index) {
        continue;
      } else {
        newIndex = index;
        countArray.push(newIndex);
        break;
      }
    }
    console.log(newIndex);
    console.log(index);
    quote.textContent = '"' + lazy[newIndex] + '"';
  }
});
