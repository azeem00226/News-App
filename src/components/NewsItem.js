// import React, { Component } from "react";

const NewsItem =(props)=> {
    let {
      title,
      description,
      imageUrl,
      published,
      newsUrl,
      author,
      date,
      source,
    } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F138e9fec-277d-429b-b6e1-33d581c0367b.jpg?source=next-opengraph&fit=scale-down&width=900"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">{published}</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
