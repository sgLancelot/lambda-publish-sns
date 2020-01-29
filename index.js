const AWS = require('aws-sdk')
const sns = new AWS.SNS()

const params = {
    Message: 'TESTING ZK ZK ZK ZK',
    MessageAttributes: {
      'MsgAttrName': {
        DataType: 'String',
        StringValue: 'String'
      }
    },
    TopicArn: 'arn:aws:sns:ap-southeast-1:735372186971:singtel-cast-monthly' // put topic name here!
}

exports.handler = () => {
    sns.publish(params, (err) => {
        if(err) console.log("FAILED!!!!!!    ERROR IS: ", err, err.stack) // error occured
        else console.log("SUCCESSFUL!!!!!    ") //successful response
    })
}