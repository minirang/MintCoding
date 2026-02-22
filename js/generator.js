Blockly.JavaScript['mint_print'] = function(block) {

  const text = Blockly.JavaScript.valueToCode(
      block,
      'TEXT',
      Blockly.JavaScript.ORDER_NONE
  );

  return `console.log(${text});\n`;
};

Blockly.JavaScript['mint_wait'] = function(block) {

  const time = Blockly.JavaScript.valueToCode(
      block,
      'TIME',
      Blockly.JavaScript.ORDER_NONE
  ) || 1;

  const code = `
await new Promise(resolve =>
  setTimeout(resolve, ${time} * 1000)
);
`;

  return code;
};

Blockly.JavaScript['mint_sha256'] = function(block) {

  const text = Blockly.JavaScript.valueToCode(
      block,
      'TEXT',
      Blockly.JavaScript.ORDER_NONE
  ) || '""';

  const code = `await sha256(${text})`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

