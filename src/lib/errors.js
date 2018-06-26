function addStack(err) {
  /* istanbul ignore else */
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(err, err.constructor);
  } else if (!!(new Error()).stack) { // eslint-disable-line no-extra-boolean-cast
    err.stack = (new Error()).stack;
  } else {
    err.stack = '';
  }
}

/**
 * FeedError
 * @class FeedError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param {String} message An error message that will probably end up in a log.
 */
class FeedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    addStack(this);
  }
}
/**
 * SiteError
 * @class SiteError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param  {string}  message An error message that will probably end up in a log.
 */
class SiteError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    addStack(this);
  }
}

/**
 * MissingSchemaError
 * @method MissingSchemaError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param  {string} message An error message that will probably end up in a log.
 */
class MissingSchemaError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    addStack(this);
  }
}

/**
 * StreamApiError
 * @method StreamApiError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param  {string} message An error message that will probably end up in a log.
 * @param  {object} data
 * @param  {object} response
 */
class StreamApiError extends Error {
  constructor(message, data, response) {
    super(message);
    this.message = message;
    this.data = data;
    this.response = response;
    addStack(this);
  }
}

module.exports = {
  FeedError,
  SiteError,
  MissingSchemaError,
  StreamApiError
}
