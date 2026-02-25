/////////////////////////////////////////////////////////////////////
// 현재 날짜/시간
javascriptGenerator.forBlock['date_now'] = function(block, generator) {

  const code = `new Date()`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 년도
javascriptGenerator.forBlock['date_year'] = function(block, generator) {

  const code = `new Date().getFullYear()`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 월 (1~12)
javascriptGenerator.forBlock['date_month'] = function(block, generator) {

  const code = `(new Date().getMonth() + 1)`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 일
javascriptGenerator.forBlock['date_day'] = function(block, generator) {

  const code = `new Date().getDate()`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 시
javascriptGenerator.forBlock['date_hour'] = function(block, generator) {

  const code = `new Date().getHours()`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 분
javascriptGenerator.forBlock['date_minute'] = function(block, generator) {

  const code = `new Date().getMinutes()`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 초
javascriptGenerator.forBlock['date_second'] = function(block, generator) {

  const code = `new Date().getSeconds()`;

  return [code, generator.ORDER_ATOMIC];

};

/////////////////////////////////////////////////////////////////////
// 현재 요일
javascriptGenerator.forBlock['date_week'] = function(block, generator) {

  const code = `new Date().toLocaleDateString('${lang}', { weekday: 'long' })`;

  return [code, generator.ORDER_ATOMIC];

};
