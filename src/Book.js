import React, { Component } from "react";

// PROP DRILLING PASSING METHODS TO CHILDREN
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
      showInfo: true
    };
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, img, title, author } = this.props.info;
    const checkInfo = info => {
      if (info == true) {
        return (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium ipsum ducimus, ratione, id repellat possimus non
            voluptate consequuntur rem laudantium minima atque, quia fugiat cum
            repellendus error excepturi? In, pariatur.
          </p>
        );
      } else {
        return null;
      }
    };

    console.log(id);

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            Toggle info
          </button>
          {checkInfo(this.state.showInfo)}
          {/* {this.state.showInfo ? (
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful conten
            </p>
          ) : null} */}
          {/* {this.state.showInfo && (
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful conten
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
