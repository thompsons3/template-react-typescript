import React from "react";
import {} from "./styles";

const Presentation: React.FC = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

const styles = {
  display: "flex",
  flex: 1,
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  backgroundColor: '#FF6800'
};

export default Presentation;
