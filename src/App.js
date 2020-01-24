// named and default import/exports
//only one default export module
//think of module as file

import React, { Component } from "react";
import Booklist from "./Booklist";

const App = () => (
  <section>
    <h3>This our application</h3>
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
