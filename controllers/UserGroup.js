'use strict';

var utils = require('../utils/writer.js');
var UserGroup = require('../service/UserGroupService');

module.exports.userGroupsGET = function userGroupsGET (req, res, next) {
  UserGroup.userGroupsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGroupsGroupIdGET = function userGroupsGroupIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  UserGroup.userGroupsGroupIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
