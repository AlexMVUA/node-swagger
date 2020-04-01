'use strict';


/**
 * Add a new user
 *
 * body User User object that needs to be added
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds User by login and limiting returned quantity
 * Multiple users mached with provided login substring and limited by quantity
 *
 * login String Login substring considered for searching exiting users (optional)
 * limit Integer Auto suggested users maximum quanity (optional)
 * returns List
 **/
exports.getAutoSuggestUsers = function(login,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 111,
  "name" : "secondUser",
  "age" : 23,
  "isDeleted" : false,
  "groupId" : "admingroup"
}, {
  "id" : 222,
  "name" : "thirdUser",
  "age" : 29,
  "isDeleted" : false,
  "groupId" : "employee"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing user
 *
 * id Integer User id of the user to update.
 * body User User object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateUser = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user by ID.
 *
 * id Integer User id of the user to delete.
 * no response value expected for this operation
 **/
exports.usersUserIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets a user by ID.
 *
 * id Integer User id of the user to get.
 * no response value expected for this operation
 **/
exports.usersUserIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

