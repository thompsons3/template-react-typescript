import React from "react";
import {} from "./styles";

const Dashboard: React.FC = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

const styles = {
  display: "flex",
  flex: 1,
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "#F6F6FA",
};

export default Dashboard;
