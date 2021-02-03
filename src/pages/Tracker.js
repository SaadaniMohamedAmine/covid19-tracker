import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import CardList from "../components/CardList";
import { Card } from "antd";
import "../App.css";
const Tracker = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchFunc = (thing) => {
    setSearch(thing);
  };
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="tracker-page">
      <div className="site-card-border-less-wrapper">
        <Card title="Tracking derails">
          <p className="tip-search">
            Please enter the name of the country you search !
          </p>
          <Search search={searchFunc} />
          {search.length > 0 ? (
            <CardList
              countries={data.filter(
                (item) =>
                  item.country
                    .toLocaleLowerCase()
                    .includes(search.trim().toLocaleLowerCase()) === true
              )}
            />
          ) : (
            <div></div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Tracker;

/*
<div className="cards">
            <CardList countries={
                data.filter(item=>(
                    item.country.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())===true
                ))
            }/>
            </div>*/

/*
             {
                data.filter(item=>(
                    item.country===search
                )).map(elt=>(
                    <div>
                        <h6>{elt.country}</h6>
                        <p>hello</p>
                    </div>
                ))
            }*/
