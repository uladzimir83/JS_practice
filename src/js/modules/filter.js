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
        opt.addEventListener('click', function(e) {
            opt.closest('.select__body').classList.contains('is-multiple') ? addMultiSelect(this) : addSingleSelect(this);  
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
                ths.classList.add('selected');
        } else if (type in optionSelected == true && optionSelected[type].indexOf(text, 0) < 0) {
            optionSelected[type].push(text);
            ths.classList.add('selected');
        } else if (type in optionSelected == true && optionSelected[type].indexOf(text, 0) >= 0) {
            optionSelected[type].splice(optionSelected[type].indexOf(text, 0), 1);
            ths.classList.remove('selected');
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

        if (!ths.classList.contains('selected')) {
            for (let option of parent.querySelectorAll('.select__option.selected')) {
                option.classList.remove('selected');
            }
            ths.classList.add('selected');
        };
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
        let data = e.target.parentNode.dataset.screen;
        if (data) {
            let parent = e.target.closest('.select__body');
            for (let option of parent.querySelectorAll('.select__option.selected')) {
                option.classList.remove('selected');
            }
            delete optionSelected[parent.dataset.type];
            e.target.parentNode.innerHTML = data;
            e.target.remove();
        }
        console.log(optionSelected);
    });

     // close select body after click out of the body
    window.addEventListener('click', function(e) {
        if (!e.target.closest('.select__body')) {
        closeBody();
        }
    });
}