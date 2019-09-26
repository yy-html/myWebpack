'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//设置导入文件的路径
require.config({
	paths: {
		jquery: 'jquery-1.11.3',
		bootstrap: 'bootstrap',
		gongjv: 'gongjv',
		define_test: 'test'
	}
});
//导入js
require(['jquery', 'bootstrap', 'gongjv', 'define_test'], function ($, bootstrap, gongjv, test) {
	$(function () {
		var Fn = function () {
			function Fn(id) {
				_classCallCheck(this, Fn);

				this.a = 5;
			}

			_createClass(Fn, [{
				key: 'mousemove',
				value: function mousemove() {
					alert(1);
				}
			}]);

			return Fn;
		}();
	});
});