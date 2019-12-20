// ES6 Javascript Promise Sample Script

const promise = new Promise((resolve, reject) => {
  if (10 % 2 === 0) {
    resolve("It worked.");
  } else {
    reject("It rejected.");
  }
});

promise
  .then(value => {
    console.log(value);
  })
  .catch(value => {
    console.log(error);
  });

// Chaining Multiple Promises

const promise1 = new Promise((resolve, reject) => {
  if (10 % 2 === 0) {
    resolve("Then condition is resolved. 10 % 2 is 0");
  } else {
    reject("The condition is rejected. 10 % 2 is 0.");
  }
});

const promise2 = () => {
  return new Promise((resolve, reject) => {
    if (10 % 2 === 0) {
      resolve("Then condition is resolved. 5 % 2 is 1");
    } else {
      reject("The condition is rejected. 5 % 2 is 1.");
    }
  });
};

const promise3 = () => {
  return new Promise((resolve, reject) => {
    if (7 % 2 === 0) {
      resolve("Then condition is resolved. 7 % 2 is 1");
    } else {
      reject("The condition is rejected. 7 % 2 is 1.");
    }
  });
};

promise1
  .then(data => {
    console.log(data);
    return promise2();
  })
  .then(data => {
    console.log(data);
    return promise3();
  })
  .then(data => console.log(data))
  .catch(error => console.log(`Error: ${error}`));

// Use Promise with XMLHttpRequest
const URL = "./promises.json";
const promise4 = new Promise((resolve, reject) => {
  const http = new XMLHttpRequest();
  http.open("GET", url, true);

  http.onload = () => {
    if (http.status === 200) {
      resolve(JSON.parse(http.response));
    } else {
      reject(http.statusText);
    }
  };

  http.send();
});

promise4
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));

// Promise.all() Example
// Each promise will log the data if they are all resolved
// If even a single one is rejected, this will only return the catch statement

Promise.all(promise1, promise2, promise3)
  .then(data => console.log(data))
  .catch(error => console.log(error));
