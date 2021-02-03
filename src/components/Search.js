import React from "react";
import { Input } from "antd";

const Search = ({ search }) => {
  const handleChange = (e) => {
    search(e.target.value);
  };
  return (
    <div>
      <Input
        placeholder="Type a country"
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default Search;
