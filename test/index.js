/* global describe, it */
require('mocha-generators').install()

var Nightmare = require('nightmare')
var chai = require('chai')
var should = chai.should()

describe('nightmareJs and mocha and chai', function () {
  var nightmare = Nightmare()

  it('ซื้อเล่มไม่ซ้ำกัน 2 เล่ม : ภาค1 = 3 เล่ม, ภาค2 = 1 เล่ม ส่วนลดคือ 20', function * () {
    var case1 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b1')
      .click('#b1')
      .click('#b1')

      .click('#b2')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case1.should.equal('20')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ภาค2,3 อย่างละ 3 เล่ม ส่วนลดคือ 60', function * () {
    var case2 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b2')
      .click('#b2')
      .click('#b2')

      .click('#b3')
      .click('#b3')
      .click('#b3')

      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case2.should.equal('60')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 3 เล่ม : ภาค3 = 4 เล่ม, ภาค4 = 4 เล่ม, ภาค5 = 5 เล่ม ส่วนลดคือ 240', function * () {
    var case3 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b4')
      .click('#b4')
      .click('#b4')
      .click('#b4')

      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case3.should.equal('240')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 4 : ภาค1 = 2 เล่ม, ภาค3 = 3 เล่ม, ภาค6 = 3 เล่ม, ภาค7 = 5 เล่ม ส่วนลดคือ 300', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b1')
      .click('#b1')

      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b6')
      .click('#b6')
      .click('#b6')

      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case4.should.equal('300')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 5 เล่ม : ภาค4 = 2 เล่ม, ภาค5 = 2 เล่ม, ภาค6 = 3 เล่ม, ภาค7 = 3 เล่ม, ภาค1 = 1 เล่ม ส่วนลดคือ 340', function * () {
    var case5 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b4')
      .click('#b4')

      .click('#b5')
      .click('#b5')

      .click('#b6')
      .click('#b6')
      .click('#b6')

      .click('#b7')
      .click('#b7')
      .click('#b7')

      .click('#b1')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case5.should.equal('340')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 6 เล่ม : ภาคที่ 7 = 2 เล่ม, ภาคที่ 5 = 2 เล่ม, ภาคที่ 1 = 4 เล่ม, ภาคที่ 4 = 1 เล่ม, ภาคที่ 3 = 5 เล่ม, ภาคที่ 2 = 1 เล่ม ส่วนลดคือ 500', function * () {
    var case6 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b7')
      .click('#b7')
      .click('#b7')

      .click('#b5')
      .click('#b5')

      .click('#b1')
      .click('#b1')
      .click('#b1')
      .click('#b1')

      .click('#b4')

      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b2')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case6.should.equal('500')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 7 เล่ม : ภาคที่ 6 = 5 เล่ม, ภาคที่ 7 = 1 เล่ม,ภาคที่ 4 = 4 เล่ม, ภาคที่ 3 = 3 เล่ม, ภาคที่ 2 = 2 เล่ม, ภาคที่ 1 = 1 เล่ม, ภาคที่ 5 = 2 เล่ม ส่วนลดคือ 700', function * () {
    var case7 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b6')
      .click('#b6')
      .click('#b6')
      .click('#b6')
      .click('#b6')

      .click('#b7')

      .click('#b4')
      .click('#b4')
      .click('#b4')
      .click('#b4')

      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b2')
      .click('#b2')

      .click('#b1')

      .click('#b5')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case7.should.equal('700')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 2 เล่ม : ภาค2,5 อย่างละ 2 เล่ม ราคารวมคือ 400', function * () {
    var case7 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b2')
      .click('#b2')

      .click('#b5')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('.amount.ng-binding').innerHTML
        return this.price
      })
    case7.should.equal('400')
  })
  it('ซื้อเล่มไม่ซ้ำกัน 3 เล่ม : ภาค1,2,3 อย่างละ 1 เล่ม รวมสุทธิ คือ 240', function * () {
    var case8 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b1')
      .click('#b2')

      .click('#b3')

      .evaluate(function () {
        this.price = document.querySelector('#totalNet').innerHTML
        return this.price
      })
    case8.should.equal('240')
  })
})

should
