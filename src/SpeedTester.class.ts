export class SpeedTester {
  public view: { division: boolean; jobs: boolean; work_orders: boolean };
  public where: string[];
  public counter: number = 0;
  constructor() {
    this.view = { division: false, jobs: false, work_orders: false };
    this.where = ['here'];
  }

  reassign_ind = () => {
    this.view.division = true;
    this.view.jobs = true;
    this.view.work_orders = true;
  };
  reassign_once = () => {
    this.view = { division: true, jobs: true, work_orders: true };
  };
  arr_assign = () => {
    this.where.splice(0, this.where.length);
    this.where.push('here');
  };
  run = (fn: any): any => {
    console.log('running');
    this.counter++;
    let iterations = 1000000;
    console.time(`Function #${this.counter}`);
    for (var i = 0; i < iterations; i++) {
      fn();
    }
    console.timeEnd(`Function #${this.counter}`);
  };
}
