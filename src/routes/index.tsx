import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Private from "./Private";
import Public from "./Public";

//Arquivo com as rotas e seus devidos componentes e configurações
import ROUTE_LIST from "./route-list";

//Página de rota não encontrada. (404)
import __404 from "../pages/_404";

const Routes: React.FC = () => {
  interface RenderProps {
    path?: string;
    component: React.FC;
    defaultLayout: React.FC;
    exact?: boolean;
    private?: boolean;
    restricted?: boolean;
  }

  //Função responsável por retornar cada rota do sistema em sua devida categoria.
  function renderRoute(route: RenderProps, key: number) {
    if (route.private) {
      return (
        <Private
          key={key + ""}
          path={route.path}
          exact={route.exact}
          component={route.component}
          defaultLayout={route.defaultLayout}
        />
      );
    } else {
      return (
        <Public
          key={key + ""}
          path={route.path}
          exact={route.exact}
          component={route.component}
          restricted={route.restricted}
          defaultLayout={route.defaultLayout}
        />
      );
    }
  }

  return (
    <Router>
      <Switch>
        {ROUTE_LIST.map((route, index) => renderRoute(route, index))}
        <Route component={__404} />
      </Switch>
    </Router>
  );
};

export default Routes;
