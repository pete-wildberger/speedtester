export class SpeedTester {
  public view: { division: boolean; jobs: boolean; work_orders: boolean };
  public where: string[];
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
  run(name: string, method: any, ...args: any[]): any {
    console.log('running', name);
    let iterations = 1000000;
    console.time(`Function #${name}`);
    for (var i = 0; i < iterations; i++) {
      method.apply(this, args);
    }
    console.timeEnd(`Function #${name}`);
  }
}
