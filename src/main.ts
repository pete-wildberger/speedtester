console.log('TS is Sourced');
import { SpeedTester } from './SpeedTester.class';

const main = (): void => {
  const tester = new SpeedTester();
  console.log('3');
  tester.run(tester.arr_assign);
  console.log('1');
  tester.run(tester.reassign_ind);
  console.log('2');
  tester.run(tester.reassign_once);
};

main();
