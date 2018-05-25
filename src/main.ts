console.log('TS is Sourced');
import { SpeedTester } from './SpeedTester.class';

const main = (): void => {
  const tester = new SpeedTester();
  tester.run('3', tester.arr_assign);
  tester.run('1', tester.reassign_ind);
  tester.run('2', tester.reassign_once);
};

main();
