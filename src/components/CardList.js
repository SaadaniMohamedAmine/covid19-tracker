import React from "react";
import { Card } from "antd";

const CardList = ({ countries }) => {
  return (
    <div className="card-list">
      {countries.map((item) => (
        <Card
          title={item.country}
          style={{ width: 220, margin: "10px" }}
          key={item.country}
        >
          <div className="item-img">
            <img
              src={item.countryInfo.flag}
              width="100px"
              className="img-item"
              alt="flag"
            />
          </div>
          <p className="para-info">
            <span>All cases :</span> <span>{item.cases}</span>
          </p>
          <p className="para-info">
            <span>All deaths:</span> <span>{item.deaths}</span>
          </p>
          <p className="para-info">
            <span>Today cases:</span> <span>{item.todayCases}</span>
          </p>
          <p className="para-info">
            <span>Today recovered:</span> <span>{item.todayRecovered}</span>
          </p>
          <p className="para-info">
            <span>Active:</span> <span>{item.active}</span>
          </p>
          <p className="para-info">
            <span>Critical:</span> <span>{item.critical}</span>
          </p>
          <p className="para-info">
            <span>Last update:</span>
            <span>{new Date(item.updated).toString().slice(0, 25)}</span>
          </p>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
