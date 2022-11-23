export default function RPSRecords(props) {
  return (
    <div>
      <p>Rounds:</p>
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
