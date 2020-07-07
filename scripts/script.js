const [popupAdd, popupEdit, popupAvatar, popupImage] = document.querySelectorAll('.popup');
const addButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit-button');
const avatarButton = document.querySelector('.user-info__photo');
const [closeButton, closeButtonEdit, avatarCloseButton, closeButtonImage] = document.querySelectorAll('.popup__close');
const placesList = document.querySelector('.places-list');
const userNameElement = document.querySelector('.user-info__name');
const userAboutElement = document.querySelector('.user-info__job');
const userAvatarElement = document.querySelector('.user-info__photo');

const serverUrl = 'https://praktikum.tk/cohort11';
const apiHeaders = {
  authorization: '91b74308-54a5-47aa-a76e-98eef3c53923',
  'Content-Type': 'application/json',
}

const api = new Api(serverUrl, apiHeaders);

const imagePopup = new ImagePopup(popupImage, closeButtonImage);
const userInfo = new UserInfo(userNameElement, userAboutElement, userAvatarElement, api);
userInfo.setInitialUserInfo();
const card = new Card(imagePopup, api);
const cardList = new CardList(placesList, card, userInfo, api);
cardList.render();
const formValidator = new FormValidator();

new AddFormPopup(popupAdd, addButton, closeButton, formValidator, api, cardList, card);
new EditFormPopup(popupEdit, editButton, closeButtonEdit, formValidator, api, userInfo);
new AvatarFormPopup(popupAvatar, avatarButton, avatarCloseButton, formValidator, api, userInfo);

/*
  Хорошая работа, класс Api создан, запросы к серверу выполняются, отлично, что реализована
  так же дополнительная часть задания. Однако при организации обмена с сервером есть несколько
  замечаний:

  Надо исправить:
  + не вызывать в конструкторе классов запрос к серверу, вызывать запрос отдельно после создания класса
  + обработка ошибок должна быть в конце цепочки обработки промиса, а не в классе Api
  + все изменения на странице должны происходить только после ответа сервера

  Все подобные места отметил как "Надо исправить" в коде


*/


/*
  Отлично, критические замечания исправлены

  Однако не забудьте исправить - закрытие попапов должно так же выполняться только если
  запрос к серверу выполнился успешно, нужно перенести в блок then
  
  Если у Вас будет свободное время попробуйте освоить работу с сервером
  применив async/await для работы с асинхронными запросами.
  https://learn.javascript.ru/async-await
  https://habr.com/ru/company/ruvds/blog/414373/
  https://www.youtube.com/watch?v=SHiUyM_fFME
  Это часто используется в реальной работе

  Успехов в дальнейшем обучении!

*/