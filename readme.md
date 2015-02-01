# stepForm - Formulários com passos

> em desenvolvimento, faltam algumas funções principais, como envio e validação.

Estrutura básica:


### 1. Os passos:

Aqui, o importante é a estrutura dos Steps. Usamos o [semantic-ui](http://www.semantic-ui.com)

```html
<div class="ui ordered fluid steps">
  <div class="active step" onclick="goToStep(0)">
    <div class="content">
      <div class="title">Título do passo</div>
      <div class="description">Descrição do passo</div>
    </div>
  </div>
  <div class="disabled step" onclick="goToStep(1)">
    <div class="content">
      <div class="title">Titulo do passo 2</div>
      <div class="description">Detalhes e descrição do passo 2</div>
    </div>
  </div>
  <div class="disabled step" onclick="goToStep(2)">
    <div class="content">
      <div class="title">Titulo do passo 3</div>
      <div class="description">Detalhes do passo 3</div>
    </div>
  </div>
</div>
```

### 2. As telas do formulário

Aqui, o importante é a classe `.stepForm` em seu formulário, a classe `.formStep` em cada passo, bem como a `currentStep` no primeiro passo.


```html
<form class="stepForm">
      <div class="formStep currentStep">
      </div>
      <div class="formStep">
      </div>
      <div class="formStep">
      </div>
</form>
```