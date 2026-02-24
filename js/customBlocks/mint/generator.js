/////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['mint_print'] = function(block, generator) {

  const text =
    generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';

  return `console.log(${text});\n`;
};

/////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['mint_wait'] = function(block, generator) {

  const time =
    generator.valueToCode(block, 'TIME', generator.ORDER_NONE) || 1;

  return `await new Promise(r=>setTimeout(r, ${time}*1000));\n`;
};

/////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['mint_sha256'] = function(block, generator) {

  const text =
    generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';

  return [
    `await sha256(${text})`,
    generator.ORDER_NONE
  ];
};

/////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['mint_trim'] = function(block, generator) {

  const text =
    generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';

  return [
    `${text}.trim()`,
    generator.ORDER_FUNCTION_CALL
  ];
};

/////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['mint_urlcodec'] = function(block, generator) {

  const text =
    generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';

  const mode =
    block.getFieldValue('MODE');

  const fn =
    mode === "ENCODE"
      ? "encodeURIComponent"
      : "decodeURIComponent";

  return [
    `${fn}(${text})`,
    generator.ORDER_NONE
  ];
};

/////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['mint_copy'] = function(block, generator) {

  const text =
    generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';

  return `copyToClipboard(${text});\n`;
};

/////////////////////////////////////////////////////////////////////
Blockly.JavaScript.forBlock['mint_ip'] = function(block, generator) {

  const code = `(await fetch('https://httpbin.org/ip').then(r => r.json()).then(d => d.origin))`;

  return [code, generator.ORDER_FUNCTION_CALL];
};
