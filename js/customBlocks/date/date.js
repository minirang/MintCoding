// 현재 날짜/시간
Blockly.Blocks['date_now'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_now);
        this.setOutput(true, "Date");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_now);
    }
};

// 현재 년도
Blockly.Blocks['date_year'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_year);
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_year);
    }
};

// 현재 월
Blockly.Blocks['date_month'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_month);
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_month);
    }
};

// 현재 일
Blockly.Blocks['date_day'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_day);
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_day);
    }
};

// 현재 시
Blockly.Blocks['date_hour'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_hour);
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_hour);
    }
};

// 현재 분
Blockly.Blocks['date_minute'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_minute);
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_minute);
    }
};

// 현재 초
Blockly.Blocks['date_second'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_second);
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_second);
    }
};

// 현재 요일
Blockly.Blocks['date_week'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(APPENDFIELD[lang].date_week);
        this.setOutput(true, "String");
        this.setColour(0);
        this.setTooltip(TOOLTIP[lang].date_week);
    }
};
