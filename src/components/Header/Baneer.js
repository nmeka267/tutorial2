import React from "react";
import { name } from "../../data";
//rfc
// export default function Baneer() {
//   return (
//     <div>
//       <h1>hello banner component{name}</h1>
//     </div>
//   );
// }

function Banner() {
  return (
    <div>
      <h1>Hello From Banner {name} </h1>
    </div>
  );
}

export default Banner;
