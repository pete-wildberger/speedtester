import { ExampleClass } from './Example.class';
import { Speeder } from '../SpeedTester/index';
const config = {
  iterations: 100000
};
const Tester = Speeder(config);
const Example = new ExampleClass();

Tester.run('Example.number_method', Example.number_method, ['55555']);
Tester.run('Example.parse_int', Example.parse_int, ['55555']);
Tester.run('Example.plus_sign', Example.plus_sign, ['55555']);
