# Lib is deprecated 

We're sorry, but we'll focus only on one [library](https://github.com/amarkes/br-masker-ionic-3)


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

# Features

```js
import { BrMaskerDirective, BrMaskModel } from 'brmasker-ionic-3';

...

constructor(public brMaskerDirective: BrMaskerDirective) {}

...

protected createForm(): FormGroup {
  return new FormGroup({
    phone: new FormControl(this.createPhone())
  });
}

private createPhone(): string {
  const config: BrMaskModel = new BrMaskModel();
  config.phone = true;
  return this.brMaskerDirective.writeCreateValue('99999999999', config);
}
```

# Inputs

* brmasker: BrModel

```js
	BrModel = {
	 mask: string;
	 len: number;
	 money: boolean;
	 phone: boolean;
	 person: boolean;
	}
```


 Name | type | info |
| ------ | ------ | ------ |
| mask | string | Optional |
| len | string | Optional |
| money | boolean | Optional |
| decimal| number | Optional for 'money', default '2' |
| phone | boolean | Optional |
| person | boolean | Optional |
| percent | boolean | Optional |
| type | string | Optional default 'all' |


### Exemple for CPF/CNPJ `999.999.999-99` / `99.999.999/9999-99`

### usage

```html
<input type="text" name="cpf" placeholder="CPF/CNPJ" [brmasker]="{person: true}" value="">
```

### Exemple for Real `999,99`

### usage

```html
<input type="text" name="money" placeholder="(R$) Real" [brmasker]="{money: true}"  value="">
```

### Exemple for Phone `(99) 9999-9999` / `(99) 99999-9999`

### usage

```html
<input type="text" name="phone" placeholder="Phone" [brmasker]="{phone: true}"  value="">
```

# Characters

`- . / ( ) , * + @ # $ & %`

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

### custom cpf
```html
[brmasker]="{mask:'000.000.000-00', len:14}"
```

### custom cnpj
```html
[brmasker]="{mask:'00.000.000/0000-00', len:18}"
```

### custom telefone
```html
[brmasker]="{mask:'(00) 0000-0000', len:14}"
```

### custom whatsapp
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

# Versions

- for angular 6 using version 1.0.2

- for angular 5 using version 1.0.1


# Changelog

### v1.0.2

- support for angular 6

- news updates

### v1.0.1

- fix number in person and phone

### v1.0.0

- Suport reactive form

### v0.0.29

- custom phone, money and person mask
