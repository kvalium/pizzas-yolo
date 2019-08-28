/**
 * Custom error boundary backend call
 *
 * @param {Error} err Triggered error
 * @param {String} info Info message
 */
const logErrorToMyService = (err, info) => {
  console.log(`ERROR SERVICE NOTIFIED: ${err}: ${info}`);
};

export default logErrorToMyService;
