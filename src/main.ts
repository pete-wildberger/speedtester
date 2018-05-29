console.log('TS is Sourced');
import { SpeedTester, ST_config_type } from './SpeedTester.class';
import { ExampleClass } from './Example.class';

const config: ST_config_type = {
  iterations: 1000000
};

const main = (): void => {
  const tester = new SpeedTester(config);
  const example = new ExampleClass();
  tester.run('1', example.reassign_ind);
  tester.run('2', example.reassign_once);
  tester.run('3', example.arr_assign);
};

main();
