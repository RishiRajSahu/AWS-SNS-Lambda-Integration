/**
 * Handler for teams events
 */

module.exports.handler = async event => {
  try {
    if (event && event.Records && event.Records[0] && event.Records[0].Sns) {
      var body = JSON.parse(event.Records[0].Sns.Message)
      console.log('Body : ', body)
    }
  } catch (e) {
    console.log(e)
  }
}
