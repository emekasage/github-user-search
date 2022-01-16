import React, { useState, useEffect } from "react";

export default function Results(props) {
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    if (typeof props.items !== "undefined") {
      setFilteredItems(props.items);
    }
  }, [props]);
  return (
    <div className="row">
      <div className="col-md-7 mx-auto pt-4 pb-4 pl-0 pr-0 total-users">
        {props.total_count !== null && props.items.length !== 0 ? (
          <span className="h5 bottom-0 num_users">
            {props.total_count} User(s) <hr />
          </span>
        ) : (
          ""
        )}
      </div>
      {filteredItems.map((item, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-7 mx-auto card-details">
              <a
                className="user-card"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {typeof item.user_details !== "undefined" && (
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex user-info align-items-center">
                          <img
                            src={item.avatar_url}
                            alt="Profile"
                            className="user-img"
                          />
                          {typeof item.user_details.login !== "undefined" && (
                            <div className="fullname">
                              {item.user_details.name}
                            </div>
                          )}
                          <span className="username">{item.login}</span>
                        </div>
                        <div className="">
                          {typeof item.user_details.login !== "undefined" && (
                            <div className="public_repo">
                              Public Repository:{" "}
                              {item.user_details.public_repos}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-block mt-3">
                        {typeof item.user_details.login !== "undefined" && (
                          <div className="bio">{item.user_details.bio}</div>
                        )}
                        {typeof item.user_details.login !== "undefined" && (
                          <div className="location mt-1">
                            {item.user_details.location}
                          </div>
                        )}
                      </div>
                      <div className="d-flex mt-1 follow">
                        {typeof item.user_details.login !== "undefined" && (
                          <div>Following: {item.user_details.following}</div>
                        )}
                        {typeof item.user_details.login !== "undefined" && (
                          <div className="followers">
                            Followers: {item.user_details.followers}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
