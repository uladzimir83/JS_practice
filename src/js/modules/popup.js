export let popup = function(options) {
    function createWindow(options) {
        let wrapper = document.createElement('div');

        wrapper.classList.add('popup__wrapper');
        wrapper.insertAdjacentHTML('afterbegin', `
        <div class="popup__overlay">
            <div class="popup__body">
                <div class="popup__header">
                    <h3 class="popup__title">${options.title || 'Welcome'}</h3>
                </div>
                <div class="popup__content">
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
    let popupBody = createWindow({title: 'Заголовок'});

    return {
        open() {
            popupBody.classList.add('open');
        },
        close() {
            popupBody.classList.remove('open');
            popupBody.classList.add('hidden');
            setTimeout(() => {
                popupBody.classList.remove('hidden');
            }, 200);
        }
    }
}