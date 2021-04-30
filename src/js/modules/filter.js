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
            addSelected(this);
            this.closest('.select__body').classList.remove('is-open');
        });
    }

    // add selected data to object
    var selectedOptions = {};
    function addSelected(ths) {
        let type = ths.closest('.select__body').dataset.type,
            thsText = ths.textContent;

        if (type in selectedOptions == false) {
                selectedOptions[type] = [];
                selectedOptions[type].push(thsText);
        } else if (type in selectedOptions == true && selectedOptions[type].indexOf(thsText, 0) < 0) {
            selectedOptions[type].push(thsText);
        } else if (type in selectedOptions == true && selectedOptions[type].indexOf(thsText, 0) >= 0) {
            selectedOptions[type].splice(selectedOptions[type].indexOf(thsText, 0), 1);
        }
    }

    function closeBody(ths) {
        for (let body of document.querySelectorAll('.select__body')) {
            body.classList.remove('is-open');
            if(ths) {
                ths.closest('.select__body').classList.add('is-open');
            }
        }
    }

     // close select body after click out of the body
    window.addEventListener('click', function(e) {
        if (!e.target.closest('.select__body')) {
        closeBody();
        }
    });
}