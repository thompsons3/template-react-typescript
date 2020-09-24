import { setLocale } from "yup";

export default function initLocale(): void {
  setLocale({
    string: {
      email: "Esse e-mail não é válido.",
      max: (value) => `O tamanho máximo de caracter é ${value.max}.`,
      min: (value) => `O tamanho mínimo de caracter é ${value.min}.`,
    },
    number: {
      integer: `Informe um número inteiro.`,
      min: (value) => `O mínimo é ${value.min}.`,
      max: (value) => `Ò máximo é ${value.max}.`,
      positive: `O número tem que ser positivo.`,
      negative: `O número tem que ser negativo.`,
    },
    date: {
        max: value => `A data máxima é ${value.max}.`,
        min: value => `A data mínima é ${value.min}.`
    }
  });
}
