export let initCards = function(options) {

    let cardParent = document.querySelector('#cards-grid .cards-row');

    function _createCard(options) {
        let card = document.createElement('div');
        card.classList.add('cards');
        card.innerHTML = `
            <div class="cards__picture">
                <img src="./img/lambo.jpg" alt="Lamborghini Aventador " class="cards__picture__img">
            </div>
            <div class="cards__info">
                <h3 class="cards__title">${options.title}</h3>
                <p class="cards__info__text">
                    <span class="cards__info__type">type:</span>
                    <span class="cards__info__data">${options.type}</span>
                </p>
                <p class="cards__info__text">
                    <span class="cards__info__type">h.p.:</span>
                    <span class="cards__info__data">${options.power}</span>
                </p>
                <p class="cards__info__text">
                    <span class="cards__info__type">Engine (liters):</span>
                    <span class="cards__info__data">${options.volume}</span>
                </p>
                <p class="cards__info__text">
                    <span class="cards__info__type">transmission:</span>
                    <span class="cards__info__data">${options.transmission}</span>
                </p>
                <p class="cards__info__text">
                    <span class="cards__info__type">top speed:</span>
                    <span class="cards__info__data">${options.speed + ' Km/h'}</span>
                </p>
                <div class="cards__price">
                    Price: 
                    <span class="cards__price__value">200.000</span>
                    <span class="cards__price__symb">$</span>
                </div>
                <div class="cards__more">
                    <a href="#" class="cards__more__link">Read more</a>
                </div>
            </div>
        `
        cardParent.append(card);
    }
    _createCard(options);
}