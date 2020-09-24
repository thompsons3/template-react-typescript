import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelectorTyped } from "../../store";

interface PublicProps {
  path?: string;
  component: React.FC;
  exact?: boolean;
  restricted?: boolean;
  defaultLayout: React.FC;
}

const Public = ({
  path,
  component: Component,
  defaultLayout: DefaultLayout,
  exact = false,
  restricted = false,
}: PublicProps) => {
  //VERIFICANDO SE USUÁRIO ESTÁ LOGADO
  const isLogged = useSelectorTyped((state) => state.auth.data.signed);

  return (
    <DefaultLayout>
      <Route
        exact={exact}
        render={(props) =>
          isLogged && restricted ? <Redirect to="/dashboard" /> : <Component />
        }
      />
    </DefaultLayout>
  );
};

export default Public;
