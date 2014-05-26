/* Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Checkbox field.  Checked or not checked.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldRadioButton');

goog.require('Blockly.FieldCheckbox');



/**
 * Class for a checkbox field.
 * @param {radio_button_group} The group that the radio button is a part of.
 * @param {Function} opt_changeHandler A function that is executed when a new
 *     option is selected.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldRadioButton = function(group,opt_changeHandler) {
  Blockly.FieldRadioButton.superClass_.constructor.call(this, 'FALSE', opt_changeHandler);
 
  this.group = group;
  group.addToGroup(this);
 
};
goog.inherits(Blockly.FieldRadioButton, Blockly.FieldCheckbox);



/**
 * Set the checkbox to be checked if strBool is 'TRUE', unchecks otherwise.
 * @param {string} strBool New state.
 */ 
Blockly.FieldRadioButton.prototype.setValue = function(strBool) {
	var oldState = this.state_;
	var newState = (strBool == 'TRUE');
	
  if (this.state_ !== newState) {
    if (newState) {
    	this.group.setSelected(this);
    }
  }
};

  
