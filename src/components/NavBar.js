import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 
  const aTagLinks = links.map(element => {
    return <a key={element} href={'#'+ element}>{element}</a>
  })
  return <nav>{aTagLinks}</nav>;
}

export default NavBar;
