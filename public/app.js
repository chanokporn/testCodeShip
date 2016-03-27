/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.book = []
    todoList.discountTotal = 0
    todoList.sumPriceAll = 0
    todoList.add = function (id, name, price) {
      // console.log(id, name, price)
      var obj = {
        'id': id,
        'name': name,
        'price': price
      }
      // todoList.book.push(obj)
      // console.log(todoList.book)
      if (todoList.book.length === 0) {
        obj.sumbook = 1
        todoList.book.push(obj)
      } else {
        var check = false
        for (var i = 0; i < todoList.book.length; i++) {
          if (todoList.book[i].id === id) {
            check = true
            todoList.book[i].sumbook += 1
          }
        }
      }
      if (check === false) {
        obj.sumbook = 1
        todoList.book.push(obj)
      }
      var book = todoList.book
      todoList.discountTotal = todoList.discount(book)
      todoList.sumPriceAll = todoList.sumPrice()
    }
    var filterData = function (array) {
      return array.filter((element) => element.sumbook !== 0)
    }
    todoList.discount = function (book) {
      var items = book.map((obj) => {
        return { sumbook: obj.sumbook, price: obj.price }
      })
      var totalDis = 0
      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { sumbook: obj.sumbook - 1, price: obj.price }
        })
        items = filterData(items)
      }
      return totalDis
    }
    todoList.sumPrice = function () {
      this.sumPrice2 = 0
      for (var i = 0; i < todoList.book.length; i++) {
        this.sumPrice2 += todoList.book[i].price * todoList.book[i].sumbook
      }
      return this.sumPrice2
    }
  })
