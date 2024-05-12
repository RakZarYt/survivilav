// Класс для работы с попапами
class Popup {
    // инициализация
    constructor(open, close, popup, backgroundPopup) { // открывающий элемент, закрывающий элемент, внутренняя часть, внешняя часть
        this.open = open;
        this.close = close;
        this.popup = popup;
        this.backgroundPopup = backgroundPopup;

        this.open.addEventListener('click', () => this.show());
        this.close.addEventListener('click', () => this.hide());

        this.hide()
    }

    // скрытие попапа
    hide() {
        console.log("Попап скрыт!");
        this.close.classList.remove('active_close');
        this.popup.classList.remove('active');
        this.backgroundPopup.classList.remove('active');
    }

    // открытие попапа
    show() {
        console.log("Попап показан!");
        this.close.classList.add('active_close');
        this.popup.classList.add('active');
        this.backgroundPopup.classList.add('active');
    }
}

// общая информация
let infoPopup = new Popup(document.querySelector('#js-openInfoPopup'), document.querySelector('#js-closeInfoPopup'), document.querySelector('#js-popupInnerInfo'), document.querySelector('#js-popupInfo'));
// получение доступа
let invitePopup = new Popup(document.querySelector('#js-openInvitePopup'), document.querySelector('#js-closeInvitePopup'), document.querySelector('#js-popupInnerInvite'), document.querySelector('#js-popupInvite'));
// общая информация
let infoPopupTel = new Popup(document.querySelector('#js-openInfoPopupTelephone'), document.querySelector('#js-closeInfoPopup'), document.querySelector('#js-popupInnerInfo'), document.querySelector('#js-popupInfo'));
// получение доступа
let invitePopupTel = new Popup(document.querySelector('#js-openInviteTelephone'), document.querySelector('#js-closeInvitePopup'), document.querySelector('#js-popupInnerInvite'), document.querySelector('#js-popupInvite'));
// для телефонов
let telephonePopup = new Popup(document.querySelector('#js-openTelephonePopup'), document.querySelector('#js-closeTelephonePopup'), document.querySelector('#js-popupInnerTelephone'), document.querySelector('#js-popupTelephone'));