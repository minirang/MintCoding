javascriptGenerator.forBlock['keydown'] = function(block, generator) {
  const key = block.getFieldValue('KEY');
  const statements = generator.statementToCode(block, 'DO') || '';
  
  return `
document.addEventListener('keydown', function(event) {
  if (event.key === "${key}") {
    ${statements}
  }
});
`;
};
////////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['keyup'] = function(block, generator) {
  const key = block.getFieldValue('KEY');
  const statements = generator.statementToCode(block, 'DO') || '';
  
  return `
document.addEventListener('keyup', function(event) {
  if (event.key === "${key}") {
    ${statements}
  }
});
`;
};
