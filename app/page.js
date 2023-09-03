"use client";
import React, { useState } from "react";

function page() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (index) => {
    let copytask =[...task]
    copytask.splice(index,1)
    settask(copytask)
  }

  let renderTask = <h2 className="p-6 bg-slate-200 w-5/12 m-5"> No Task Available !</h2>;
  if (task.length > 0 ){
    renderTask = task.map((t, index) => {
      return(
      <li key={index}>
        <div className="flex justify-between p-6 bg-slate-200 w-5/12 m-5">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-xl font-medium">{t.desc}</h6>
          <button onClick={()=>{deleteHandler(index)}} className="bg-red-600 text-white px-4 py-2 font-bold text-l">x</button>
        </div>
      </li>
      )
    });
  }
  return (
    <>
      <h1 className="bg-yellow-300 text-gray-700 p-8 m-5 text-4xl text-center w-5/12">
        Shreya's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-white border-b-zinc-800 border-2 m-5 p-3 text-l w-[200px] mx-12"
          placeholder="Boil Tomatoes"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-white border-b-zinc-800 border-2 m-5 p-3 text-l w-[300px]"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-gray-900 text-white px-8 py-3 rounded-md m-5 font-sans font-semibold">
          Add Task
        </button>
      </form>
      <hr />
      <div>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default page;
