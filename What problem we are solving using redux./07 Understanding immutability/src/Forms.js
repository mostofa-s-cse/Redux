import React, { useReducer } from "react";
import { initialState, reducer } from "./state/FormReducer";

const Forms = () => {
  

    // if (action.type === "INPUT") {
    //   return {
    //     ...state,
    //     [action.payload.name]: action.payload.value,
    //   };
    // }

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <div className="card">
        <form onSubmit={submit}>
          <label> Firstname </label>
          <input
            type="text"
            name="firstname"
            size={15}
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <br /> <br />
          <label> Lastname: </label>
          <input
            type="text"
            name="lastname"
            size={15}
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <br /> <br />
          <label>Course :</label>
          <select
            name="course"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }>
            <option value="Course">Course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
          </select>
          <br />
          <br />
          <label>Gender :</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />{" "}
          Male <br />
          <input
            type="radio"
            name="gender"
            value="Female"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />{" "}
          Female <br />
          <input
            type="radio"
            name="gender"
            value="other"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />{" "}
          Other
          <br />
          <br />
          <label>Phone :</label>
          <input
            type="text"
            name="countryCode"
            defaultValue={+91}
            size={2}
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <input
            type="text"
            name="phone"
            size={10}
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />{" "}
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="term"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />{" "}
            I Agree
          </label>
          <br /> <br />
          <input type="submit" value="Submit" disabled={!state.term} />
        </form>
      </div>
    </div>
  );
};

export default Forms;
