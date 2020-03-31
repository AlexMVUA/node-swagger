'use strict';


/**
 * Gets ALL user groups.
 *
 * returns List
 **/
exports.userGroupsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "admingroup",
  "name" : "admingroup",
  "permissions" : [ "Permission.READ", "Permission.WRITE" ]
}, {
  "id" : "employee",
  "name" : "employee",
  "permissions" : [ "Permission.READ" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a user group by ID.
 *
 * id String UserGroup id of the user to get.
 * returns UserGroup
 **/
exports.userGroupsGroupIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "admingroup",
  "name" : "admingroup",
  "permissions" : [ "Permission.READ", "Permission.WRITE" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

