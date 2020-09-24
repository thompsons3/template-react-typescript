/*
 * Função que monta o corpo do obejto do array refs.
 * Onde caso tenha, o Validate vai buscar para disparar suas respectivas ações.
 * @Params Array de ElementRef
 */

export interface ObjectSchemaRef {
  ref: string;
  element: HTMLElement;
}

export default function schemaRefs(data: Array<any>) {
  let arrAux: Array<ObjectSchemaRef> = [];

  data.map((dataRef) => {
    arrAux.push({ ref: dataRef.id, element: dataRef });
  });

  return arrAux;
}
