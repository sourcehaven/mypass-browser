import { Fragment } from "react";
import Counter from "../components/counter/Counter";
import { Navbar } from "components/Navbar";

export const Home = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <p>
        Hello and welcome! :) This app was generated by the Create React App
        template and bootstrapped with Redux, React Router, React Testing
        Library, TypeScript, ESlint, Prettier for you. Take a look around ;)
      </p>
      <Counter />
    </Fragment>
  );
};
