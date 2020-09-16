/**
 * Users.js
 */

module.exports = {
  database: 'mariadb',
  primaryKey: 'user_id'
  , dontUseObjectIds: true
  , attributes: {
    user_id: {
      type: 'number'
      , autoIncrement: true
    }
    , username: {
      type: 'string'
    }
  }

};
