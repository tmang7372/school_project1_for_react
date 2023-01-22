import { TitleLi } from "../Practical 3/Hobby";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MovePage(props) {
    const params = useParams();

    const records = useSelector(function (state) {
        return state.record.value;
    });
    return (
        <div>
            <ul>
                {/* <TitleLi title="Move #" text={999}></TitleLi>
                <TitleLi title="Move" text={'Rock'}></TitleLi>
                <TitleLi title="Result" text={'Win'}></TitleLi> */}
                <TitleLi title="Move #" text={params.moveId}></TitleLi>
                <TitleLi title="Move" text={records[params.moveId-1].move}></TitleLi>
                <TitleLi title="Result" text={records[params.moveId-1].result}></TitleLi>
            </ul>
        </div>
    );
}
