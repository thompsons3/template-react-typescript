import { tratedException } from "../index";

import API from "../../services/api";
export interface ArgsGitUserFind {
  name: string;
}

async function find(args: ArgsGitUserFind) {
  const response = await API.get(`https://api.github.com/users/${args.name}`);
  return tratedException(response);
}

const RemoteGitUser = {
  find: find,
};

export default RemoteGitUser;
