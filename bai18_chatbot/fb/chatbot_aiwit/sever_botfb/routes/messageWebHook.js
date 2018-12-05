const fbMessageHandler = require('../handlers/FBMessageHandler')
module.exports = (request, response) => {
    let body = request.body
    if (body.object == "page") {                    // nếu được gửi từ page mình
        body.entry.forEach(function(entry) {        //
            if (entry.messaging != null) {
                fbMessageHandler(entry.messaging[0])
            }
        })
        response.status(200).end();
    }

}