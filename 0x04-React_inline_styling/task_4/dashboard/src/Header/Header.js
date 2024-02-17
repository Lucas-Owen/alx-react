import React from "react";

import { StyleSheet, css } from "aphrodite";

export default function Header () {
  return (
    <div className={css(styles["App-header"]) + " App-header"}>
      <img src="./assets/holberton-logo.jpg" className={css(styles["App-logo"])} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  "App-logo": {
    width: "200px",
    height: "auto",
  },
  "App-header": {
    display: "flex",
    alignItems: "center",
    borderBottom: ["0.2rem", "solid", "var(--color-primary)"],
    color: "var(--color-primary)",
  },
});

Header.displayName = "Header";
