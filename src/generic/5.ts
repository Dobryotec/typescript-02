/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Tkey, Tvalue> {
  key: Tkey;
  value: Tvalue;
}

const data: KeyValuePair<string, number> = {
  key: "Peter",
  value: 20,
};

export {};
