export default function RPSRecords(props) {
	let total = 0;
    let percent = 0;
    if(props.records.length == 0 ){
        props.percentage = 0;
    }else {
       alert("inside if loop")
		for(let i=0;i<props.records.length;i++){
        console.log("inside for loop")  
		if(props.records[i].result=="Win"){
	         alert("inside if");
	         total = total+1;
    }
        percent = (total/props.records.length*100)
        
    }} 
	
  return (
    <div>
      <p>Rounds:<span>Win % {percent.toFixed(2)}%</span></p>
      <ol>
        {props.records.map(function (record) {
           return <li>
            {record.result} ({record.move})
          </li>;
        })}
      </ol>
    </div>
  );
}
