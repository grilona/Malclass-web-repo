
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
var router = express.Router();
var os = require('os');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multer  = require('multer');
const upload = multer({ dest: os.tmpdir() });


app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

// API calls

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api", (req, res) => {
  res.json({ message: "Test" });
}); // Test


app.post('/api/uploadfile', cors(), function (req, res) {
  const title = req.body;
  const file = req.size;

  // console.log(req.get('content-type'));

  console.log(res);
  console.log(req);
  
});












