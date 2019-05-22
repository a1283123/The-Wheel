const mysql = require('mysql')
const express = require('express')
const bodyparser = require('body-parser')
const moment = require('moment-timezone')
const multer = require('multer')
const fs = require('fs')
const cors = require('cors')
const uuidv4 = require('uuid/v4')

var app = express()

// 查看 HTTP HEADER 的 Content-Type: application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// 查看 HTTP HEADER 的 Content-Type: application/json
app.use(bodyparser.json())

var whitelist = [
  'http://localhost:5555',
  'http:// 192.168.1.111:5555',
  undefined,
  'http://localhost:3000',
]
var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    console.log('origin: ' + origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}
app.use(cors(corsOptions))

const upload = multer({ dest: 'tmp_uploads/' })

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'wang',
  password: 'admin',
  database: 'the_wheel',
  multipleStatements: true,
})

mysqlConnection.connect(err => {
  if (!err) console.log('DB connection succeded')
  else
    console.log(
      'DB connection failed \n Error:' + JSON.stringify(err, undefined, 2)
    )
})

//拿到所有商品資料
app.get('/product', (req, res) => {
  mysqlConnection.query('SELECT*FROM prouduct', (err, rows, fields) => {
    if (!err) res.send(rows)
    else console.log(err)
  })
})

app.get('/prouductcarousel', (req, res) => {
  mysqlConnection.query('SELECT*FROM prouductcarousel', (err, rows, fields) => {
    if (!err) res.send(rows)
    else console.log(err)
  })
})

app.get('/member/:id', (req, res) => {
  mysqlConnection.query(
    'SELECT*FROM member WHERE m_sid = ?',
    [req.params.id],
    (err, rows, fields) => {
      // for(let s in rows){
      //     rows[s].m_birthday2=moment(rows[s].m_birthday).format('YYYY-MM-DD');
      // }
      if (!err) res.send(rows)
      else console.log(err)
    }
  )
})

//拿到一個商品的資料
app.get('/product/:id', (req, res) => {
  mysqlConnection.query(
    'SELECT * FROM prouduct WHERE p_sid = ?',
    [req.params.id],
    (err, rows, fields) => {
      
if (!err){
        let photos = JSON.parse(rows[0].p_photo);
        photos = photos.map(val=>{
            return '//localhost:5555/' + val;
        });
        rows[0].photos = photos;
        
        console.log(photos);
        res.send(rows[0]);
      } 
      else console.log(err)

      // if (!err) res.send(rows)
      // else console.log(err)
    
    })
})

app.listen(5555, () => {
  console.log('server running')
})
// if (!err){
//         let photos = JSON.parse(rows[0].p_photo);
//         photos = photos.map(val=>{
//             return 'localhost:5555/' + val;
//         });
//         rows[0].photos = photos;


//         res.send(rows[0]);
//       } 
//       else console.log(err)
//     }