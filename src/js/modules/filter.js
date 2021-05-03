export let initFilter = function() {
    let options = {};

    // open select list
    document.addEventListener('click', (e) => {
        if (e.target.dataset.screen) {
            closeBody(e.target);
        }
    });

    // click on option item
    for (let opt of document.querySelectorAll('.select__option')) {
        let parentOpt = opt.closest('.select__body');
        opt.addEventListener('click', function(e) {
            parentOpt.classList.contains('is-multiple') ? addMultiSelect(this) : addSingleSelect(this);  
        });
    }

    // add selected data to object
    var optionSelected = {};

    function addMultiSelect(ths) {
        let parent = ths.closest('.select__body'),
            type = parent.dataset.type,
            text = ths.textContent,
            screen = parent.querySelector('.select__screen'),
            clearBtn = screen.querySelector('.select__clear');

        if (type in optionSelected == false) {
                optionSelected[type] = [];
                optionSelected[type].push(text);
        } else if (type in optionSelected == true && optionSelected[type].indexOf(text, 0) < 0) {
            optionSelected[type].push(text);
        } else if (type in optionSelected == true && optionSelected[type].indexOf(text, 0) >= 0) {
            optionSelected[type].splice(optionSelected[type].indexOf(text, 0), 1);
        }

        screen.innerHTML = optionSelected[type].join(', ');
        addClearBtn(ths);

        if (optionSelected[type].length == 0) {
            delete optionSelected[type];
            screen.innerHTML = 'Choose';
            clearBtn.remove();
            closeBody(null);
        }
    }

    function addSingleSelect(ths) {
        let parent = ths.closest('.select__body'),
            type = parent.dataset.type,
            screen = parent.querySelector('.select__screen');

        screen.innerHTML = ths.textContent;
        optionSelected[type] = ths.textContent;
        addClearBtn(ths);
        closeBody(null);
    }

    function closeBody(ths) {
        for (let body of document.querySelectorAll('.select__body')) {
            body.classList.remove('is-open');
            if(ths) {
                ths.closest('.select__body').classList.add('is-open');
            }
        }
    }

    function addClearBtn(ths) {
        let isBtn = ths.closest('.select__body').querySelector('.select__screen'),
            btnClear = document.createElement('span');

        btnClear.classList.add('select__clear');

        isBtn.querySelector('.select__clear') ? null : isBtn.append(btnClear);
    }

    document.addEventListener('click', (e) => {
        if (e.target.parentNode.dataset.screen) {
            let attr = e.target.closest('.select__body').dataset.type;
            delete optionSelected[attr];
            e.target.parentNode.innerHTML = 'Choose';
            e.target.remove();
        }
    });

     // close select body after click out of the body
    window.addEventListener('click', function(e) {
        if (!e.target.closest('.select__body')) {
        closeBody();
        }
    });
}