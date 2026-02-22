Blockly.Blocks['mint_print'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .appendField("출력");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(180);

    this.setTooltip(TOOLTIP[lang].mint_print);
  }
};

Blockly.Blocks['mint_wait'] = {
  init: function() {

    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("기다리기");

    this.appendDummyInput()
        .appendField("초");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(210);

    this.setTooltip(TOOLTIP[lang].mint_wait);
  }
};

Blockly.Blocks['mint_sha256'] = {
  init: function() {

    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("SHA256");

    this.setOutput(true, "String");

    this.setColour(260);

    this.setTooltip(TOOLTIP[lang].mint_sha256);
  }
};
