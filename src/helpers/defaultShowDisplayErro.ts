import Toast from "../components/Toast";
import { ObjectSchemaRef } from "../validate/_Schemas/refs";

/**
 * Função que trata a exibição default do erro quando passar por Validate.
 * @Params err -> Yup.Err
 * @Params refs -> Array de ObjectSchemaRef (Validate)
 */

export default function defaultShowDisplayErro(
  err: any,
  refs?: Array<ObjectSchemaRef>
) {
  if (refs && refs.length > 0) {
    const ElementRastreado = refs.filter(
      (value: ObjectSchemaRef) => value.ref === err.path
    );

    ElementRastreado.length > 0 && ElementRastreado[0].element.focus();
  }

  Toast.error(`Ops! ${err.errors[0]}`);
}
