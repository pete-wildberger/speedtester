export class ExampleClass {
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
}
