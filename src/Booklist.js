import React, { Component } from "react";
import Book from "./Book";
export default class Booklist extends Component {
  state = {
    books: [
      {
        book: "book number one",
        author: "john doe"
      },
      {
        book: "book number two",
        author: "bobby doe"
      }
    ]
  };
  render() {
    const books = this.state.books.map(item => item.book);
    console.log(books);
    return (
      <section>
        <h3>This is our book list</h3>
      </section>
    );
  }
}
