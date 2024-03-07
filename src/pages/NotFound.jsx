import React from "react";
function NotFound() {
  return (
    <div>
      <h1 className="text-4xl flex justify-center m-20 text-green-400 font-bold">
        404 - Not Found
      </h1>
      <br />
      <p className="text-4xl flex flex-col justify-items-center m-10 text-green-400 font-bold">
        Sorry, the page you are looking for does not exist.
        <img
          className="m-10 basis 1/2"
          src="https://blog.lootcrate.com/wp-content/uploads/2018/08/rm_gc_9.gif"
        />
      </p>
    </div>
  );
}

export default NotFound;
