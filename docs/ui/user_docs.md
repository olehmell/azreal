## Можливості інтерфейсу користувача
![home page](img/ui_home_page.png)

Користуватись застосунком може лише авторизований користувач, який в залежності від ролі
[ **користувач** / **менеджер** ] має такі можливості:

|                                    |Користувач|Менеджер|
|------------------------------------|----------|--------|
|Перегляд та експорт вимірювань      |+         |+       |
|Перегляд інформації по датчиках     |+         |+       |
|Перегляд сервісного журналу датчика |+         |+       |
|Додавання та видалення датчиків     |-         |+       |
|Ведення сервісного журналу          |-         |+       |
|Менеджмент організацій              |-         |+       |
|Менеджмент користувачів             |-         |+       |

## Авторизація

![login page](img/ui_login_page.png)

Здійсьнюється за допомогою логіну(email) та паролю.
Для успішного входу, логін та пароль користувача має бути зареєстровані менеджером та передані користувачу. 
Користувач може змінити логін та пароль у власному кабінеті.

## Перегляд та експорт вимірювань
Щоб отримати вимірювання за певний період потрібно ввести у відповідні поля:

 - рівень агрегації
 - початкову дату
 - кінцеву дату
 - ід датчика

Після чого написнути кнопку: "Отримати", після процесу обробки даних на екрані з'явиться відповідна таблиця та графік. 

### Таблиця

Операції які можна робити над даними в таблиці, відповідають кнопкам у шапці таблиці і мають такі функції:

 - Експорт даних(у csv файд)
 - Фільтрація колонок
 - Сортування за колонками
 - Перехід в повноекраний режим

###  Графік
![graph](img/ui_graph.png)

Має можливість переглянути інформацію по кожному параметру окремо, навігація здійснюється перемиканням кнопок під графіком.

## Перегляд інформації по датчиках 
Можна отримати коротку інформацію про кожний встановлений датчик:

### Табличний вигляд
Містить коротку інформацію, а саме:

 - ід датчика
 - модель
 - виробник
 - адресу розташування

### Детальний вигляд

Додатково містить інформацію про вимірювальні фактори, а також можливість отримати вибірку вимірювань та переглянути сервісний журнал цього датчика

## Перегляд сервісного журналу датчика
Щоб отримати список записів журналу за певний період потрібно ввести у відповідні поля:
 - початкову дату
 - кінцеву дату
 - ід датчика

Отримуємо інформацію:

 - Час проведення
 - Тип робіт
 - Фото та документи

## Додавання та видалення датчиків
### Додавання
Для додавання датчиків потрібно заповнити відповідні поля:

 - ід сенсора на сервісі Airly
 - модель
 - виробника
 - час встановлення 
 - фото та документи

Всі інші необхідні дані в автоматичному режимі підтягуються з сервері Airly.
### Видалення

Для видалення потрібно:

 -  написнути відповідну кнопку на сторінці датчика
 - у випливаючому вікні заповнити форму для запису в сервісний журнал
 
 Після успішного заповнення, датчик видалиться, але вся інформація про його обслуговування залишиться в базі



## Ведення сервісного журналу
### Додавання
Для додавання нового запису, потрібно вибрати відповідний пункт в меню, та заповнити форму та прикріпити фото та документи.

### Видалення
Видалення відбувається написканням на відповідну іконку в правому верхньму куті пане запис в журналі

# Менеджмент організацій 

### Табличний вигляд перегляду
Містить коротку інформацію, а саме:

 - Повна назва
 - Коротка назва
 - Країна
 - Код платника податків

### Створення
Для додавання нової організації, потрібно вибрати відповідний пункт в меню, заповнити форму та документ який індентифікує організацію.

### Видалення
Для видалення потрібно перейти на сторінку організації та натиснути відповідну кнопку.

### Редагування
Для видалення потрібно перейти на сторінку організації та натиснути відповідну кнопку.

# Менеджмент користувачів 

### Табличний вигляд перегляду
Містить коротку інформацію, а саме:

 - ПІБ користувача
 - Email
 - Номер телефону
 - Рівень доступу
 - Організація

### Створення
Для додавання нового користувача, потрібно вибрати відповідний пункт в меню, заповнити форму.
**Увага:** _після успішного створення користувача, генерується випадковий пароль, який потрібно передати користувачу для входу_

### Видалення
Для видалення потрібно перейти на сторінку організації та натиснути відповідну кнопку.

### Редагування
Для видалення потрібно перейти на сторінку організації та натиснути відповідну кнопку.