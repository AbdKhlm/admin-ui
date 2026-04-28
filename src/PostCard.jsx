import React, { useState } from "react";

function PostCard(props) {
    const { id, userId, title, body } = props;
    const [clicked, setClicked] = useState(false);

  return (
    <div className="p-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:border hover:bg-pink-100 flex flex-col justify-between">
      
      <h2 className="font-bold text-lg mb-2">{title}</h2>

      <p className="flex-1">{body}</p>
      
      <button
      className={`${clicked ? "bg-specialRed2 text-white hover:brightness-125" : "bg-gray-400 text-white hover:brightness-125"} mt-4 px-4 py-2 rounded transition-all duration-300`}
        onClick={() => setClicked(true)}
        >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
     </button>
    </div>
  );
}

export default PostCard;