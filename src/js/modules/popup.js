export let popup = function(options) {

    function _createWindow(options) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('popup__wrapper');
        wrapper.insertAdjacentHTML('afterbegin', `
        <div class="popup__overlay" data-close="true">
            <div class="popup__body">
                <div class="popup__header">
                    <h3 class="popup__title">${options.title}</h3>
                    <span class="close-popup" data-close="true">&#10006;</span>
                </div>
                <div class="popup__content" data-content>
                    <p class="popup__text">${options.text || 'Здесь могла бы быть ваша реклама'}</p>
                </div>
            </div>
        </div>
        `)
        document.body.prepend(wrapper);
        return wrapper;
    }

    function _createFooter(footer = []) {
        if (footer.length > 0) {
            let footerWrap = document.createElement('div');
            footerWrap.classList.add('popup__footer');

            footer.forEach((btn) => {
                let $btn = document.createElement('button');
                $btn.textContent = btn.text;
                $btn.classList.add('btn');
                $btn.onclick = btn.handler;
                wrap.appendChild($btn);
            });
            document.querySelector('.popup__overlay').appendChild(footerWrap);
            return wrap;
        }
    }

    let popupBody = _createWindow(options);
    let popupFooter = _createFooter(options.footer);
    
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

    document.addEventListener('click', function(e) {
        if(e.target.dataset.close == 'true') {
            popupObj.close();
        }
    });

    return popupObj;
}
