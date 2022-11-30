export default function RBSButton(props){
      const [isHovered, setIsHovered] = React.useState(false);
      const winCount = props.records.filter((record) => record.result === "Win").length; const
      totalCount = props.records.length; 
      let percentage = 0.00;
      if(props.records.length === 0){
        percentage = 0.00;
      }else {
        percentage = winCount / totalCount * 100; 
      }
      	
      return (
        <button onClick={props.onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {props.move} {isHovered && `(${percentage.toFixed(2)}%)`}
        </button>
      )
}