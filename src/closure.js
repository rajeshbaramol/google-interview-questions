// https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703

const arr = [10, 12, 15, 21];

export const ex1 = () => {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log("Index: " + i + ", element: " + arr[i]);
    }, 3000);
  }
};

export const ex1_1 = () => {
  for (var i = 0; i < arr.length; i++) {
    // pass in the variable i so that each function
    // has access to the correct index
    setTimeout(
      (j => {
        return () => {
          console.log("> Index: " + j + ", element: " + arr[j]);
        };
      })(i),
      3000
    );
  }
};

export const ex1_2 = () => {
  for (let i = 0; i < arr.length; i++) {
    // using the ES6 let syntax, it creates a new binding
    // every single time the function is called
    // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
    setTimeout(() => {
      console.log("> Index: " + i + ", element: " + arr[i]);
    }, 3000);
  }
};

/////////////////////////////////////////////////////////////////////////
