Blockly.Blocks['mint_print'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .appendField(APPENDFIELD[lang].mint_print);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_print);
  }
};

////////////////////////////////////////////////////////////////////
Blockly.Blocks['mint_wait'] = {
  init: function() {

    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField(APPENDFIELD[lang].mint_wait);

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].mint_wait_set1);


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_wait);
  }
};

///////////////////////////////////////////////////////////////////
Blockly.Blocks['mint_sha256'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].mint_sha256);

    this.setOutput(true, "String");

    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_sha256);
  }
};

///////////////////////////////////////////////////////////////////////
Blockly.Blocks['mint_trim'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].mint_trim);

    this.setOutput(true, "String");

    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_trim);
  }
};

///////////////////////////////////////////////////////////////////////
Blockly.Blocks['mint_urlcodec'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].mint_urlcodec)
        .appendField(new Blockly.FieldDropdown([
            [DROPDOWN[lang].encode, "ENCODE"],
            [DROPDOWN[lang].decode, "DECODE"]
        ]), "MODE");

    this.setOutput(true, "String");

    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_urlcodec);
  }
};

///////////////////////////////////////////////////////////////////////
Blockly.Blocks['mint_copy'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(APPENDFIELD[lang].mint_copy);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);


    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_copy);
  }
};

////////////////////////////////////////////////////////////////////
Blockly.Blocks['mint_ip'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(APPENDFIELD[lang].mint_ip);

    this.setOutput(true, "String");

    this.setColour(155);

    this.setTooltip(TOOLTIP[lang].mint_ip);
  }
};
