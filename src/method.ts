export default class Method {
  _func: Function;
  _funcThisArg: any;

  constructor(func: Function, funcThisArg?: any) {
    this._func = func;
    this._funcThisArg = funcThisArg;
  }

  call(...args: Array<any>) {
    return this._func.apply(this._funcThisArg, args);
  }

  apply(args: Array<any>): any {
    return this._func.apply(this._funcThisArg, args);
  }
}
