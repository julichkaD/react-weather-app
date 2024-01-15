import React from "react";
import Image from "./Image";

export default function Days() {
    return (
      <div className="days">
        <div className="day">
          <h3>Monday</h3>
          <Image />
          <h4>19˚C</h4>
        </div>
        <div className="day">
          <h3>Tuesday</h3>
          <Image />
          <h4>9˚C</h4>
        </div>
        <div className="day">
          <h3>Wednesday</h3>
        </div>
        <div className="day">
          <h3>Thursday</h3>
        </div>
        <div className="day">
          <h3>Friday</h3>
        </div>
      </div>
    );
}