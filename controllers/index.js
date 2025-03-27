const catchAsyncError = require('../middlewares/catchAsyncError')

exports.Pong = catchAsyncError( async (req, res) => {
   console.log("Pong");
   return res.status(200).json({
     "message" : "Pong"
   })
})