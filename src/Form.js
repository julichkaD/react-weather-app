import React from "react";

function Form() {
  return (
    <form className="form" action="search">
      <input className="input" name="query" placeholder="Type a city.." />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
}
export default Form;
