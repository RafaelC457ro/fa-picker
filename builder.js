var fs = require('fs');
var path = require('path');

var font = path.resolve(
  __dirname,
  './node_modules/font-awesome/css/font-awesome.css'
)
var dest = path.resolve(
  __dirname,
  './src/fa.json'
)


fs.readFile(font,(error, data) =>{
  let result,matches,list = [];
  const re = /(fa-[A-Za-z-]+):before/g;

  while(matches = re.exec(data)){
    list.push(matches[1]);
  }

  result = JSON.stringify(list,null,2);

  fs.writeFile(dest,result,'utf8',(err)=>{
    if (err) throw err;
    console.log('The data has been generated successfuly!');
  });

})
