import Toast from "../components/Toast";

import GitUserRemote from "./ExemploGitUser";

const Remote = {
  GitUser: GitUserRemote,
};

export { GitUserRemote };

export default Remote;

/**
 * Função para tratar retorno de exceção da API.
 * @Params response -> Axios:Response
 * @Params campo_verificacao -> Variavel que verifica se houve ecxeção
 */

export function tratedException(
  response: any,
  campo_verificacao: string = "CAMPO_X"
) {
  if (response.data.hasOwnProperty(campo_verificacao)) {
    Toast.error(`${response.data.message}`);
    return false;
  }

  return response.data;
}
