import React from "react";
import { Container, Button } from "./styles";

import { useHistory } from "react-router-dom";

const __404: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>Página não encontrada! :/</h1>
      <span>Erro 404</span>

      <Button onClick={() => history.push("/dashboard")}>
        <span>Ir para principal</span>
      </Button>
    </Container>
  );
};

export default __404;
