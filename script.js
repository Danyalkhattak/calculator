let display = document.getElementById('display');
let keys = document.querySelectorAll('.keys button');

let calculator = {
    displayValue: '',
    firstOperand: '',
    secondOperand: '',
    operator: '',
    result: '',

    clear: function() {
        this.displayValue = '';
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = '';
        this.result = '';
        display.value = '';
    },

    backspace: function() {
        this.displayValue = this.displayValue.slice(0, -1);
        display.value = this.displayValue;
    },

    handleNumber: function(number) {
        this.displayValue += number;
        display.value = this.displayValue;
    },

    handleOperator: function(operator) {
        this.firstOperand = this.displayValue;
        this.operator = operator;
        this.displayValue = '';
    },

    handleEquals: function() {
        this.secondOperand = this.displayValue;
        switch (this.operator) {
            case '+':
                this.result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
                break;
            case '-':
                this.result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand);
                break;
            case '*':
                this.result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
                break;
            case '/':
                this.result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
                break;
            case '%':
                this.result = parseFloat(this.firstOperand) % parseFloat(this.secondOperand);
                break;
            case '√':
                this.result = Math.sqrt(parseFloat(this.firstOperand));
                break;
            case 'x²':
                this.result = parseFloat(this.firstOperand) ** 2;
                break;
        }
        display.value = this.result;
        this.displayValue = '';
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = '';
    }
};

keys.forEach(key => {
    key.addEventListener('click', function() {
        switch (key.id) {
            case 'clear':
                calculator.clear();
                break;
            case 'backspace':
                calculator.backspace();
                break;
            case 'divide':
                calculator.handleOperator('/');
                break;
            case 'multiply':
                calculator.handleOperator('*');
                break;
            case 'subtract':
                calculator.handleOperator('-');
                break;
            case 'add':
                calculator.handleOperator('+');
                break;
            case 'equals':
                calculator.handleEquals();
                break;
            default:
                calculator.handleNumber(key.textContent);
        }
    });
});