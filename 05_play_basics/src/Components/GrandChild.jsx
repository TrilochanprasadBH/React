// import { Children } from "react";  - this is not the children prop, small c , wala.
//this capital C, Children is different from children. remember this

export default function GrandChild({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
