
# COW

복습: No
작성일시: 2023년 5월 3일 오후 3:35

# 2차원 배열

- JS는 중첩 배열을 통해 2차원 배열을 선언할 수 있다.

```jsx
const arr = [
  [1, 2],
  [2, 3],
];
arr.push([1, 2]); //배열을 인자로 전달
const arr = new Array(5).fill(0).map(() => new Array(4)); // fill 메서드를 통해 배열 생성
arr[3][1]; // 2차원 배열 접근
```

# 구조 분해 할당

- 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
- 속성명과 변수명이 같을때 사용.

  ```jsx
  var a, b, rest;
  [a, b] = [10, 20];
  console.log(a); // 10
  console.log(b); // 20

  [a, b, ...rest] = [10, 20, 30, 40, 50];
  console.log(a); // 10
  console.log(b); // 20
  console.log(rest); // [30, 40, 50]

  ({ a, b } = { a: 10, b: 20 });
  console.log(a); // 10
  console.log(b); // 20

  // Stage 4(finished) proposal
  ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
  console.log(a); // 10
  console.log(b); // 20
  console.log(rest); // {c: 30, d: 40}
  ```

# 이벤트 버블링

- 이벤트 버블링이란 한 요소에 이벤트에 발생하면 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작하고 최상단의 부모 요소를 만날 때까지 반복되면서 핸들러가 동작하는 현상을 말한다.

![https://joshua1988.github.io/images/posts/web/javascript/event/event-bubble.png](https://joshua1988.github.io/images/posts/web/javascript/event/event-bubble.png)

## event.target

- 부모 요소의 핸들러는 이벤트가 정확히 어디서 발생했는지 자세한 정보를 얻을 수 있다.
- 이벤트가 발생한 가장 안쪽의 요소는 target 요소라 불리며 event.target을 사용해 접근할 수 있다.
- event.target은 실제 이벤트가 시작된 타깃 요소로 버블링이 진행되어도 변하지 않는다.
- event.current.target은 현재 요소로 현재 실행중인 핸들러가 할당된 요소를 참조합니다.

```jsx
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
// <p>에 할당된 onclick 핸들러가 동작.
// 바깥의 <div>에 할당된 핸들러가 동작.
// 그 바깥의 <form>에 할당된 핸들러가 동작.
// document 객체를 만날 때까지, 각 요소에 할당된 onclick 핸들러가 동.
```

# 이벤트 캡처링

- 캡처링은 버블링과는 반대로 최상위 태그에서 해당 태그를 찾아 내려간다.
- 팝업을 닫을 때 빼고는 제외하고 실제로 많이 사용하지는 않는다.

![https://joshua1988.github.io/images/posts/web/javascript/event/event-capture.png](https://joshua1988.github.io/images/posts/web/javascript/event/event-capture.png)

```jsx
const divs = document.querySelectorAll("div");

const clickEvent = (e) => {
  console.log(e.currentTarget.className);
};

divs.forEach((div) => {
  div.addEventListener("click", clickEvent, { capture: true }); // capture:false가 기본
});
```

# Node

- HTML DOM 노드에 접근하는 방법은 노드 간의 관계를 이용하여 접근하는 방법도 존재한다

```jsx
// HTML 문서의 모든 자식 노드 중에서 두 번째 노드의 이름을 선택함.
document.getElementById("document").innerHTML = document.childNodes[1].nodeName; // HTML

// html 노드의 모든 자식 노드 중에서 첫 번째 노드의 이름을 선택함.
document.getElementById("html").innerHTML =
  document.childNodes[1].childNodes[0].nodeName; // HEAD

// "#heading"인 요소의 첫 번째 자식 노드의 노드값을 선택함.
let headingText = document.getElementById("heading").firstChild.nodeValue;

document.getElementById("text1").innerHTML = headingText;
document.getElementById("text1").firstChild.nodeValue = headingText;

// 아이디가 "heading"인 요소의 첫 번째 자식 노드의 타입을 선택함.

let headingType = document.getElementById("heading").firstChild.nodeType;

document.getElementById("head").innerHTML = headingType; // 3
document.getElementById("document").innerHTML = document.nodeType; // 9
```

# Array.from()/ Array.flat()

- Array.from() 메서드는 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다.

```jsx
// 1. 문자열을 배열로 만드는 예시
console.log(Array.from("Hello"));
// [ 'H', 'e', 'l', 'l', 'o' ]

// 2. 유사 배열 객체를 배열로 만드는 예시
console.log(Array.from({ 0: "찬민", 1: "희진", 2: "태인", length: 3 }));
// [ '찬민', '희진', '태인' ]

// 3. 함수의 매개변수들을 순서대로 배열로 만드는 예시
const funcA = (...arguments) => {
  return Array.from(arguments);
};

console.log(funcA(1, 2, 3, 4, 5));
// [ 1, 2, 3, 4, 5 ]
```

- Array.flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성한다.

```jsx
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# 얕은 복사와 깊은 복사

## 얕은 복사

- 얕은 복사는 중첩된 객체가 있을 때 가장 바깥 객체만 복사되고, 내부 객체는 참조 관계를 유지하는 복사를 의미한다.

```jsx
/* 얕은 복사시 주의!!! */
let origin = ["a", "b", ["c"]];
let copy = [...origin];

copy[2].push("d");

console.log(origin); //["a", "b", ["c", "d"]]; // 원본까지 바뀌어버림
console.log(copy); //["a", "b", ["c", "d"]];
```

# 깊은 복사

- 깊은 복사는 데이터 자체를 통째로 복사한다
- 복사된 두 객체는 완전히 독립적인 메모리를 차지한다

```jsx

const arr= [{j:"k},{l:"m}];
const reference = arrray; // 참조
const deepCopy = JSON.parse(JSON.stringify(array)); //깊은 복사

console.log(array === reference ) // true
console.log(array[0] === reference[0] ) // true
console.log(array === deepCopy) // false
console.log(array[0] === deepCopy[0] ) // false

```

# This

- 자바스크립트의 this는 함수 호출 방식에 따라 this에 바인딩되는 객체가 달라진다.
- 즉 함수를 호출할 때 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

```jsx
function a() { console.log(this); };
a(); // Window {} this는 기본적으로  window를 가르킨다.

var obj = {
  a: function() { console.log(this); }, //객체 메서드 a 안의 this는 객체를 가르킨다.
};
obj.a(); // obj

class Menu{
  start{
      console.log(this); // 화살표 함수를 사용하면 외부 this와 내부 this를 일치시킬 수 있다
      gameMenu.addEventListener("submit",(event) => {
          console.log(this)})
        }

}
```

# Class

- 클래스는 객체를 생성하기 위한 템플릿이다. 자바스크립트에서 클래스는 2015년에 추가된 문법이다.

```jsx
// 생성자
function Person({ name, age }) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function () {
  return `안녕하세요, 제 이름은 ${this.name}입니다.`;
};

const person = new Person({ name: "윤아준", age: 19 });
console.log(person.introduce()); // 안녕하세요, 제 이름은 윤아준입니다.
console.log(typeof Person); // function
console.log(typeof Person.prototype.constructor); // function
console.log(typeof Person.prototype.introduce); // function
console.log(person instanceof Person); // true

// 클래스
class Person {
  // 이전에서 사용하던 생성자 함수는 클래스 안에 `constructor`라는 이름으로 정의합니다.
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  // 객체에서 메소드를 정의할 때 사용하던 문법을 그대로 사용하면, 메소드가 자동으로 `Person.prototype`에 저장됩니다.
  introduce() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}

const person = new Person({ name: "윤아준", age: 19 });
console.log(person.introduce()); // 안녕하세요, 제 이름은 윤아준입니다.
console.log(typeof Person); // function
console.log(typeof Person.prototype.constructor); // function
console.log(typeof Person.prototype.introduce); // function
console.log(person instanceof Person); // true
```

## Class 상속

- 클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있다.
- 기존에 존재하던 클래스 기능을 토대로 새로운 기능을 만들 수 있다.

```jsx
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");

class Rabbit extends Animal {
  //extend 키워드를 사용하여 확장시
  hide() {
    alert(`${this.name} 이/가 숨었습니다!`);
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
```

# 이벤트 루프

- 이벤트 루프란 콜백 이벤트 큐에서 하나씩 꺼내서 코드를 동작시키는 루프를 말한다.
- 이벤트 루프는 자바스크립트에서 비동기 처리를 가능하게 해주는 핵심적인 개념이다

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrAwbS%2Fbtq0ECY7DEB%2FhbkxQWEWYkhJcH9OovqcQ1%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrAwbS%2Fbtq0ECY7DEB%2FhbkxQWEWYkhJcH9OovqcQ1%2Fimg.png)

- 자바 스크립트는 이벤트 루프를 이용해서 비동기 방식으로 동시성을 지원한다.
- 이벤트 루프에서는 이벤트 발생 시 호출되는 콜백 함수들을 테스크 큐에 전달하고 테스크 큐에 담겨있는 콜백 함수들을 콜스택에 넘겨준다
- 이벤트 루프가 테스크 큐에서 콜스택으로 콜백 함수를 넘겨주는 작업은 콜스택에 쌓여있는 함수가 없을 때만 수행된다.
- 테스크 큐에서는 web api 비동기 작업들이 실행된 후 호출되는 콜백함수들이 기다리는 공간이다.

### 비동기 작업을 수행하는 순서

1. 코드가 호출스택에 쌓인 후, 실행되면 자바스크립트 엔진은 비동기 작업을 Web API에게 위임한다.
2. Web API는 해당 비동기 작업을 수행하고, 콜백 함수를 이벤트 루프를 통해서 테스크 큐에 넘겨주게 된다.
3. 이벤트 루프는 콜스택에 쌓여있는 함수가 없을 때, 테스크 큐에서 대기하고 있던 콜백함수를 콜스택으로 넘겨준다.
4. 콜스택에 쌓인 콜백함수가 실행되고, 콜스택에서 제거된다.
