const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://soniakther10:Akther%402026@cluster0.noypcmq.mongodb.net/databasesni?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('CONNECTED'))
  .catch((err) => console.log(err));