
import '../scss/main.scss';
import '../index.html';

import {popup} from './modules/popup'

let popupData = {
    title: 'Hello world',
    text: 'lorem lorem lorem',
    footer: [
        {text: 'Ok',
         function() {
            popupObj.close();
         }
        },
        {text: 'Cancel',
         function() {
            popupObj.close();
         }
        }
    ]
}

window.mod = popup(popupData);


