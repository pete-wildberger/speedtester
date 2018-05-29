import { SpeedTester, ST_config_type } from './lib/SpeedTester.class';

export function Speeder(config: ST_config_type) {
  return new SpeedTester(config);
}
