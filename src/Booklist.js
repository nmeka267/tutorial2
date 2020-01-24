import React, { Component } from "react";
import Book from "./Book";
export default class Booklist extends Component {
  books = [
    {
      book: "book number one",
      author: "john doe"
    },
    {
      book: "book number two",
      author: "bobby doe"
    }
  ];
  render() {
    return (
      <section>
        <h3>This is our book list</h3>
        <Book book={this.books[0]} />
        <Book book={this.books[1]}></Book>
      </section>
    );
  }
}
