window.$ = window.jQuery = require('jquery');
$(function() {
	
	$( "#calc" ).on( "click", function() {
	  $('#result').html(calc($('#num').val()))
	});
	$( "#search" ).on( "click", function() {
      $.ajax({url: "http://localhost:8080/test", success: function(result){
        $('#result').html(result)
      }});
	  
	});

// a simple memoized function to add something
function calcFunc(num) {
  if (num <= 1) return 3;
  return calc(num - 1) + (num-1) * 2;
}
var memoizedAdd1 = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('input > '+n+' \nFetching from cache > '+cache[n]);
      return cache[n];
    }
    else {
      let result = calcFunc(n);
      cache[n] = result;
      console.log('input > '+n+' \nCalculating result > '+result);
      return result;
    }
  }
}
var calc = memoizedAdd1();

function searchFunc(name) {
  return name;
}
var memoizedAdd2 = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('input > '+n+' \nFetching from cache > '+cache[n]);
      return cache[n];
    }
    else {
      let result = searchFunc(n);
      cache[n] = result;
      console.log('input > '+n+' \nCalculating result > '+result);
      return result;
    }
  }
}
var search = memoizedAdd2();



});