const { PerformanceObserver, performance } = require('perf_hooks');

export interface ST_config_type {
  iterations: number;
}

export class SpeedTester {
  private _iterations: number;
  constructor(config: ST_config_type) {
    this._iterations = this.test_for_int(config.iterations);
  }
  run = (name: string, method: Function, ...args: any[]): void => {
    console.log('\x1b[36m', 'Speed Tester begin');
    let results: number[] = [];
    for (let i: number = 0; i < 10; i++) {
      results.push(this.speedTest(method, args));
    }
    // sum and average performance results
    const avg: number =
      results.reduce((a, b) => {
        return a + b;
      }) / results.length;

    // console.log(performance);
    console.log(`${name} averages ${avg}ms per ${this._iterations} iterations`);
    console.log('\x1b[0m');
  };

  speedTest = (method: Function, ...args: any[]): number => {
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
  test_for_int(iterations: number): any {
    try {
      if (Number.isInteger(iterations)) {
        return iterations;
      }
      throw new TypeError('Make sure that config.iterations is an integer');
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
}
