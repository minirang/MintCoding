javascriptGenerator.forBlock['keydown'] = function(block, generator) {
  const key = block.getFieldValue('KEY');
  const statements = generator.statementToCode(block, 'DO') || '';
  
  return `
document.addEventListener('keydown', async function(event) {
  if (event.key === "${key}") {
    ${statements}
  }
});
`;
};////////////////////////////////////////////////////////////////////////
javascriptGenerator.forBlock['keyup'] = function(block, generator) {
  const key = block.getFieldValue('KEY');
  const statements = generator.statementToCode(block, 'DO') || '';
  
  return `
document.addEventListener('keyup', async function(event) {
  if (event.key === "${key}") {
    ${statements}
  }
});
`;
};
