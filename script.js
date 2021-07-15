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
  
  `x` will evaluate to 26
  
  //correct output : 26


  //temporary variables (animal is created locally)
  
  function getAnimal() {
    return {
      type: "cat",
      color: "white"
  };
  
  let isMyPet = do {
    let animal = getAnimal():
    (isCat(animal) && isWhite(animal)) || (isDog(animal) && isBlack(animal))
  };

  `isMyPet` will evaluate to true.
    
  //correct output : boolean

  let x = do {
    0;
  }
  What does `x` evaluate to?
    * 0
    * undefined
    * null
    * Error  
    
  //correct output : 0

  let x = do {
    let y = 1;
  };
    
  What does `x` evaluate to?
    * 1
    * undefined
    * null
    * Error
    
  //correct output : early error

  // Want to know how old is my mom going to be this year
    
  function currentYear() {
    return new Date(Date.now()); // 2021
  }

  let countdown = do {
    let yearsLeftOfCoronaVirus = currentYear().getFullYear() - 2060;
    yearsLeftOfCoronaVirus + 1;
  }
  
  What type does `countdown` evaluate to?
    * Number
    * Undefined
    * Null
    * Error
  //correct output : 62

 // ****************************************************************************//
// more complex features

    
    
  (Conditionals // control flow)

  // You have an inquisitive kid asking you questions. They pass you the following code.

  //Can I go to the mall?
  let daytime = true;
   
  let canIGoOutside = do {
    if (daytime) {
      true;
    }
    else {
      false;
    }
  }
  
  What would you expect the result of `canIGoOutside` to be?
    * true
    * false
    * undefined
    * Error
  
    If daytime == false, what would you expect the result of `canIGoOutside` to be?
    * true
    * false
    * undefined
    * Error
  
  //correct answer = boolean

  //Can I buy new shoes?
  let priceShoes = 100;
  let amountBank = 101;
  let BuyShoes = do {
    if (priceShoes < amountBank) {
      true;
    }
  }

  What would you expect the result of `BuyShoes` to be?
    * true
    * false
    * undefined
    * Error

  
  (if they answer error, add a conditional question)
    Can you describe why you think this will be an error?

  (if they answer anything but error, add a conditional question)
  If "priceShoes = 200", What would you expect the result of `BuyShoes` to be?
    * true
    * false
    * undefined
    * Error
  
    (if they answer anything but error, add a conditional question)
      If the result of this expression was an error, would this surprise you?
        * yes
        * no

      Can you describe why?

  // correct answer = error
  // Ask: How would you fix this?

  let hours = 0;
   
  let howLongCanIPlayOutside = do {
    while (hours < 10) {
      hours++;
    }
  };
  
  What would you expect the result of `howLongCanIPlayOutside` to be?
    * Number (9)
    * Undefined
    * Null
    * Error
    * Array ([0,1,2,3,4,5,6,7,8,9])
    * enter an answer
  
  (if they answer `error`, add a conditional question)
    Can you describe why you think this may be an error?
  
  (if they answer anything but error, add a conditional question)
    If the result of this expression was an error, would this surprise you?
      * yes
      * no
      
    Can you describe why?
   
  // next question (!!!!!!!!!! POSSIBLY REMOVE)
      
  // the function "homework" returns true
  // the function "timeForBed" returns true
  
  let canIPlayOutside = do {
    if (homework()) {
      while (!timeForBed()) {
        false;
      }
    } else {
      true;
    }
  };

 What would you expect the result of `canIPlayOutside` to be?
    * a boolean
    * Undefined
    * Null
    * Error
    * Array ([false, false, ..., true])
    * enter an answer
  
  (if they answer `error`, add a conditional question)
    Can you describe why you think this may be an error?
  
  (if they answer anything but error, add a conditional question)
    If the result of this expression was an error, would this surprise you?
      * yes
      * no
      
    Can you describe why?

  // correct answer = error  
   
      
  // parseString is always successful, and returns an object populated with the data fields.
 
  const data = '{"userid": "Jan"}';

  function getUserId(user) {
    let obj = do {
      try {
        parseString(user); // returns { userid: "Jan" }
      } catch {
        return null;
      }
    };
    return obj.userId;
  }

  const output = getUserId(data);

   What would you expect the result of `output` to be?
    * "Jan"
    * Null
    * Undefined
    * Error

  // Someone changed the code! 
  const data = '{"userid": "Jan"}';
   
  function getUserId(user) {
    let obj = do {
      try {
        throw new Error("Oh No!");
      } catch {
        return null;
      }
    };
    return (obj.userId);
  }

  const output = getUserId(data);

   What would you expect the result of `output` to be?
    * "Jan"
    * Null
    * Undefined
    * Error

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

   What can the value of `age` be?
    * 42, 45
    * 42, unknown, 45
    * 45
    * -Infinity

   What would you expect the final result of `maxAge` to be?
    * 42
    * unknown
    * 45
    * -Infinity


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



