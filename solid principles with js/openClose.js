// O => open for new features close for modifications

class ChooseQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestion() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1} - ${option}`);
    });
  }
}

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestion() {
    console.log("1- true");
    console.log("2- false");
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestion() {
    console.log("Answer ----------------");
  }
}

let questions = [
  new BooleanQuestion("do you like programming?"),
  new ChooseQuestion("what is your fav programming language?", [
    "JS",
    "python",
    "C++",
  ]),
  new TextQuestion("what is SOLID Princibles"),
];

function printQues(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestion();
  });
}

class NewFeature {
  constructor(description) {
    this.description = description;
  }
  printQuestion() {
    console.log("NewFeature ---------");
  }
}

questions.push(new NewFeature("this is my new feature added not modificated"));
printQues(questions);
