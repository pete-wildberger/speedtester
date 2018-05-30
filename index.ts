import { SpeedTester, ST_config_type } from './lib/SpeedTester.class';

exports.speeder = function(config: ST_config_type) {
  return new SpeedTester(config);
};
