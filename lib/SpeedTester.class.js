"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('perf_hooks'), PerformanceObserver = _a.PerformanceObserver, performance = _a.performance;
var SpeedTester = /** @class */ (function () {
    function SpeedTester(config) {
        var _this = this;
        this.run = function (name, method) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            console.log('\x1b[36m', 'Speed Tester begin');
            var results = [];
            for (var i = 0; i < 10; i++) {
                results.push(_this.speedTest(method, args));
            }
            // sum and average performance results
            var avg = results.reduce(function (a, b) {
                return a + b;
            }) / results.length;
            // console.log(performance);
            console.log(name + " averages " + avg + "ms per " + _this._iterations + " iterations");
            console.log('\x1b[0m');
        };
        this.speedTest = function (method) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var result;
            var iterations = Number(_this._iterations);
            var obs = new PerformanceObserver(function (items) {
                result = items.getEntries()[0].duration;
                performance.clearMarks();
            });
            obs.observe({ entryTypes: ['measure'] });
            // start
            performance.mark('start');
            for (var i = 0; i < iterations; i++) {
                method.apply(null, args);
            }
            // finish
            performance.mark('finish');
            performance.measure('start to finish', 'start', 'finish');
            // return duration
            return result;
        };
        this._iterations = this.test_for_int(config.iterations);
    }
    SpeedTester.prototype.test_for_int = function (iterations) {
        try {
            if (Number.isInteger(iterations)) {
                return iterations;
            }
            throw new TypeError('Make sure that config.iterations is an integer');
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    };
    return SpeedTester;
}());
exports.SpeedTester = SpeedTester;
