import React from "react";
import "./styles.css";
const AuthorCard = ({ avatar, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "18rem",
        alignItems: "center",
      }}
    >
      <div className="image">
        <img
          style={{
            borderRadius: "50%",
            width: "207px",
            height: "202px",
            objectFit: "cover",
          }}
          alt="devImg"
          src={avatar}
        />
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "#070936",
            padding: "10px",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
