
import '../scss/main.scss';
import '../index.html';

import {popup} from './modules/popup'
import {initCards} from './modules/cards'

initCards({
    title: 'Reno',
    type: 'Hatchback',
    power: 120,
    volume: 2.2,
    transmission: 'M',
    speed: 200,
});


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
