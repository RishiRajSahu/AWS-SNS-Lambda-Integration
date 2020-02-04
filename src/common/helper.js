const AWS = require('aws-sdk')

/**
 * Returns an instance of the sns client
 */
function getSnsClient () {
  return new AWS.SNS({
    region: process.env.SNS_REGION
  })
}

/**
 * Creates an arn from topic name
 * @param {String} topic
 */
function getArnForTopic (topic) {
  return `arn:aws:sns:${process.env.SNS_REGION}:${process.env.SNS_ACCOUNT_ID}:${topic}`
}

module.exports = {
  getSnsClient,
  getArnForTopic
}
