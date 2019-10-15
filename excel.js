  //npm i fs
  //npm install csv-parser

const csv = require('csv-parser');
const fs = require('fs');


var listOfData = [];
var count = 0;

fs.createReadStream('test01.csv')
  .pipe(csv())
  .on('data', (row) => {
   // console.log(row);
	listOfData.push(JSON.stringify(row)); 
	//client.publish('v1/devices/me/telemetry', JSON.stringify(row));
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
	 setInterval(publishData, 1000);
  });
  

  
  
  
function publishData(){
	if(listOfData.length > count){
		console.log('interval data' + listOfData[count]);
		count++;
	}
}
