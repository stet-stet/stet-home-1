const ejs = require("ejs")

categoryNames=["Profile","Works","Contact"];

exports.textData = {
    title:"Stet's HALT status",
    status:[
      {name:"hungry", letter:"H", state: true},
      {name:"angry", letter:"A", state: false},
      {name:"lonely", letter:"L", state: false},
      {name:"tired", letter:"T", state: false},
    ]
};