
// const mongoose = require('mongoose');


// const connectDB = async ()=>{
//     try {
//         await mongoose.connect(
//             process.env.uri,
//          //  {useNewUrlParser: true}
//             )
//             console.log('mongoose connection open')
//     } catch (error) {
//         console.log(error.message)
//     }
// }

  


//  module.exports = connectDB ;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1); // সার্ভার বন্ধ করুন
  }
};

module.exports = connectDB;