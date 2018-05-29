const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items: any) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

export interface ST_config_type {
  iterations: number;
}
export class SpeedTester {
  private _iterations: number;
  constructor(config: ST_config_type) {
    Number.isInteger(config.iterations) ? (this._iterations = config.iterations) : process.exit(1);
  }

  speedTest = (method: any, ...args: any[]): any => {
    let result: number;
    const obs = new PerformanceObserver((items: any) => {
      result = items.getEntries()[0].duration;
      performance.clearMarks();
    });
    obs.observe({ entryTypes: ['measure'] });
    let iterations = Number(this._iterations);
    performance.mark('A');
    for (var i = 0; i < iterations; i++) {
      method.apply(null, args);
    }
    performance.mark('B');
    performance.measure('A to B', 'A', 'B');
    return result;
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
    // console.log(performance);
    console.log(`${name} averages ${avg}ms`);
  };
}
