import { TitleLi } from "./Hobby";
import Hello from "./Hello";

function Age(props) {
  return (
    <div>
      <TitleLi
        title="Age"
        text={(props.value >= 18 ? "" : "🔞") + props.value}
        isHidden={false}
      ></TitleLi>
    </div>
  );
}

export default Age;
