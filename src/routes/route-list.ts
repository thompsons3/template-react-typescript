//PÁGINAS - (COMPONENTS)

/**
 * Auth
 */

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";

/**
 * Dashboard
 */

import MainDashboard from "../pages/Dashboard/Main";
import ExemploGitUser from "../pages/Dashboard/ExemploGitUser";

/**
 * Landing Page
 */

//CARREGA TODOS OS TIPOS DE LAYOUT - Type.DefaultLayout => React.FC
import { Types } from "../_layouts";

interface Props {
  path: string;
  exact: boolean;
  component: React.FC;
  restricted: boolean;
  private: boolean;
  defaultLayout: React.FC;
}

const routeList: Props[] = [
  //AUTH

  /**
   *  Rotas públicas
   */

  {
    path: "/login",
    exact: true,
    component: Login,
    restricted: false,
    private: false,
    defaultLayout: Types.AuthLayout,
  },
  {
    path: "/recuperar-senha",
    exact: true,
    component: ForgotPassword,
    restricted: true,
    private: false,
    defaultLayout: Types.AuthLayout,
  },
  {
    path: "/registro",
    exact: true,
    component: Register,
    restricted: true,
    private: false,
    defaultLayout: Types.AuthLayout,
  },

  /**
   *  Rotas privadas
   */

  //DASHBOARD

  /**
   *  Rotas privadas
   */
  {
    path: "/dashboard",
    exact: true,
    component: MainDashboard,
    restricted: false,
    private: true,
    defaultLayout: Types.DashboardLayout,
  },
  {
    path: "/exemplo-git-user",
    exact: true,
    component: ExemploGitUser,
    restricted: false,
    private: true,
    defaultLayout: Types.DashboardLayout,
  },

  //LANDING PAGE

  /**
   *  Rotas públicas
   */
  /**
   *  Rotas privadas
   */
];

export default routeList;
