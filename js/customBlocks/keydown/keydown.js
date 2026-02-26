Blockly.Blocks['keydown'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(APPENDFIELD[lang].key1)
      .appendField(new Blockly.FieldDropdown([
        ["A","a"],["B","b"],["C","c"],["D","d"],["E","e"],
        ["F","f"],["G","g"],["H","h"],["I","i"],["J","j"],
        ["K","k"],["L","l"],["M","m"],["N","n"],["O","o"],
        ["P","p"],["Q","q"],["R","r"],["S","s"],["T","t"],
        ["U","u"],["V","v"],["W","w"],["X","x"],["Y","y"],["Z","z"],
        ["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],
        ["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],
        ["↑","ArrowUp"],["↓","ArrowDown"],["←","ArrowLeft"],["→","ArrowRight"],
        ["Space"," "],["Enter","Enter"],["ESC","Escape"],["Tab","Tab"],
        ["Backspace","Backspace"],["Delete","Delete"],["Insert","Insert"],
        ["Home","Home"],["End","End"],["PageUp","PageUp"],["PageDown","PageDown"],
        ["Shift","Shift"],["Control","Control"],["Alt","Alt"],
        ["CapsLock","CapsLock"],["NumLock","NumLock"],["ScrollLock","ScrollLock"],
        ["F1","F1"],["F2","F2"],["F3","F3"],["F4","F4"],
        ["F5","F5"],["F6","F6"],["F7","F7"],["F8","F8"],
        ["F9","F9"],["F10","F10"],["F11","F11"],["F12","F12"],
        ["`","`"],["-","-"],["=","="],["[","["],["]","]"],["\\","\\"],
        [";",";"],["'","'"],[",",","],[ ".", "." ],["/","/"]
      ]), "KEY")
      .appendField(APPENDFIELD[lang].keydown);

    this.appendStatementInput("DO")
        .setCheck(null);

    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(TOOLTIP[lang].keydown);
  }
};

Blockly.Blocks['keyup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(APPENDFIELD[lang].key1)
      .appendField(new Blockly.FieldDropdown([
        ["A","a"],["B","b"],["C","c"],["D","d"],["E","e"],
        ["F","f"],["G","g"],["H","h"],["I","i"],["J","j"],
        ["K","k"],["L","l"],["M","m"],["N","n"],["O","o"],
        ["P","p"],["Q","q"],["R","r"],["S","s"],["T","t"],
        ["U","u"],["V","v"],["W","w"],["X","x"],["Y","y"],["Z","z"],
        ["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],
        ["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],
        ["↑","ArrowUp"],["↓","ArrowDown"],["←","ArrowLeft"],["→","ArrowRight"],
        ["Space"," "],["Enter","Enter"],["ESC","Escape"],["Tab","Tab"],
        ["Backspace","Backspace"],["Delete","Delete"],["Insert","Insert"],
        ["Home","Home"],["End","End"],["PageUp","PageUp"],["PageDown","PageDown"],
        ["Shift","Shift"],["Control","Control"],["Alt","Alt"],
        ["CapsLock","CapsLock"],["NumLock","NumLock"],["ScrollLock","ScrollLock"],
        ["F1","F1"],["F2","F2"],["F3","F3"],["F4","F4"],
        ["F5","F5"],["F6","F6"],["F7","F7"],["F8","F8"],
        ["F9","F9"],["F10","F10"],["F11","F11"],["F12","F12"],
        ["`","`"],["-","-"],["=","="],["[","["],["]","]"],["\\","\\"],
        [";",";"],["'","'"],[",",","],[ ".", "." ],["/","/"]
      ]), "KEY")
      .appendField(APPENDFIELD[lang].keyup);

    this.appendStatementInput("DO")
        .setCheck(null);

    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(TOOLTIP[lang].keyup);
  }
};
