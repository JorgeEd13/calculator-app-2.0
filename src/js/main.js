const buttons = document.querySelectorAll('.btnCalc');
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['+', '-', '/', '*'];
let visorValue = document.getElementById('response');
visorValue.value = '';
let storageValue = '';
let deleteArray = '';

buttons.forEach((btnPress) => {
    btnPress.addEventListener('click', () => {
        if (numbers.includes(btnPress.value)) {
            if (btnPress.value === '.' && visorValue.value === '') {
                visorValue.value = '0';
            }
            visorValue.value += btnPress.value;
            if (visorValue.value === '00') {
                visorValue.value = '0';
            }
        }
        if (operations.includes(btnPress.value) == true) {
            visorValue.value += btnPress.value;
            storageValue += visorValue.value;
            visorValue.value = '';
        }
        if (btnPress.value === '=' && visorValue.value != '') {
            storageValue += visorValue.value;
            visorValue.value = eval(storageValue);
        }
        if (btnPress.value === 'D' && visorValue.value != '') {
            deleteArray = Array.from(visorValue.value);
            deleteArray.pop();
            visorValue.value = deleteArray.join('');
        }
        if (btnPress.value === 'R') {
            visorValue.value = '';
            storageValue = '';
        }
    });
});

const styleBtns = document.querySelectorAll('.styleButton');
let cssRoot = document.querySelector(':root');
const cssVariables = ['--backColor', '--fontColor', '--visorColor', '--backButtonColor', '--btnColor', '--btnsDnR', '--btnEqual', '--btnColorBottom', '--btnsDnRBottom', '--btnEqualBottom', '--btnColorHover', '--btnsDnRHover', '--btnEqualHover', '--btnColorHoverBottom', '--btnsDnRHoverBottom', '--btnEqualHoverBottom'];
const themes =
    [
        ['#3b4664', '#fff', '#181f32', '#252d44', '#eae3db', '#647299', '#d13f30', '#b2a295', '#424e74', '#8f2316', '#fff', '#a2b3e1', '#f96c5b', '#b5a598', '#414e71', '#8e2417'],
        ['#E6E6E6', '#000', '#EEEEEE', '#D3CDCD', '#E5E4E0', '#388187', '#C75401', '#A69E91', '#1D5C65', '#873600', '#fff', '#62B5BD', '#FF8A36', '#A69C90', '#195E65', '#8B3A02'],
        ['#17062A', '#FBE039', '#1E0836', '#1E0836', '#331B4D', '#56077C', '#00DFCF', '#86209D', '#BF15F4', '#6EF7EF', '#6B34AC', '#8631B0', '#94FFF9', '#88209B', '#BF15F4', '#71F7EE'],
    ];

styleBtns.forEach((pressStyleBtn, themeIndex) => {
    pressStyleBtn.addEventListener('click', () => {
        let selectedButton = document.querySelector('.selected');
        selectedButton.classList.remove('selected');
        pressStyleBtn.classList.add('selected');

        for (varCSS = 0; varCSS < cssVariables.length; varCSS++) {
            cssRoot.style.setProperty(cssVariables[varCSS], themes[themeIndex][varCSS]);
        }
        console.log(themes[themeIndex]);
    });
});
