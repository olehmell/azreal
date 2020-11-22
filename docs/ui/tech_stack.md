## Стек технологій

### Основа

Airzoom UI Airzoom UI - це PWA (Progresive Web Application)  написаний на мові програмування JavaScript, а саме аз допомогою React фреймворка [Next.js](https://nextjs.org/)

### Інтерфейс
За основу інтерфейсу була взята бібліотека веб компонентів [EUI](https://elastic.github.io/eui/#/), яка дозволяє зручно працювати з даними за допомогою таблиць та графіків.

### Отримання даних

 Для спілкування з базою даних використовується GraphQL та архітектурний проміжний серверний додаток [Hasura](https://hasura.io/). 

Airzoom UI спілкується з сервером Hasura за допомогою [Appolo Client](https://www.apollographql.com/), який в свою чергу має доступ до Postgres бази даних. 


