export let popup = function(options) {
    function _createWindow(options) {
        let wrapper = document.createElement('div');

        wrapper.classList.add('popup__wrapper');
        wrapper.insertAdjacentHTML('afterbegin', `
        <div class="popup__overlay" data-close="true">
            <div class="popup__body">
                <div class="popup__header">
                    <h3 class="popup__title">${options.title || 'Welcome'}</h3>
                    <span class="close-popup" data-close="true"></span>
                </div>
                <div class="popup__content" data-content>
                    <p class="popup__text">${options.text || 'Здесь могла бы быть ваша реклама'}</p>
                </div>
                <div class="popup__footer">
                    <button class="popup__btn"></button>
                    <button class="popup__btn"></button>
                </div>
            </div>
        </div>
        `)
        document.body.prepend(wrapper);
        return wrapper;
    }

    function _createFooter(footer = []) {
        if (footer.length == 0) {
            return document.createElement('div');
        }

        footer.forEach((btn) => {

        });
    }

    let popupBody = _createWindow({title: 'Заголовок'});
    let popupObj = {
        open() {
            popupBody.classList.add('open');
        },
        close() {
            popupBody.classList.remove('open');
            popupBody.classList.add('hidden');
            setTimeout(() => {
                popupBody.classList.remove('hidden');
            }, 200);
        },
        addContent(html) {
            popupBody.querySelector('[data-content]').innerHTML = html;
        }
    }

    popupBody.addEventListener('click', function(e) {
        if(e.target.dataset.close == 'true') {
            popupObj.close();
        }
    });

    return popupObj;
}