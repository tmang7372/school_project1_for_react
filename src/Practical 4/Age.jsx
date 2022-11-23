import { TitleLi } from "./TitleLi";
import Hello from "../Practical 2/Hello";

function Age(props) {
  const [isHidden,setIsHidden] = React.useState(true);
  const emoji = props.value >= 18 ? ' ':'🔞'
  return (
    <div>
      <TitleLi
        title="Age"
        text={emoji + props.value}
        isHidden={isHidden} onMouseEnter = {function(){setIsHidden(false);}}  onMouseLeave={function() {
          setIsHidden(true);
        }}
         ></TitleLi>
    </div>
  );
}

export default Age;
