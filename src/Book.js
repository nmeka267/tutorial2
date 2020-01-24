import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { book, author } = this.props.book;
    return (
      <article>
        <h3>book:{book}</h3>
        <h4>Author:{author}</h4>
      </article>
    );
  }
}
