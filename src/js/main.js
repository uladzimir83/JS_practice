
import '../scss/main.scss';
import '../index.html';

import {popup} from './modules/popup'


var popupData = {
    title: 'Modal window - welcome',
    text: 'You are Welcom on our modal window',
    popupFooter: [ 
        {
         btnText: 'Ok',
         btnClass: 'btn',
         btnType: 'primery',
         btnHandler() {
            pop.close()
         },
        },
        {
         btnText: 'Cancel',
         btnClass: 'btn',
         btnType: 'primery',
         btnHandler() {
            pop.close();
         },
        }
    ],
}

var pop = popup(popupData);

btn.addEventListener('click', function(e) {
    pop.open();
    pop.addContent('добавление контента');
});
