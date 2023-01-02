import path from 'path'
import express from 'express'
import { MongoClient } from 'mongodb'
import template from './../template'
//comment out before building for production
import devBundle from './devBundle'

const app = express()
//comment out before building for production
devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

/* 
Database Connection URL must be entered here 
*/
const url = process.env.MONGODB_URI || 'Please Enter Your MongoDB URL here'
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
  console.log("Connected successfully to MongoDB")
  db.close()
})
