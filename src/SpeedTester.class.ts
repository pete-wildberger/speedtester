export interface ST_config_type {
  iterations: number;
}
export class SpeedTester {
  private _iterations: number;
  constructor(config: ST_config_type) {
    Number.isInteger(config.iterations) ? (this._iterations = config.iterations) : process.exit(1);
  }
  run = (name: string, method: any, ...args: any[]): any => {
    console.log('running', name);
    let iterations = Number(this._iterations);
    console.time(`Function #${name}`);
    for (var i = 0; i < iterations; i++) {
      method.apply(null, args);
    }
    console.timeEnd(`Function #${name}`);
  };
}
