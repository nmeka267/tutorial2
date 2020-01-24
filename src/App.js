// named and default import/exports
//only one default export module
//think of module as file

import React, { Component } from "react";
import Booklist from "./Booklist";
import "./App.css";

const App = () => (
  <section>
    <Booklist />
  </section>
);

// import * as data from "./data";
// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
// );

export default App;
