const ejs = require("ejs")

categoryNames=["Profile","Works","Contact"];

exports.textData = {
    title:"This is an example title",
    category:[
      {name:categoryNames[0],content:`<a href="">${categoryNames[0]}</a>`},
      {name:categoryNames[1],content:`${categoryNames[1]}`},
      {name:categoryNames[2], content:`${categoryNames[2]}`},
    ],
    logo:"Information alone is not enough; we also need the MEANING of that information.",
    content:"Lorem ipsum",
    health:{
      hungry:false,
      angry:false,
      lonely:false,
      tired:false,
    }
  };