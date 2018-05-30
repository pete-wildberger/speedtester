import { SpeedTester, ST_config_type } from './SpeedTester.class';

exports.speeder = function(config: ST_config_type) {
  return new SpeedTester(config);
};
