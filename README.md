# Cellular Payment terminal – an example of frontend application

**React, React - Redux, Redux - Saga, Bootstrap**

Demo: https://ayubondarenko.github.io/cellular_payment_terminal/

_Installation_: `npm run build`

_Open in browser_: _`./docs/index.html`_

<hr>

# Ответ на Тестовое задание на позицию frontend-разработчик
https://github.com/shakurocom/FrontEnd-Test

Задание 1:
---------

Код можно переписать следующим образом:

```
function func1(s, a, b) {
    if(!s || !s.length )return -1;
    for(var i = s.length-1; i>0; i--){
        if(s[i] == a ||s[i] == b){
            return i;
        }
    }
    return -1;
}
```


Задание 2:
-------

Задание выполнено с помощью библиотек: React, React - Redux, Redux - Saga, Bootstrap

Для ввода данных с маской использовались:  react-input-mask,  react-simple-currency

Для эмуляции получения данных использовалась: Redux — Saga  yield delay(500);

Для эмуляции отправки данных на сервер использовался  Redux — Saga 

```
yield  call(send_payment);
function send_payment() {
    const promise = new Promise((resolve, reject) => {
        const isPaid = Math.random() >= 0.5;
        if (isPaid) setTimeout(resolve, 800, isPaid);
        else setTimeout(reject, 1000, isPaid);
    });
    return promise;
    }
```

**Общий подход при написании приложения:**

Пользователь вызывает событие,  Redux — Saga +  Redux отрабатывают события и меняют состояние данных. React выводит страницы в соответствии  с изменившемся состоянием данных.
