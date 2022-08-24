import React from "react";

const AllMoviesItem = (props) => {
  const getClassByRate = (vote) => {
    if (vote >= 8) return "green";
    else if (vote >= 5) return "orange";
    else return "red";
  };

  return (
    <div className="container">
      <div className="card movie">
        <img
          loading="lazy"
          src={props.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body d-flex justify-content-between items-center movie-info"
          style={{ background: "#373b69", height: "80px" }}
        >
          <h3 className="card-title fs-4">{props.title}</h3>

          <span className={`${getClassByRate(props.rating)}`}>
            {props.rating}
          </span>
        </div>

        <div className="overview">
          <h2>Overview</h2>
          <p>{props.overview}</p>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default AllMoviesItem;
