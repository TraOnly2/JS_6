const { rejects } = require("assert");
const { error } = require("console");
const { promises } = require("dns");
const { resolve } = require("path");

const createDatabase = [
    { id: 1, name: 'sok' },
    { id: 2, name: 'sao' },
    { id: 3, name: 'pisey' }
  ];
  
  function getUserByID(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = createDatabase.find(user => user.id === id);
        if (user) {
          console.log("User is", user);
          resolve(user);
        } else {
          reject("User not found");
        }
      }, 2000);
    });
  }


  function Uppercaseletter(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase();
        resolve(user);
      }, 1500);
    });
  }


  function InputData(pushdata){
    return new promises((resolve)=>{
      setTimeout(()=>{
        createDatabase.push(pushdata);
        resolve (pushdata);
      },2000)
    })
  }
  
  function executeAndProcess(userId) {
    getUserByID(userId)
      .then(user => {
        console.log("User found: ", user);
        return Uppercaseletter(user);
      })
      .then(processedUser => {
        console.log("Processed User Data:", processedUser);
        console.log("You finished all the work");
      })
      .catch(error => console.log(error));
  }
  

InputData({id: 4, name: 'Fukada'})
  .then(adduser =>{
    console.log(adduser);
    return InputData({id: 5 , name: 'Okita'})
  })
  .catch(error =>{
    console.log(error);
  })

  // Example usage:
  executeAndProcess(1); // Valid user ID
  executeAndProcess(5); // Invalid user ID
  