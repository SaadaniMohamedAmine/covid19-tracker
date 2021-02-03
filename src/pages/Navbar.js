import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

const Navbar = () => {
  return (
    <PageHeader
      ghost={false}
      extra={[
        <Button key="3">
          <Link to="/">Home</Link>
        </Button>,
        <Button key="2">
          <Link to="/track">Tracking</Link>
        </Button>,
        <Button key="1" type="primary">
          <Link to="/info">Info</Link>
        </Button>,
      ]}
    ></PageHeader>
  );
};

export default Navbar;
/*
 <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/track">Tracker</Link>
                <Link to="/info">Info</Link>
            </nav>
        </div> */
