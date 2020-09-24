import * as yup from "yup";
import initLocale from "../_Schemas/initLocale";

/**
 * Inicializando meu Schema Locale - Yup
 */

initLocale();

export interface ArgsGitUser {
  userName: string;
}

async function get(args: ArgsGitUser): Promise<any> {
  let erro = false;

  let schema = yup.object().shape({
    userName: yup.string().required("Você precisa informar um usuário."),
  });

  await schema.validate(args).catch((err) => {
    erro = err;
  });

  return erro;
}

const ValidateUserGit = {
  get: get,
};

export default ValidateUserGit;
