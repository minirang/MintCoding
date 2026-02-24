javascriptGenerator.forBlock['localstorage_set'] = function(block, generator) {

  const key = generator.valueToCode(block, 'KEY', generator.ORDER_NONE) || '""';
  const value = generator.valueToCode(block, 'VALUE', generator.ORDER_NONE) || '""';

  return `localStorage.setItem(${key}, ${value}); console.log("Added");\n`;
};

/////////////////////////////////////////////////////////////////////

javascriptGenerator.forBlock['localstorage_get'] = function(block, generator) {

  const key = generator.valueToCode(block, 'KEY', generator.ORDER_NONE) || '""';

  return [`localStorage.getItem(${key})`, generator.ORDER_NONE];
};

/////////////////////////////////////////////////////////////////////

javascriptGenerator.forBlock['localstorage_remove'] = function(block, generator) {

  const key = generator.valueToCode(block, 'KEY', generator.ORDER_NONE) || '""';

  return `localStorage.removeItem(${key});\n`;
};

/////////////////////////////////////////////////////////////////////

javascriptGenerator.forBlock['localstorage_clear'] = function(block, generator) {

  return `localStorage.clear();  console.log("Cleared");\n`;
};

/////////////////////////////////////////////////////////////////////

javascriptGenerator.forBlock['localstorage_length'] = function(block, generator) {

  const code = `localStorage.length`;

  return [
    code,
    generator.ORDER_NONE
  ];
};

/////////////////////////////////////////////////////////////////////

javascriptGenerator.forBlock['localstorage_index'] = function(block, generator) {

  const index =
    generator.valueToCode(block, 'INDEX', generator.ORDER_NONE) || '0';

  const code =
    `localStorage.getItem(localStorage.key(${index}))`;

  return [code, generator.ORDER_FUNCTION_CALL];
};

/////////////////////////////////////////////////////////////////////

javascriptGenerator.forBlock['localstorage_is_have'] = function(block, generator) {

  const key =
    generator.valueToCode(block, 'KEY', generator.ORDER_NONE) || '""';

  const code =
    `localStorage.getItem(${key}) !== null`;

  return [code, generator.ORDER_RELATIONAL];
};
