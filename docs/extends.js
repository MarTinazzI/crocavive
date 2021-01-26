// Extend the default Number object with a formatMoney() method:
// usage: someVar.formatMoney(decimalPlaces, symbol, thousandsSeparator, decimalSeparator)
// defaults: (2, "R$", ".", ",")
Number.prototype.float2Money = function (places, symbol, thousand, decimal) {
  places = !isNaN(places = Math.abs(places)) ? places : 2
  return _formatMoney(this.toFixed(places).string2int(), places, symbol, thousand, decimal)
}

Number.prototype.int2Money = function (places, symbol, thousand, decimal) {
  return _formatMoney(this, places, symbol, thousand, decimal)
}

Number.prototype.number2Money = function (places, symbol, thousand, decimal) {
  if (this.toString().indexOf('.') !== -1) return this.float2Money(places, symbol, thousand, decimal)
  return this.real2centavos().int2Money(places, symbol, thousand, decimal)
}

function _formatMoney (number, places, symbol, thousand, decimal) {
  places = !isNaN(places = Math.abs(places)) ? places : 2
  symbol = symbol !== undefined ? symbol : 'R$ '
  thousand = thousand !== undefined ? thousand : '.'
  decimal = decimal !== undefined ? decimal : ','
  let negative = number < 0 ? '-' : ''
  let i = (places === 0 ? Math.abs(number || 0) : parseFloat(Math.abs(number || 0).toFixed(places), 10)) + ''
  i = i.length > 3 ? i : '000'.substr(i.length) + i
  let d = places === 0 ? '' : i.substr(-places)
  i = i.substr(0, i.length - places)
  let j = i.length > 3 ? i.length % 3 : 0
  return symbol +
    negative +
    (j ? i.substr(0, j) + thousand : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
    decimal + d
}

Number.prototype.toFixedOld = Number.prototype.toFixed

Number.prototype.toFixed = function (digits) {
  digits = !isNaN(digits = Math.abs(digits)) ? digits : 2
  let value = this + ''
  let match = value.split('.')
  let decimal = !match[1] ? '0' : match[1].substr(0, digits)
  decimal = decimal.length > digits ? decimal : decimal + (0).toFixedOld(digits).substr(2 + decimal.length)
  return `${match[0]}.${decimal}`
}

Number.prototype.centavos2real = function () {
  return this / 100
}

Number.prototype.real2centavos = function () {
  return this.toFixed(2).string2int()
}

Number.tryParseInt = function (value) {
  let parsed = 0
  try {
    parsed = parseInt(value)
  } catch (e) {
    return 0
  }
  return parsed
}

String.prototype.string2int = function () {
  try {
    const number = parseInt(this.onlyNumber())
    return isNaN(number) ? 0 : number
  } catch (e) {
    return 0
  }
}

String.prototype.onlyNumber = function () {
  return this.replace(/[^0-9]/g, '')
}

String.prototype.number2Money = function (places, symbol, thousand, decimal) {
  if (this.indexOf('.') !== -1 || this.indexOf(',') !== -1) {
    return this.string2int().centavos2real().number2Money(places, symbol, thousand, decimal)
  }
  return this.string2int().number2Money(places, symbol, thousand, decimal)
}

String.prototype.string2Float = function () {
  try {
    const number = parseFloat(this)
    return isNaN(number) ? 0 : number
  } catch (e) {
    return 0
  }
}

String.prototype.real2centavos = function () {
  let value = this.onlyNumber()
  return value.string2int().real2centavos()
}

String.prototype.formatPhone = Number.prototype.formatPhone = function () {
  let s2 = ('' + this).replace(/\D/g, '')
  let m = s2.match(/^(\d{2})(\d{5}|\d{4})(\d{4})$/)
  return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3]
}

JSON.magicParse = function (text) {
  if (typeof text !== 'string') {
    if (typeof text === 'object')
      return text
    return { body: null }
  }
  try {
    return JSON.parse(text)
  } catch (e) {
    return { body: null }
  }
}

window.htmlDecode = (input) => {
  const e = document.createElement('div')
  e.innerHTML = input
  return e.childNodes[0].nodeValue
}