---
description: Псевдокласс user-invalid представляет любой валидированный элемент формы, значение которого не является валидным в соответствии с ограничениями валидации после того, как пользователь с ним взаимодействовал
---

# :user-invalid

Псевдокласс **`:user-invalid`** представляет любой валидированный элемент формы, значение которого не является валидным в соответствии с ограничениями валидации после того, как пользователь с ним взаимодействовал.

Псевдокласс `:user-invalid` должен соответствовать элементу [`:invalid`](./invalid.md), [`:out-of-range`](./out-of-range.md) или пустому элементу [`:required`](./required.md) в период между попыткой отправки формы пользователем и повторным взаимодействием пользователя с элементом формы.

## Синтаксис {#syntax}

```css
:user-invalid {
    /* ... */
}
```

## Спецификации {#specifications}

-   [Selectors Level 4](https://drafts.csswg.org/selectors/#user-invalid-pseudo)

## Пример {#example}

### Установка цвета и символа на `:user-invalid`

В следующем примере красная рамка и символ ❌ отображаются только после того, как пользователь взаимодействует с полем. Попробуйте ввести не адрес электронной почты, а что-нибудь другое, чтобы увидеть это в действии.

=== "HTML"

    ```html
    <form>
    	<label for="email">Email *: </label>
    	<input id="email" name="email" type="email" required />
    	<span></span>
    </form>
    ```

=== "CSS"

    ```css
    input:user-invalid {
    	border: 2px solid red;
    }

    input:user-invalid + span::before {
    	content: '✖';
    	color: red;
    }
    ```

## Ссылки {#links}

-   [MDN :user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
