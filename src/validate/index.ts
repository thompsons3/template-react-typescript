import SchemaRefValidate from "./_Schemas/refs";

import GitUserValidate from "./ExemploGitUser";

const Validate = {
  GitUser: GitUserValidate,
  SchemaRef: SchemaRefValidate,
};

export { GitUserValidate };

export { SchemaRefValidate };
export default Validate;
