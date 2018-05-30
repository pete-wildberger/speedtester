import { SpeedTester, ST_config_type } from '../SpeedTester.class';
declare module 'Speeder' {
  export function Speeder(config: ST_config_type): SpeedTester;
}
