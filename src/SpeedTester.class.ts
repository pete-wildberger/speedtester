const { PerformanceObserver, performance } = require('perf_hooks');

export interface ST_config_type {
  iterations: number;
}
export class SpeedTester {
  private _iterations: number;
  constructor(config: ST_config_type) {
    Number.isInteger(config.iterations) ? (this._iterations = config.iterations) : process.exit(1);
  }

  speedTest = (method: Function, ...args: any[]): any => {
    let result: number;
    let iterations: number = Number(this._iterations);
    const obs = new PerformanceObserver((items: any) => {
      result = items.getEntries()[0].duration;
      performance.clearMarks();
    });
    obs.observe({ entryTypes: ['measure'] });
    // start
    performance.mark('start');
    for (let i: number = 0; i < iterations; i++) {
      method.apply(null, args);
    }
    // finish
    performance.mark('finish');
    performance.measure('start to finish', 'start', 'finish');
    // return duration
    return result;
  };

  run = (name: string, method: Function, ...args: any[]): any => {
    let results: number[] = [];
    for (let i: number = 0; i < 10; i++) {
      results.push(this.speedTest(method, args));
    }
    // sum and average performance results
    const sum: number = results.reduce((a, b) => {
      return a + b;
    });
    const avg: number = sum / results.length;
    // console.log(performance);
    console.log(`${name} averages ${avg}ms`);
  };
}
