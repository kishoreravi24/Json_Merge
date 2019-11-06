var fs = require('fs');
var path = require('path');
const directory = path.join(__dirname,'input_json');
fs.readdir(directory,(err,data)=>{
    var result=[];
    var result1,result2;
    if(err){
        console.log("Error, can't read files in directory");
    }else{
        for(var i=0;i<data.length;i++)
        {
            var json=JSON.parse(fs.readFileSync(`${__dirname}/input_json/${data[i]}`));
             result1 = Object.keys(json)[0];
            result.push(json);
        }
    }
    var O={};
    var key = result1;
    O[key] = [];
    result.forEach((item)=>{
        result2 = item[Object.keys(item)[0]].length;
        if(result2==1){
            O[key].push(item[Object.keys(item)[0]]);   
        }else{
                for(var i =0; i<result2-1;i++)
            {
                O[key].push(item[Object.keys(item)[i]]);
            }
        }
    })
    fs.writeFileSync(`${__dirname}/output_json/merge1.json`,JSON.stringify(O),(err)=>{
        if(err){
            console.log("Error");
        }
    })
})