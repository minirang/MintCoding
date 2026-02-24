// localstorage_set
Blockly.Blocks['localstorage_set'] = {
  init: function() {

    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].localstorage_set_1);

    this.appendValueInput("VALUE")
        .appendField(APPENDFIELD[lang].localstorage_set_2);

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_set_3);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(70);

    this.setTooltip(TOOLTIP[lang].localstorage_set);
  }
};

// localstorage_get
Blockly.Blocks['localstorage_get'] = {
  init: function() {
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].localstorage_get);

    this.setOutput(true, "String");
    this.setColour(70);
    this.setTooltip(TOOLTIP[lang].localstorage_get);
  }
};

// localstorage_remove
Blockly.Blocks['localstorage_remove'] = {
  init: function() {
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].localstorage_remove);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
    this.setTooltip(TOOLTIP[lang].localstorage_remove);
  }
};

// localstorage_clear
Blockly.Blocks['localstorage_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_clear);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
    this.setTooltip(TOOLTIP[lang].localstorage_clear);
  }
};

// localstorage_length
Blockly.Blocks['localstorage_length'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_length);

    this.setOutput(true, null);

    this.setColour(70);

    this.setTooltip(TOOLTIP[lang].localstorage_length);
  }
};

// localstorage_index
Blockly.Blocks['localstorage_index'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_index);

    this.appendValueInput("INDEX")
        .setCheck("Number");

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_index_1);

    this.setOutput(true, "String");

    this.setColour(70);

    this.setTooltip(TOOLTIP[lang].localstorage_index);
  }
};

// localstorage_is_have
Blockly.Blocks['localstorage_is_have'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_is_have);

    this.appendValueInput("KEY")
        .setCheck("String");

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].localstorage_is_have_1);

    this.setOutput(true, "Boolean");

    this.setColour(70);

    this.setTooltip(TOOLTIP[lang].localstorage_is_have);
  }
};
