'use strict';

Preparation {

  // Introducing Myself
  // Ask for consent for recording the session

  // Explain what we will do {

  //Introducing new feature
  //We will look at some examples and guess the outcome
  //Explain the completion value
  //Look at the example again
  //One hour meeting to be flexible

  // Get to know the participant {
  //Gender
  //Occupation
  //Year of experience
  //Education background
}

// ****************************************************************************//
// ****************************************************************************//

// (loop)

// What do you think the intention of this code is?

// What value does this variable have after this code runs

// Can you describe the steps you expect to be performed?
Examples{

  let x = do {
    let tmp = 5;
    tmp * tmp + 1
  };
  //correct output : 26


  //temporary variables (animal is created locally)
  let isMyPet = do {
    let animal = getAnimal():
    (isCat(animal) && isWhite(animal)) || (isDog(animal) && isBlack(animal))
  };
  //correct output : boolean

  let x = do {
    let y = 1;
  };
  //correct output : early error

  let x = do {
    0;
  }
  //correct output : 0

  // Want to know how old is my mom going to be this year
  let age = do {
    let myMomsAge = currentYear() - 1960
    myMomsAge + 1;
  }
  //correct output : 62

 // ****************************************************************************//


  (Conditionals // control flow)

  const blob = '{"userid":Jan, "age":42}';

  function getUserId(blob) {
    let obj = do {
      try {
        JSON.parse(blob)
      } catch {
        return null;
      }
    };
    return (obj.userId);
  }
  //correct output : Jan

  function getUserId(blob) {
    let obj = do {
      try {
        throw "woops";
      } catch {
        return null;
      }
    };
    return (obj.userId);
  }
  // correct output : null


  let people = [
    { name: 'Alice', age: '42' },
    { name: 'Bob', age: 'unknown' },
    { name: 'Carol', age: '45' },
  ];
  let maxAge = -Infinity;
  for (let person of people) {
    let age = do {
      if (person.age == 'unknown') {
        continue;
      }
      parseInt(item.age)
    };
    if (age > maxAge) {
      maxAge = age;
    }
  }



  //How many shoes do I have
  let AmountOfShoes = do {
    while (ShoeRack != 0) {
      ShoeRack--;
      let x = x + 1;
    }
  };
  // correct output : error
  // with this question, we want to understan how people will interpret this step. It is less
  // interesting if they get it right or wrong.
  // Ask: How would you fix this?

  // Can I play outside?
  let playOutside = do {
    if (homework()) {
      while (!timeToBed()) {
        true;
      }
    } else {
      false;
    }
  };
  // correct answer = error
  // this is quite similar to above, but in a nested statement.
  // Ask: how would you fix this?

  //Can I go to the mall?
  let goMall = do {
    if (mallOpen) {
      true;
    }
    else {
      false;
    }
  }
  //correct answer = boolean

  //Can I buy new shoes?
  let BuyShoes = do {
    if (priceShoes < amountBank) {
      true;
    }
  }
  // correct answer = error
  // Ask: How would you fix this?


}
// ****************************************************************************//
// ****************************************************************************//


// You've had a tour of the proposal, along with some of its corner cases. Would you use it in your
// code?
//    if yes: Where would you use it?
//    if no: Can you tell me a bit about what would stop you from using it?


// *****************************************************************************//
// *****************************************************************************//


// Can you explain how you normally search for a new JavaScript feature that you encounter while
// reading code?

// What would you search for if you want to know more about this expression?

// *****************************************************************************//
// *****************************************************************************//

// Explain: In one sentence. What is a completion value in the context of a do expression!
//    Yulia's description:
  //    A completion value is the value that is returned when a statement completes. Sometimes this
  //    contains a value but not always. You might be familiar with this when you are assigning an expression.
  //    For example:
  //        let foo = 1; // the completion value here will be undefined
  //    alternatively:
  //        1; // the completion value is 1
  //
  //    Completion values are a part of completion records, which include a type (throw, return,
  //    break, continue, and normal). Do expressions make use of normal Completions.
  //
  //    Completion values are currently not exposed in the language, but they are used heavily in the
  //    specification. This proposal exposes them.

// Go over the examples again!

// Did the participant give the same output ? (explain)

// *****************************************************************************//
// *****************************************************************************//


// Are you familiar with Do-while Expression?

// if yes(Did you mistake this expression with the existing do while expression ? )

// if no(Show them an example of do while and see if this creates confusion? )


// *****************************************************************************//
// *****************************************************************************//


// Would you name it the same?

// How would you name it?

// *****************************************************************************//
// *****************************************************************************//



