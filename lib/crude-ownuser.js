/*
 * Crude Own User
 * Enforces own user policies to CRUD OPs
 * https://github.com/thanpolas/crude-ownuser
 *
 * Copyright (c) 2014 Thanasis Polychronakis
 * Licensed under the MIT license.
 */

/**
 * @fileOverview crude-ownuser Base.
 *
 */

var appErr = require('nodeon-error');
appErr.setName('CrudeOwnUser');

/**
 * The main bootstrap function.
 *
 * @param {Crude} crude a Crude instance.
 * @param {Object} options a hash of options:
 *     @param {string} expressUdoAttribute Where to expect the User Data Object
 *         on the Express Request Object.
 *     @param {string} expressUdoIdAttribute The attribute representing the
 *         User Id on the Express Request Object.
 *     @param {string} schemaUserId How the user id attribute is named on the model.
 */
var ownuser = module.exports = function(crude, options) {
  this.opts = options;
  crude.readOne.use(ownuser._ensureAuthed);
  crude.readList.use(ownuser._ensureAuthed);
  crude.update.use(ownuser._ensureAuthed);
  crude.delete.use(ownuser._ensureAuthed);

  crude.readOneQuery.use(ownuser._applyQuery);
  crude.readListQuery.use(ownuser._applyQuery);
  crude.updateQuery.use(ownuser._applyQuery);
  crude.deleteQuery.use(ownuser._applyQuery);

};

/**
 * Ensures client is authenticated.
 *
 * @param {Object} req The Request express object.
 * @param {Object} res The Response express object.
 * @param {Function} next Pass controll to next middleware.
 * @private
 */
ownuser._ensureAuthed = function(req, res, next) {
  if (typeof req[this.opts.expressUdoAttribute] !== 'object') {
    var error = new appErr.Authentication('Not Authenticated');
    res.status(401);
    next(error);
  } else {
    next();
  }
};

/**
 * Apply own user policy to the query to be performed.
 *
 * @param {Object} query The query to perform.
 * @param {Object} req The Request express object.
 * @private
 */
ownuser._applyQuery = function(query, req) {
  query[this.opts.schemaUserId] =
    req[this.opts.expressUdoAttribute][this.opts.expressUdoIdAttribute];
};
