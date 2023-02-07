import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo , editTodo} from "../redux/action";
import "./homepage.css"

function HomePage() {
  const [input, setInput] = useState("");
  const [placeHolderText,setPlaceHolderText] = useState("Enter Text");
  const [editID,setEditID] = useState("");
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(()=>{
  },[placeHolderText])

  function editFun(id,data){
      setPlaceHolderText(data);
      setEditID(id);
  }

  return (
    <>
    <div id="mainDiv">
        <div id="contentDiv">

      <div className="inputDiv">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          name=""
          id=""
          placeholder={placeHolderText} 
          />
          {editID!==""?
          <i class="fa-solid fa-square-check" onClick={() => {
              dispatch(editTodo(editID,input), setPlaceHolderText("Enter Text"),setEditID(""),setInput(""));
            }}></i>
        :
          <i className="fa-solid fa-plus"  onClick={() => {
              dispatch(addTodo(input), setInput(""));
            }}
            ></i>
        }
      </div>
      <div id="listDiv">
        {list?.map((elem) => (
            <>
            <div key={elem.id} style={{ display: "flex" }}>
                <p key={elem.id}>{elem.data}</p>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    width:"50px",
                    border:"none"

                }}>
                <i className="fa-solid fa-pencil" onClick={()=>{editFun(elem.id,elem.data)}}></i>
                <i className="fa-solid fa-trash-can" onClick={() => {
                    dispatch(deleteTodo(elem.id));
                }}></i>
                </div>
            </div>
          </>
        ))}
      </div>
        </div>
    </div>
        </>
  );
}

export default HomePage;
