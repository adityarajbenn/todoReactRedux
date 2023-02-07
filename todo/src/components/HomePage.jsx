import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo , editTodo} from "../redux/action";
import "./homepage.css"

function HomePage() {
  const [input, setInput] = useState("");
  const [placeHolderText,setPlaceHolderText] = useState("Enter Text");
  const [editID,setEditID] = useState("");
  const [deleteId,setDeleteId] = useState("");
  const [div,setDiv] = useState(false);

  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(()=>{
  },[placeHolderText])

  function editFun(id,data){
      setPlaceHolderText(data);
      setEditID(id);
  }

  function deleteButton(){

    dispatch(deleteTodo(deleteId));
    setDiv(false);
  }

  return (
    <>
    <div id="mainDiv" style={{position:"relative"}}>
      {div? <div style={{position:"fixed"} } id="deletePermission">
        <h3>Do you want to delete?</h3>
        <div>
          <button id="deleteYes" onClick={()=>deleteButton()}>Yes</button>
          <button id="deleteNo" onClick={()=>setDiv(false)}>No</button>
        </div> 
      </div>: "" }
        <div id="contentDiv">
          <div style={{display:"flex",color:"white",alignItems:"center",justifyContent:"space-around"}}>

        <h3 >Add items to TODO-List</h3>
        <i class="fa-solid fa-pen-to-square"></i>
          </div>
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
          <i style={{color:"green",fontSize:"20px"}} class="fa-solid fa-square-check" onClick={() => {
              dispatch(editTodo(editID,input), setPlaceHolderText("Enter Text"),setEditID(""),setInput(""));
            }}></i>
        :
          <i style={{fontSize:"20px"}} className="fa-solid fa-plus"  onClick={() => {
              dispatch(addTodo(input), setInput(true));
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
                    border:"none",
                    background:"none"
                }}>
                <i id="editButton" className="fa-solid fa-pencil" onClick={()=>{editFun(elem.id,elem.data)}}></i>
                <i id="deleteButton" className="fa-solid fa-trash-can" onClick={() => {
                  setDeleteId(elem.id) ; setDiv(true)
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
