import { Fragment } from "react";
import { default as AboutPage } from "./About";
import { default as PasswordPage } from "./Password";
import { useSelector } from "react-redux";
import { RootState } from "state";

type Page = "passwords" | "folders" | "settings" | "about";

const selector = (page: Page) => {
  switch (page) {
    case "passwords":
      return PasswordPage;
    case "folders":
      return Fragment;
    case "settings":
      return Fragment;
    case "about":
      return AboutPage;
  }
};

export default () => {
  const page = useSelector((state: RootState) => state.page.current);
  const Page = selector(page);

  return <Page />;
};
