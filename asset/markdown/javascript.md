## 단순분기연산
```javaScript
단순분기연산
if(조건){
//조건이 참이면 수행하게 하는 구문

}else {
//조건이 거짓이면 수행하게 하는 구문
}
```
```javaScript
if(조건){
조건이 참이면 수행하게 하는 구문
} else if(조건){
//첫번째의 조건을 기준으로 거짓인 내용 중에서 다시 조건비교
//조건이 참이면 수행하게 하는 구문
}else if(조건){
//두번째의 조건을 기준(당연히 첫번째는 배제)으로 거짓인 내용 중에서 다시 조건비교
//조건이 참이면 수행하게 하는 구문
}else{
//위 사항들의 거짓인 경우에 수행
}
```

---
## for
```javaScript
for(var i = 0; i < 10; i+=1) { }
console.log(i) // i의 값이 살아나는 형태 : 10
for(let j =0; j < 10; j+=1 ) { }
console.log(j) // j의 존재 자체를 파악 할 수 없다. : not defind
```

## forEach
```javaScript
[1,3,,5,'a','c'].forEach(function(data ,index){
console.log(data,index);
});//배열을 사용할때 쓰는 문법.
```
## forIn
```javaScript
const obj = {'a ': 'white' , 'b' : 'black', 'c' , 'gray'};
for (prop in obj){
console.log(prop , obj[porp])
//prop : a,b,c 
// obj[porp] :  white,black,gray 
};
```
---

# 함수의 종류
함수란? 여러 복잡한 식을 하나의 기능으로 만들어서 필요에 따라 해당하는 식을 불러서 사용하는 기능
> function(){} <br />
 함수 선언식, 함수 표현식의 개념
## 기명함수 : 
함수 선언식으로 함수 자체에 이름을 부여

```javaScript

``
function (a,b){
return a+b;
}
console.log(Fn1(3,5)); //기명함수

```


## 익명함수:
> 함수에 이름을 직접 부여하는 것이 아니라, 이름이 없는 함수를 활용

1. 함수표현식 : 변수의 이름을 함수로 사용
```javaScript
const Fn2 = function(a,b){
  return a * b;
};

console.log(Fn2(5,6));

```

2. 즉시실행함수(IIFE) : 이름이 존재하지 않는 함수, 함수를 생성과 동시에 실행.
```javaScript
(function(a){
  console.log(a);
})('test');

```

3. 화살표 함수 : ES6이후의 기능으로 화살표 모양으로 만들어진 함수( => )
```javaScript
const Fn3 = function(){ return a%b; };
const Fn4 = (a,b) =>{ return a%b; };
console.log (Fn3(5,3));
console.log (Fn4(7,2));
```

```javaScript
function* (){
  yield 1;
  yield 2;
  yield 3;
}

for ( of ){}