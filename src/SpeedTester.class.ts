export interface ST_config_type {
  iterations: number;
}
export class SpeedTester {
  private _iterations: number;
  constructor(config: ST_config_type) {
    Number.isInteger(config.iterations) ? (this._iterations = config.iterations) : process.exit(1);
  }
  speedTest = (method: any, ...args: any[]): any => {
    const start = new Date().getTime();
    let iterations = Number(this._iterations);
    for (var i = 0; i < iterations; i++) {
      method.apply(null, args);
    }
    return new Date().getTime() - start;
  };
  run = (name: string, method: any, ...args: any[]): any => {
    let results: number[] = [];
    for (var i = 0; i < 10; i++) {
      results.push(this.speedTest(method, args));
    }
    const sum: number = results.reduce(function(a, b) {
      return a + b;
    });
    const avg: number = sum / results.length;
    console.log(`${name} averages ${avg}ms`);
  };
}
