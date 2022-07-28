const buttonSearch = document.querySelector('.header__icon-search');
const closeButton = document.querySelector('.popup__button_close');
const popup = document.querySelector('.popup');

function open() {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
};

function close() {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
};

function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        close();
    }
};

closeButton.addEventListener('click', () => close());
popup.addEventListener('click', (evt) => handleEscClose(evt));
buttonSearch.addEventListener('click', () => open());

