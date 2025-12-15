// Створюємо об'єкт formData з пустими значеннями
let formData = {
  email: '',
  message: '',
};

// Отримуємо посилання на форму та її елементи
const form = document.querySelector('.feedback-form');

// Отримання посилання на елемент форми згідно селектора класу
// const emailEl = document.querySelector('.email');
// const messageEl = document.querySelector('.message');

// Отримання посилання на елемент форми згідно назви - значення атрибута name
const emailEl = form.elements.email;
const messageEl = form.elements.message;

// Ключ зберігання даних в localStorage
const localStorageKey = 'feedback-form-state';

// Отримуемо значення з localStorage та встановлюємо початкові значення
const formDataLS = JSON.parse(localStorage.getItem(localStorageKey));
// Якщо такі дані присутні в localStorage
if (formDataLS !== null) {
  // Встановлюємо значення полів вводу - рівними значенням з localStorage
  emailEl.value = formDataLS.email;
  messageEl.value = formDataLS.message;
  // Встановлюємо значення властивостей об'єкту formData - рівними значенням з localStorage
  formData.email = formDataLS.email;
  formData.message = formDataLS.message;
}

// Слухачі подій на формі
form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

// Обробник події  input  на формі
function onInput(event) {
  // Присваювання єлементам вводу даних - значень єлементів форми
  formData.email = emailEl.value.trim();
  formData.message = messageEl.value.trim();
  // Запис значень в localStorage
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

// Обробник події  submit  на формі
function onSubmit(event) {
  // Обнулення події за замовчуванням
  event.preventDefault();
  // Перевірка вводу всіх даних форми
  if (formData.email === '' || formData.message === '') {
    // Вікно помилки з необхідним повідомленням
    alert('Fill please all fields');
    //  Якщо не всі дані введені, то повернення до продовження вводу даних
    return;
  }

  // Виведення в консоль значень об'єкту formData - згідно ЗАВДАННЯ
  console.log(`formData`, formData);

  // Видалення даних з localStorage
  localStorage.removeItem(localStorageKey);
  // Очищення даних з властивостей об'єкту formData
  formData.email = '';
  formData.message = '';

  // Перезавантаження форми та ощищення значень полів форми
  form.reset();
}
