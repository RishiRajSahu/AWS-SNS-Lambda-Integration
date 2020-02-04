const HttpStatus = require('http-status-codes')
const { getSnsClient, getArnForTopic } = require('../common/helper')

module.exports.handler = async event => {
  console.log('Receiver Event : ', event)

  try {
    const response = await publishSnsTopic(event.body)
    console.log('Response : ', response)
    return {
      statusCode: HttpStatus.OK
    }
  } catch (err) {
    console.log('err : ', err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Couldn\'t published the message due to an internal error.'
      })
    }
  }
}

async function publishSnsTopic (data) {
  const params = {
    Message: JSON.stringify(data),
    TopicArn: getArnForTopic(process.env.SNS_LAMBDA_EVENTS_TOPIC)
  }
  const snsClient = getSnsClient()
  return snsClient.publish(params).promise()
}
