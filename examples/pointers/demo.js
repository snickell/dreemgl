/* Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
 You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class('$ui/view', function (require, $ui$, screen, view, label) {

	this.flex = 1;
	this.bgcolor = 'gray';

	this.attributes = {
		start: Config({type: Array,  value: []}),
		move: Config({type: Array,  value: []}),
		end: Config({type: Array,  value: []}),
		hover: Config({type: Array,  value: []}),
		tap: Config({type: Array,  value: []})
	}

	this.oninit = function () {
		this.onpointerstart = function(event) {
			this.start = event.value;
		}.bind(this);

		this.onpointermove = function(event) {
			this.move = event.value;
		}.bind(this);

		this.onpointerend = function(event) {
			this.end = event.value;
		}.bind(this);

		this.onpointerhover = function(event) {
			this.hover = event.value;
		}.bind(this);

		this.onpointertap = function(event) {
			this.tap = event.value;
		}.bind(this);
	}

	this.renderLabels = function (type, color) {
		var markers = [];
		for (var i = 0;i < this[type].length; i++) {
			markers.push(label({
				text: i,
				icon: 'play',
				position: 'absolute',
				bgcolor: 'transparent',
				left: this[type][i].x,
				top: this[type][i].y,
				fgcolor: color,
				bordercolor: color,
				borderradius: 0,
				borderwidth: vec4(1,0,1,0),
				padding: vec4(10,0,0,0)
			}, label({
				text: type,
				fgcolor: color,
				bgcolor: 'transparent',
				fontsize: 12,
				position: 'relative',
				top: -22,
				left: -12
			})));
		}
		return markers;
	}

	this.render = function() {
		return [
			this.renderLabels('hover', 'white'),
			this.renderLabels('start', 'red'),
			this.renderLabels('move', 'green'),
			this.renderLabels('end', 'blue'),
			this.renderLabels('tap', 'cyan')
		];
	};

});
