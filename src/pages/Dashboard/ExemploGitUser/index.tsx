import React, { useState } from "react";
import { Container, Box } from "./styles";

import Toast from "../../../components/Toast";
import defaultShowDisplayErro from "../../../helpers/defaultShowDisplayErro";

import { GitUserValidate, SchemaRefValidate } from "../../../validate";
import { GitUserRemote } from "../../../remote";

const ExemploGitUser: React.FC = () => {
  interface DataUser {
    name: string;
    avatar_url?: string | null;
  }

  const [userNameInput, setUserNameInput] = useState<string>("");
  const [dataUser, setDataUser] = useState<DataUser>({
    name: "",
    avatar_url: null,
  });

  const [loading, setLoading] = useState<boolean>(false);

  function changeTolowerCase(value: string): void {
    setUserNameInput(value.toLowerCase());
  }

  async function search(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    let userNameRef = document.getElementById("userName");

    let validatorError = await GitUserValidate.get({ userName: userNameInput });

    if (validatorError) {
      // defaultShowDisplayErro(validator, [{ ref: "userName", element: userNameRef }]);
      defaultShowDisplayErro(validatorError, SchemaRefValidate([userNameRef]));
      return;
    }

    try {
      setLoading(true);

      let response = await GitUserRemote.find({ name: userNameInput });

      if (!response) {
        return;
      }

      setDataUser({
        name: response.name,
        avatar_url: response.avatar_url,
      });
    } catch (error) {
      Toast.error("Não foi possível recuperar usuário.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Box>
        <input
          type="text"
          onChange={(e) => changeTolowerCase(e.target.value)}
          placeholder="Nome do usuário do GitHub?"
          value={userNameInput}
          id="userName"
        />

        <button onClick={search}>{loading ? "Buscando" : "Buscar"}</button>

        {dataUser.name && (
          <>
            <span>{dataUser.name}</span>
            {dataUser.avatar_url && (
              <img src={dataUser.avatar_url + ""} alt="Avatar" />
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default ExemploGitUser;
