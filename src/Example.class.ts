export class ExampleClass {
  constructor() {}

  number_method = (str: string): number => {
    return Number(str);
  };
  parse_int = (str: string): number => {
    return parseFloat(str);
  };
  plus_sign = (str: string): number => {
    return +str;
  };
}
