type Constructor = new (...args: any[]) => {};

export const Scale = <TBase extends Constructor>(Base: TBase): TBase => {
  return class Scaling extends Base {
    public _scale = 1;
    public setScale(scale: number) {
      this._scale = scale;
    }

    public get scale(): number {
      return this._scale;
    }
  };
};
