# brmasker4

[![GitHub issues](https://img.shields.io/github/issues/amarkes/brmasker4.svg)](https://github.com/amarkes/brmasker4/issues)
[![GitHub stars](https://img.shields.io/github/stars/amarkes/brmasker4.svg)](https://github.com/amarkes/brmasker4/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amarkes/brmasker4.svg)](https://github.com/amarkes/brmasker4/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/amarkes/brmasker4/master/LICENSE)
[![Build Status](https://travis-ci.org/amarkes/brmasker-ionic.svg?branch=master)](https://travis-ci.org/amarkes/brmasker4)


return custom mask in input for angular 4

# Required
- node v8.4.0 or up
- npm 5.4.2 or up
- @angular/cli: 1.4.4

# install

```sh
npm install brmasker4 --save
```

### HTML

### correct usage

```html
<input type="text" name="cpf" placeholder="CPF" [brmasker]="{mask:'000.000.000-00', len:14}" value="">
```

# Module

```javascript
import { BrMasker4Module } from 'brmasker4';

@NgModule({
  imports: [
    BrMasker4Module
  ],
})

```
# Characters

`- . / ( ) , * + @ # R$ $ & %`

# Guide

[brmasker]="{mask:'000.000.000-00', len:14}"

[brmasker] = component receive array (mask, len)

mask --> required / default = '' / custom mask

len --> required / default = 0 / number of length

### data
```html
[brmasker]="{mask:'00/00/0000', len:10}"
```
### cep
```html
[brmasker]="{mask:'00.000-000', len:10}"
```

### cpf
```html
[brmasker]="{mask:'000.000.000-00', len:14}"
```

### cnpj
```html
[brmasker]="{mask:'00.000.000/0000-00', len:18}"
```

### telefone
```html
[brmasker]="{mask:'(00) 0000-0000', len:14}"
```

### whatsapp
```html
[brmasker]="{mask:'(00) 00000-0000', len:15}"
```



# Build for developer

### Only use if you change the component

### Build

```sh
npm run build
```

### Publish

```sh
npm publish
```