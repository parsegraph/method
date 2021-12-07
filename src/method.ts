export default class Method<Func extends Function = Function> {
  _func: Func;
  _funcThisArg: any;

  constructor(func?: Func, funcThisArg?: any) {
    this.set(func, funcThisArg);
  }

  canCall() {
    return this._func != null;
  }

  clear(): void {
    this.set(null, null);
  }

  set(func?: Func, funcThisArg?: any) {
    this._func = func;
    this._funcThisArg = funcThisArg;
  }

  call(...args: Array<any>) {
    if (!this.canCall()) {
      return;
    }
    return this._func.apply(this._funcThisArg, args);
  }

  apply(args: Array<any>): any {
    if (!this.canCall()) {
      return;
    }
    return this._func.apply(this._funcThisArg, args);
  }
}
