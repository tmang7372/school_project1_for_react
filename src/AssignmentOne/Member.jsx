/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItem,
  showHideItem,
  showSelectMovieForEdit,
  displayHideItem,
  resetShowGenre
} from "../AssignmentTwo/recordSlice";

export default function Member({
  // data,
  // ondeleteHandler,
  // onChangeIdHandler,
  // checkHideShowHandler,
  // onClickShowItemHandler,
  showHideId,
  movietobepinnedid,
  selectToBePinnedHandler,
  resetMoviesToBePinned
}) {
  const dispatch = useDispatch();

  const records = useSelector(function (store) {
    return store.record.value;
  });

  const tableRows = (data) =>
    //Display the movie list in a table
    data.map((info, num) => {
      return (
        info.display && (
          <tr key={info.id}>
            <td
              style={{
                border: "2px solid #696969",
                color: "white",
                textAlign: "center",
              }}
            >
              {info.id}
            </td>
            <td
              style={{
                border: "2px solid #696969",
                color: "white",
                textAlign: "center",
              }}
            >
              {info["movie name"]}
            </td>
            <td
              style={{
                border: "2px solid #696969",
                color: "white",
                textAlign: "center",
                margin: "1px auto",
              }}
            >
              {info.description}
            </td>
            <td style={{ border: "2px solid #696969", color: "white" }}>
              {info.genre}
            </td>
            {info["lead actor"].map((data) => (
              <td style={{ border: "2px solid #696969", color: "white" }}>
                {data}
              </td>
            ))}
            <td
              style={{
                border: "2px solid #696969",
                color: "white",
                textAlign: "center",
              }}
            >
              {info.rating}
            </td>
            <td
              style={{
                border: "2px solid #696969",
                color: "white",
                textAlign: "center",
              }}
            >
              {info.language}
            </td>
            <td style={{ border: "2px solid #696969", textAlign: "center" }}>
              <input
                type={"checkbox"}
                id={"deletemovies"}
                name={"deletemovies"}
                onChange={(event) =>showHideId(event,info.id)}
              ></input>
            </td>
            <td style={{ border: "2px solid #696969", textAlign: "center" }}>
              <input
                type={"checkbox"}
                id={"showHideMovies"}
                name={"showHideMovies"}
                onChange={() => dispatch(displayHideItem(info.id))}
                onClick={(event) =>{showHideId(event,info.id)}}
              ></input>
            </td>
            <td style={{ border: "2px solid #696969", textAlign: "center" }}>
              <input
                type={"checkbox"}
                id={"itemtobeedited"}
                name={"itemtobeedited"}
                onClick={() => dispatch(showSelectMovieForEdit(info.id))}
              ></input>
            </td>
            <td style={{ border: "2px solid #696969", textAlign: "center" }}>
              <input
                type={"checkbox"}
                id={"itemtobepinned"}
                name={"itemtobepinned"}
                onClick={(event) => selectToBePinnedHandler(event,info.id)}
              ></input>
            </td>
          </tr>
        )
      );
    });

  return (
    <div>
      <table
        style={{
          width: "100%",
          marginTop: "50px",
          backgroundColor: "black",
          borderCollapse: "collapse",
        }}
      >
        <thead style={{ border: "2px solid #ea4915" }}>
          <tr>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Id
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Description of Movies
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Genre
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
              colSpan={"2"}
            >
              Actors
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Rating
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Language
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Remove Items
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Hide Items
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Select Items To Be Editted
            </th>
            <th
              style={{
                border: "2px solid #696969",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Select Items To Be Pinned
            </th>
          </tr>
        </thead>
        <tbody>{tableRows(records)}</tbody>
      </table>
      <div className="buttonSeparation">
        <ol
          style={{
            textAlign: "center",
            listStyleType: "none",
            listStylePosition: "inside",
          }}
        >
          <li
            style={{
              border: "2px solid #696969",
              width: "89px",
              listStyle: "none",
              display: "inline-block",
            }}
          >
            <input
              type={"button"}
              onClick={() => dispatch(deleteItem(movietobepinnedid))}
              value={"Delete Items"}
            ></input>
          </li>
          <li
            style={{
              display: "inline-block",
              border: "2px solid #696969",
              width: "135px",
              marginLeft: "10px",
            }}
          >
            <input
              type={"button"}
              value={"Show the hide items"}
              onClick={() =>dispatch(showHideItem(movietobepinnedid))}
            ></input>
          </li>
          <li
            style={{
              display: "inline-block",
              border: "2px solid #696969",
              width: "135px",
              marginLeft: "10px",
              marginRight: "20px",
            }}
          >
            <input
              type={"button"}
              value={"Reset Genre to Normal"}
              onClick={() =>dispatch(resetShowGenre())}
            ></input>
          </li>
          <li
            style={{
              display: "inline-block",
              border: "2px solid #696969",
              width: "135px",
              marginLeft: "10px",
            }}
          >
            <input
              type={"button"}
              value={"Reset Hide and Delete Id"}
              onClick={() =>resetMoviesToBePinned()}
            ></input>
          </li>
        </ol>
      </div>
    </div>
  );
}
