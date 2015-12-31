if(condition){
	object.create = function(o){
		if(condition){
			
		}
	};
	function F(){};
	F.prototype = O;
	return new F();
}

(function(){
	
})();

(function(){
	
}());
// 这两个函数格式作用相等

function(){
	var a = 1;
	function(){
		a = 2;
	};
	return (function(){
		console.log(a)
	})();
};
function(){
	var a = 1;
	function(){
		a = 2;
	};
	return console.log(a)；
};
// 匿名函数闭包的不同返回方式

var spa = {
	name:function(){};
	id:function id (){
		
	}();
}
var spa = function(){
	return a;
}();
var spa = (function(){
	
})();/*模块模式*/
var spa = function(){
	return a;
};
// 函数表达式不同的表达方式




