import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelectorTyped } from "../../store";

interface PrivateProps {
  path?: string;
  component: React.FC;
  exact?: boolean;
  defaultLayout: React.FC;
}

const Private = ({
  path,
  component: Component,
  defaultLayout: DefaultLayout,
  exact = false,
}: PrivateProps) => {
  //VERIFICANDO SE USUÁRIO ESTÁ LOGADO
  const isLogged = useSelectorTyped((state) => state.auth.data.signed);

  return (
    <DefaultLayout>
      <Route
        exact={exact}
        render={(props) =>
          isLogged ? <Component /> : <Redirect to="/login" />
        }
      />
    </DefaultLayout>
  );
};

export default Private;
