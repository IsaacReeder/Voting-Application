import "moment-timezone";

import React from "react";
import Moment from "react-moment";
import { RadialChart } from "react-vis";

export default (props) => {
  const { poll } = props;
  return (
    <div className="card border-dark mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <RadialChart
            data={poll.options.map((item, index) => {
              let count = poll.votes.reduce(
                (accumulative, current) =>
                  current.option === item ? accumulative + 1 : accumulative,
                0
              );
              return { angle: count, name: item };
            })}
            showLabels
            width={150}
            height={150}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <a href onClick={(e) => props.setPage(["vote", { poll }])}>
                {poll.question}
              </a>
            </h5>
            <p className="card-text">
              {poll.options.map((item, index) => {
                let count = poll.votes.reduce(
                  (accumulative, current) =>
                    current.option === item ? accumulative + 1 : accumulative,
                  0
                );
                return (
                  <span key={index}>
                    {item}: {count} votes.{" "}
                  </span>
                );
              })}
            </p>
            <p className="card-text">
              <small className="text-muted">
                (
                <Moment
                  parse="YYYY-MM-DDTHH:mm:ss.SSSZ"
                  tz="America/Santiago"
                  fromNow
                >
                  {poll.createdAt}
                </Moment>
                )
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
