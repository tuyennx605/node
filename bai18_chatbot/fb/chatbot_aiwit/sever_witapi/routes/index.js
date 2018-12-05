const router = require('express').Router()




const Wit = require('node-wit').Wit
const witClient = new Wit({
    accessToken : 'LHVCVAFG3P3FXXR6JL6EDQABRAPZCL32'
    }
)



/* http://localhost:4000/v1/getEntitiesInfo 
   Method: POST */
router.post('/getEntitiesInfo', (request, response) => {
    var message = request.body.userMessage                 //có 1 cái mesage ngưoi ta vừa gửi lên
    console.log(message);
    
    witClient.message(message, {}).then((returnData) => {       // kết nối với wit để lấy kết quả trả về
        var returnMessage = {
            isSuccess : true,
            message: 'Call Wit.ai successful',
            data: returnData
        }
        response.json(returnMessage)
    }).catch((err) => {
        var returnMessage = {
            isSuccess: false,
            message: err
        }
        response.json(returnMessage)
    })
})

module.exports = router