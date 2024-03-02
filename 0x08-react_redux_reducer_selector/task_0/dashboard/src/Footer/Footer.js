import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

import AppContext from "../App/AppContext";

export default function Footer () {
  return (
    <AppContext.Consumer>
      {({ user, logOut }) =>
        <div className="App-footer">
          {user.isLoggedIn && <p>Contact us</p>}
          Copyright {getFullYear()} - {getFooterCopy()}
        </div>
      }
    </AppContext.Consumer>
  );
}

Footer.displayName = "Footer";
