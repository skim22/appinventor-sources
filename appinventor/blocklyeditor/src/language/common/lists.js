/**
 * Visual Blocks Language
 *
 * Copyright 2012 Massachusetts Institute of Technology. All rights reserved.
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
 * @fileoverview List blocks for Blockly, modified for App Inventor
 * @author fraser@google.com (Neil Fraser)
 * @author andrew.f.mckinney@gmail.com (Andrew F. McKinney)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.lists_mapDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_MAPOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_ITEMND)
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('EXPRESSION')
		    	.appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_EXPRESSION)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_VAR,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		         .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_TO)            
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO')
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_DO);
		    //this.setOutput(true, null);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_MAPOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_MAPOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};

Blockly.Language.lists_mapNonDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_MAPOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_ITEMD)
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('EXPRESSION')
		    	.appendTitle(Blockly.LANG_LISTS_MAPOVEREACHND_INPUT_EXPRESSION)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_VAR,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		         .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_TO)            
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO')
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_DO);
		    this.setOutput(true, null);
		    //this.setPreviousStatement(true);
		    //this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_MAPOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_MAPOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_MAPOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};


Blockly.Language.lists_filterDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_FILTEROVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        /*.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_ITEM)
		        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_VAR,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')*/
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACHD_INPUT_ITEM)
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('PREDICATE')
		    	.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_PREDICATE)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_VAR,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		         .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_SATISFY)
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO')
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    //this.setOutput(true, null);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FILTEROVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};

Blockly.Language.lists_filterNonDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_FILTEROVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        /*.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_ITEM)
		        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_VAR,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')*/
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACHND_INPUT_ITEM)
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('PREDICATE')
		    	.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACHND_INPUT_PREDICATE)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_VAR,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		         .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_SATISFY)
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO')
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    this.setOutput(true, null);
		    //this.setPreviousStatement(true);
		    //this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FILTEROVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};


Blockly.Language.lists_sortComparatorNonDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORTOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM)
		        //.setAlign(Blockly.ALIGN_LEFT)
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('COMPARATOR')
		    	.appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COMPARATOR)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM1,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_AND)
		        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM2,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR2')  
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO');
		        //.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    //this.setOutput(true, null);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORTOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};



Blockly.Language.lists_sortComparatorDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORTOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACHD_INPUT_ITEM)
		        //.setAlign(Blockly.ALIGN_LEFT)
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('COMPARATOR')
		    	.appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COMPARATOR)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM1,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_AND)
		        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM2,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR2')  
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO');
		        //.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    this.setOutput(true, null);
		    //this.setPreviousStatement(true);
		    //this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORTOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};

Blockly.Language.lists_sortKeyNonDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORTOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM)
		        //.setAlign(Blockly.ALIGN_LEFT)
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('KEY')
		    	.appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_KEY)
		    	
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_VAR,
                    true, // name is editable
                    Blockly.FieldFlydown.DISPLAY_BELOW),
		    			'VAR')
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO');
		        //.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    //this.setOutput(true, null);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORTOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};


Blockly.Language.lists_sortKeyDestructive = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORTOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACHD_INPUT_ITEM)
		        //.setAlign(Blockly.ALIGN_LEFT)
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('KEY')
		    	.appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_KEY)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_VAR,
                    true, // name is editable
                    Blockly.FieldFlydown.DISPLAY_BELOW),
		    			'VAR')
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    
		    this.appendIndentedValueInput('DO');
		        //.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    this.setOutput(true, null);
		    //this.setPreviousStatement(true);
		    //this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORTOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORTOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_SORTOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};



Blockly.Language.lists_sortNonDestructive = {
		  // Make a copy of list.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORT_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
		    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('make new sorted ').appendTitle('list');
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORT_TOOLTIP);
		    this.appendCollapsedInput().appendTitle('sort', 'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORT_TITLE_SORT }]
		};

Blockly.Language.lists_sortDestructive = {
		  // Make a copy of list.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORT_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('sort existing ').appendTitle('list');
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORT_TOOLTIP);
		    this.appendCollapsedInput().appendTitle('sort', 'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORT_TITLE_SORT }]
		};


Blockly.Language.lists_reverseNonDestructive = {
		  // Make a copy of list.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_REVERSE_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
		    //this.setPreviousStatement(true);
		    //this.setNextStatement(true);
		    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('make new reversed ').appendTitle('list');
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REVERSE_TOOLTIP);
		    this.appendCollapsedInput().appendTitle('sort', 'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_REVERSE_TITLE_SORT }]
		};

Blockly.Language.lists_reverseDestructive = {
		  // Make a copy of list.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_REVERSE_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('reverse existing ').appendTitle('list');
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REVERSE_TOOLTIP);
		    this.appendCollapsedInput().appendTitle('sort', 'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_REVERSE_TITLE_SORT }]
		};


Blockly.Language.lists_reduceOverEach = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_SORTOVEREACH_HELPURL,
		  init : function() {
		    this.setColour(Blockly.LIST_CATEGORY_HUE);
		    //this.setOutput(true, null);
		    // [lyn, 10/07/13] Changed default name from "i" to "item"
		    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
		    // Old code:
		    // this.appendValueInput('VAR').appendTitle('for range').appendTitle('variable').setAlign(Blockly.ALIGN_RIGHT);
		    // this.appendValueInput('START').setCheck(Number).appendTitle('start').setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('LIST')
		        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
		        .appendTitle(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_ITEM)
		        .appendTitle(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_INLIST)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendValueInput('NULL')
		    	.appendTitle(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_NULL)
		        .setAlign(Blockly.ALIGN_RIGHT);
		    this.appendDummyInput('COMBINE')
		    	.appendTitle(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_COMBINE)
		    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_HEAD,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR')
		        .appendTitle(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_AND)
		        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_ANSWER,
		                                                       true, // name is editable
		                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
		                     'VAR2') 
		    	.setAlign(Blockly.ALIGN_RIGHT);
		    this.appendIndentedValueInput('DO');
		        //.appendTitle(Blockly.LANG_LISTS_FILTEROVEREACH_INPUT_DO);
		    this.setOutput(true, null);
		    //this.setPreviousStatement(true);
		    //this.setNextStatement(true);
		    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REDUCEOVEREACH_TOOLTIP);
		    this.appendCollapsedInput()
		        .appendTitle(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_COLLAPSED_PREFIX
		                        + ' '   + this.getTitleValue('VAR') + ' '
		                        + Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_COLLAPSED_SUFFIX,
		                     'COLLAPSED_TEXT');
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var doBlock = this.getInputTargetBlock('DO');
		    if (doBlock) {
		      return [doBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_ITEM }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_COLLAPSED_PREFIX
		            + ' '   + this.getTitleValue('VAR') + ' '
		            + Blockly.LANG_LISTS_REDUCEOVEREACH_INPUT_COLLAPSED_SUFFIX);
		  }
		};




Blockly.Language.lists_create_with = {
  // Create a list with any number of elements of any type.
  category: Blockly.LANG_CATEGORY_LISTS,
  helpUrl: Blockly.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL,
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('ADD0')
        .appendTitle("make a list");
    this.appendValueInput('ADD1');
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP);
    this.itemCount_ = 2;
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'ADD';
    this.appendCollapsedInput().appendTitle('make a list', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function(workspace){
    return Blockly.decompose(workspace,'lists_create_with_item',this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function(){
    this.appendDummyInput(this.emptyInputName)
      .appendTitle(Blockly.LANG_LISTS_CREATE_EMPTY_TITLE);
  },
  addInput: function(inputNum){
    var input = this.appendValueInput(this.repeatingInputName + inputNum);
    if(inputNum === 0){
      input.appendTitle("make a list");
    }
    return input;
  },
  updateContainerBlock: function(containerBlock) {
    containerBlock.setTitleValue(Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD,"CONTAINER_TEXT");
  },
  // create type blocks for both make a list (two items) and create empty list
  typeblock: [
      { translatedName: Blockly.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST },
      { translatedName: Blockly.LANG_LISTS_CREATE_EMPTY_TITLE,
        mutatorAttributes: { items: 0 } }]

};

Blockly.Language.lists_create_with_item = {
  // Add items.
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Language.lists_add_items = {
  // Create a list with any number of elements of any type.
  category: Blockly.LANG_CATEGORY_LISTS,
  helpUrl: Blockly.LANG_LISTS_ADD_ITEMS_HELPURL,
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('add items to list').appendTitle(' list');
    this.appendValueInput('ITEM0').appendTitle('item').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_ADD_ITEMS_TOOLTIP);
    this.setMutator(new Blockly.Mutator(['lists_add_items_item']));
    this.itemCount_ = 1;
    this.emptyInputName = null;
    this.repeatingInputName = 'ITEM';
    this.appendCollapsedInput().appendTitle('add items list', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function(workspace){
    return Blockly.decompose(workspace,'lists_add_items_item',this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function(){},
  addInput: function(inputNum){
    var input = this.appendValueInput(this.repeatingInputName + inputNum);
    input.appendTitle('item').setAlign(Blockly.ALIGN_RIGHT);
    return input;
  },
  updateContainerBlock: function(containerBlock) {
    containerBlock.setTitleValue(Blockly.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD,"CONTAINER_TEXT");
    containerBlock.setTooltip(Blockly.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.LANG_LISTS_ADD_ITEMS_TITLE_ADD }]

};

Blockly.Language.lists_add_items_item = {
  // Add items.
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_LISTS_ADD_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_LISTS_ADD_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Language.lists_is_in = {
  // Is in list?.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_IS_IN_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("boolean",Blockly.Language.OUTPUT));
    this.appendValueInput('ITEM').appendTitle('is in list?').appendTitle('thing');
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_IS_IN_TOOLTIP);
    this.appendCollapsedInput().appendTitle('in list', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_IS_IN_TITLE_IS_IN }]
};


Blockly.Language.lists_length = {
  // Length of list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_LENGTH_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('length of list').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_LENGTH_TOOLTIP);
    this.appendCollapsedInput().appendTitle('length', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH }]
};

Blockly.Language.lists_is_empty = {
  // Is the list empty?.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_IS_EMPTY_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("boolean",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('is list empty?').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_IS_EMPTY_TOOLTIP);
    this.appendCollapsedInput().appendTitle('is empty?', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_TITLE_IS_EMPTY }]
};

Blockly.Language.lists_pick_random_item = {
  // Length of list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, null);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('pick a random item').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_PICK_RANDOM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('pick random', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM }]
};

Blockly.Language.lists_position_in = {
  // Postion of item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_POSITION_IN_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.OUTPUT));

    this.appendValueInput('ITEM').appendTitle('index in list').appendTitle('thing');
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_POSITION_IN_TOOLTIP);
    this.appendCollapsedInput().appendTitle('index', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_POSITION_IN_TITLE_POSITION }]
};


Blockly.Language.lists_select_item = {
  // Select from list an item.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, null);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('select list item').appendTitle('list');
    this.appendValueInput('NUM').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SELECT_ITEM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('select', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_SELECT_ITEM_TITLE_SELECT }]
};

Blockly.Language.lists_insert_item = {
  // Insert Item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_INSERT_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('insert list item').appendTitle('list');
    this.appendValueInput('INDEX').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ITEM').setCheck(Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.INPUT)).appendTitle('item').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_INSERT_TOOLTIP);
    this.appendCollapsedInput().appendTitle('insert', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_INSERT_TITLE_INSERT_LIST }]
};

Blockly.Language.lists_replace_item = {
  // Replace Item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_REPLACE_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('replace list item').appendTitle('list');
    this.appendValueInput('NUM').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ITEM').appendTitle('replacement').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REPLACE_ITEM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('replace', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE }]
};

Blockly.Language.lists_remove_item = {
  // Remove Item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_REMOVE_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('remove list item').appendTitle('list');
    this.appendValueInput('INDEX').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REMOVE_ITEM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('remove', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE }]
};

Blockly.Language.lists_append_list = {
  // Append to list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_APPEND_LIST_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST0').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('append to list').appendTitle('list1');
    this.appendValueInput('LIST1').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list2').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_APPEND_LIST_TOOLTIP);
    this.appendCollapsedInput().appendTitle('append', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_APPEND_LIST_TITLE_APPEND }]
};


Blockly.Language.lists_copy = {
  // Make a copy of list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_COPY_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('copy list').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_COPY_TOOLTIP);
    this.appendCollapsedInput().appendTitle('copy', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_COPY_TITLE_COPY }]
};

Blockly.Language.lists_is_list = {
  // Is a list?
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_IS_LIST_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("boolean",Blockly.Language.OUTPUT));
    this.appendValueInput('ITEM').appendTitle('is a list?').appendTitle('thing');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_IS_LIST_TOOLTIP);
    this.appendCollapsedInput().appendTitle('list?', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_IS_LIST_TITLE_IS_LIST }]
};

Blockly.Language.lists_to_csv_row = {
  // Make a csv row from list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_TO_CSV_ROW_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list to csv row').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_TO_CSV_ROW_TOOLTIP);
    this.appendCollapsedInput().appendTitle('to csv row', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV }]
};

Blockly.Language.lists_to_csv_table = {
  // Make a csv table from list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_TO_CSV_TABLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list to csv table').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_TO_CSV_TABLE_TOOLTIP);
    this.appendCollapsedInput().appendTitle('to csv table', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV }]
};

Blockly.Language.lists_from_csv_row = {
  // Make list from csv row.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_FROM_CSV_ROW_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('TEXT').setCheck(Blockly.Language.YailTypeToBlocklyType("text",Blockly.Language.INPUT)).appendTitle('list from csv row').appendTitle('text');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FROM_CSV_ROW_TOOLTIP);
    this.appendCollapsedInput().appendTitle('from csv row', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV }]
};

Blockly.Language.lists_from_csv_table = {
  // Make list from csv table.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_FROM_CSV_TABLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('TEXT').setCheck(Blockly.Language.YailTypeToBlocklyType("text",Blockly.Language.INPUT)).appendTitle('list from csv table').appendTitle('text');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP);
    this.appendCollapsedInput().appendTitle('from csv table', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV }]
};

Blockly.Language.lists_lookup_in_pairs = {
  // Look up in a list of pairs (key, value).
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.OUTPUT));
    this.appendValueInput('KEY').setCheck(Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.INPUT)).appendTitle('lookup in pairs').appendTitle('key');
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('pairs').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('NOTFOUND').setCheck(Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.INPUT)).appendTitle('notFound').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP);
    this.appendCollapsedInput().appendTitle('lookup', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS }]
};

