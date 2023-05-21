## JS 작성 규칙:

    - 하나의 명령이 끝날 때 세미클론이 있어도 없어도 되지만 붙이는걸 권장. 명령의 끝을 의미. (안붙여서 에러나는 경우는 있지만 붙여서 에러나는 경우는 없다.)
    - Unexpected identifier: 뭘갈 프로그래머 너가 넣어야 하는데 안 넣었다.

## JS의 주석:

    - //
    - /**/
    - 참고) C의 주석: //, Python의 주석: #

## 들여쓰기:

    - 파이썬과 루비와는 달리 들여쓰기에 제한 없음.
    - 코드나 실행엔 문제가 없으나 가독성을 위해 들여쓰기 하는걸 권장.

## 자료형:

    - 값(value): 프로그램이 조작할 수 있는 데이터. 문자도 값이다. 참과 거짓도. 숫자고 값이고.
    - 자료형(data type): 여러 가지 값의 종류

## 문자열:

    - 하나의 글자: 문자
    - 문자들이 하나 이상 나열되어 있는 것: 문자열
    - Q. 하나의 글자가 "문자"라면서 문자들이 "하나 이상" 나열되어 있는 것은 하나만 있어도 되니까 JS에선 "문자" = "문자열"인건가?
    - 문자열은 따옴표로 감싸야한다. (``백틱으로도 감쌀 수 있음. --> 줄바꿈 가능, \n(escape squence)로 줄바꿈 가능)
    - 팁) "", ``, '      ' 얘네들도 문자열이다.
    - 팁) "'" --> '(작따), '"' --> "(큰따)
    - 팁) "how`'`re you?"(='how \'re you?') --> how're you?
    - 팁) "how //re you?" --> how /re you?

## 문자열끼리의 더하기:

    - "string1" + "string2" --> "string1string2"(두 문자열이 붙음)

## 숫자:

    - 50000은 5 뒤에 0이 4개이므로 5e4로 표현 가능.
    - 0.0005 = 5e-4(소수점 아래로 4자리.)
    - 사람의 직관과 어긋나는 것은 어쩔 수 없이 외워야한다.
    - "바나나" - "사과"의 결과가 NaN(Not a Number)가 나오는데, typeof NaN 해보면 number로 나온다.
    - 즉, NaN이라는 숫자가 있다. 얘의 뜻은 숫자가 아니다인데 숫자다. 공식적으론 숫자.
    - 문자열을 숫자로 변환: parseInt("string"), Number("string")
    - parseInt("Apple")의 결과는 NaN으로 나온다. parseInt는 "정수"로 변환해주는 친구인데 input된 string이 number가 아니므로 NaN을 배출한듯.
    - parseFloat("string"): 문자열을 소수로 바꿀 때
    - 팁) parseInt("3월") --> 3, Number("3월") --> NaN, parseInt("출생3월") --> NaN

## prompt():

    - 사용자가 값 입력하게. 문자열로 받음.

## Infinity:

    - typeof Infinity: number.
    - Infinity - Infinity = NaN
    - 0 / 0 = NaN

## 형 변환(문자열 + 숫자):

    - 문자열이 아닌 친구가 문자열로 바뀜.

## 소수 계산 주의점:

    - 실수를 정수로 바꿔서 계산 후 마지막에 다시 실수로 바꾸기
    - ex) (0.3 * 10 - 0.1 * 10) / 10 --> 0.2

## Bool에서 주의:

    - NaN == NaN --> false (NaN은 비교 연산에서 false를 출력한다고 알고 있기.)
    - 알파벳끼리의 비교는 사전순. 뒤에 나오는 것이 더 크다고 생각하면 됨.
    - 특수문자끼리의 대소비교. '&'.charCodeAt()
    - 문자열과 숫자를 대소비교시 문자열이 숫자로 변함. 문자열 abc를 숫자로 바꾸면 NaN이 됨. NaN과의 비교는 false를 출력함.

## ==과 ===의 차이 이해하기:

    - ==: 값만 같은지.
    - ===: 값과 자료형까지 다 같은지.

## 문자열을 bool값으로 바꾸기:

    - 어떤 string이 bool값으로 뭔지 궁금할 때 앞에 !!을 붙이면 됨. 아니면 Boolean()함수 써.

## 형변환시 false가 되는 값 7가지:

    - false, '', 0, NaN, undefined, null, document.all

## 빈 값:

    - 돌려줄 값이 없으면 undefined를 돌려준다. 반환할 반환값이 없음을 의미.
    - typeof undefined --> undefined.
    - undefined를 형변환하면 false이지만, undefined = false인 것은 아니다.
    다른 거짓인 값들과도 마찬가지이다.
    - null != undefined.
    - typeof null --> object. (버그임. 원래는 null 나와야하는데..  그래서 null값인지 확인하기 위해선 "=== null"을 사용.)

## 변수:

    - 값을 저장하고 저장한 값을 불러올 수 있게 하는 것.(메모리에 저장됨)
    - 선언: 변수를 만드는 행위
    - 선언문: let으로 시작하는 명령.(변수 선언은 했는데 값 입력 안하고 그 값이 뭔지 물어볼땐 항상 undefined)
    - 초기화: 변수를 선언함과 동시에 값을 대입하는 행위.
    - 선언된 변수를 다시 선언하면 SyntaxError발생.
    - 변수명: 한글, 한자, 일부 특수문자, _, $ 됨.
    - 변수에 빈 값 저장시엔 null 추천.
    - let: 재선언 불가.

## const(constant, 상수):

    - 변하지 않는 수.
    - 선언 시 초기화 필수. 처음에 값 안넣으면 나중에 넣을 수가 없어서.

## var(variable, 변수):

    - 예전엔 많이 썼으나 요즘은 안 씀.
    - var로 변수를 선언하면 특별히 변수문이라고 한다.
    - 재선언 가능.

## 조건문(conditional statement):

    - 조건에 따라 실행하거나 실행하지 않는 문.
    - 조건식과 동작문으로 구분됨. 조건식이 참이면 내부의 동작문이 실행됨.
    - if (조건식) {동작문;}
    - 중괄호 없으면 조건문 바로 밑에 문만 영향을 받음. 바로 1줄.

## switch문:

    - switch (조건식) {
        case 비교조건식:
            동작문;
        case 비교조건식:
            동작문;
        ...
    }
    - switch 옆 소괄호 조건식의 값이 case의 비교 조건식의 값과 일치(===)하면 해당 동작문이 실행됨. 해당 case부터 break가 없다면 모든 case를 다 실행함.
    - default에는 break 안써도 됨. 어차피 제일 마지막 case이기 때문에 다음에 실행할게 없어서.

## 삼항 연산자:

    - 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식.
    - 연산자 이므로 식을 계산해서 결괏값을 나오게 함.
    - 중첩하여 사용 가능.
    - ex) let value = condition1 ? (condition2 ? '둘 다 참' : 'condition1만 참') : 'condition1 이 거짓';

## 반복문:

    - while (조건식) 동작문;
    - 조건식이 true일 동안 loop함. 만약 false가 된다면 빠져나옴.

## for문:

    - for (시작; 조건식; 종료식[증감식]) 동작문;
    - 시작 부분은 for 실행시 딱 한 번만 실행된다.
    - 무한 반복이 가능함. 어떻게? for(let i = 0; ; i++) 이렇게 조건식을 비워놓으면 됨. 그러나 while문으로 무한반복을 더 많이 표현함.

## continue:

    - 특정 조건에서만 반복문이 실행되기를 원할 때 continue문을 넣으면 이후의 코드는 건너 뜀.

## 중첩 반복문:

    - 반복문 안에 반복문이 들어있는 것.
    - ex) 구구단 코드
    ```
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(i, '*', j, '=', i*j);
        }
    }
    ```
    ```
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            if(i%2 === 0 || j % 2 === 0) continue;
            console.log(i, '*', j, '=', i*j);
        }
    }
    ```

## 여러가지 별찍기 코드:

    ```
    for (let i = 0; i < 5; i++) {
        console.log('*'.repeat(i + 1))
    }
    ```
    ```
    for (let i = 5; i >= 1; i--) {
        console.log('*'.repeat(i))
    }
    ```
    ```
    for (let i = 0; i < 10; i++) {
        if(i % 2 === 0) continue;
        console.log( ' '.repeat((10-i)/2) + "*".repeat(i))
    }
    ```

## 객체:

    - 자료형의 일종으로 다양한 값을 모아둔 또 다른 값.
    - 종류: 배열, 함수, 배열이나 함수가 아닌 객체.

## 배열:

    - 대괄호로 묶인 값. 서로 관련있는 것을 묶을 수 있고 서로 다른 변수를 선언하는 대신 묶을 수 있다.
    - let fruits = ['apple', 'orange', 'melon']
    - index는 0번째 방부터 시작된다.
    - 배열 안에 배열을 넣을 수도 있다. 이러한 배열을 이차원 배열이라고 한다.
    - 배열 내부에 든 값: 요소
    - undefined, null, true, 중복값, 안넣기 모두 배열의 요소로 가능하다.

## 배열의 요소 개수 구하기:

    - 배열 이름 뒤에 .length를 붙이면 됨.
    - 빈 값도 유효한 값이기에 요소 개수 셀 때 포함됨.
    - 어떤 배열이든 마지막 요소 찾는법: 배열[배열.length-1]
    - 배열에 어떤 값이든 추가, 수정 가능.
    - 제일 뒤의 요소를 추가하는 방법은 .push(요소);
    - 제일 뒤의 요소를 제거하는 방법은 .pop();
    - 첫번째 요소를 제거하는 방법은 .shift();
    - 배열에 특정 요소가 있는지 찾아보는 .includes(요소); --> true or false로 알려줌.
    - 검색하는 값이 몇 번째 인덱스인지 indexOf(배열에서 처음으로 발견된 값의 인덱스를 리턴), lastIndexOf(배열에서 마지막으로 발견된 값의 인덱스를 리턴.)
    - .splice(인덱스 번호, 지울 요소의 수)
    - fruits.splice(1, 1, 'mango', 'grape'); 인덱스 1부터 요소 1개 삭제하고 그 자리에 'mango', 'grape' 추가하기.

## 배열 메서드 응용하기:

```
const arr = ['가', '라', '다', '라', '마', '라']
let index = arr.indexOf('라');
while (index > -1) {
    arr.splice(index, 1);
}
```

```
const arr = ['가', '라', '다', '라', '마', '라']
let index = arr.indexOf('라');
while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf('라')
}
```

## 함수:

    - 일정한 동작을 수행하는 코드. 원할 때 실행해 정해진 동작을 수행하게 할 수 있음.
    - 함수 만들 때: function예약어 사용, => 화살표 기호 사용.

```
function() {}
// 또는
() => {}
```

    - 애네는 이름이 없음. 함수에 이름을 붙이면 다른 곳에서 재사용 가능하므로 이름을 붙이자!

```
function a() {}
const b = function() {}
const c = () => {}
```

    - 함수 선언문: 함수를 상수에 대입하는 대신 function 키워드 뒤에 함수 이름을 넣어주는 방식.
    - 함수 표현식: 상수나 변수에 함수를 대입하는 방식.
    - 함수 선언: 함수를 만드는 행위.

## 매개변수와 인수:

    - 함수를 선언할 때: 매개변수(parameter)
    - 함수를 호출할 때: 인수(argument)
    - 함수가 하나의 매개변수와 하나의 인수만을 가지는 것은 아님. 여러개를 가질 수 있으며 매개변수와 인수의 개수가 일치하지 않아도 됨. 만약 부족하면 undefined로 뜸.

## 객체 리터럴:

    - 중괄호로 공통된 정보를 묶은 것.
    - 객체 리터럴은 값들에게 이름이 다 붙어있다. 속성과 속성명이 있다. 배열은 단순히 여러 값들을 하나로 묶은 것, 객체 리터럴은 하나로 묶으면서 이름까지 부여한 것.

```
const 객체 = {
    속성이름1: 속성값,
    속성이름2: 속성값,
    ...
};
```

## 객체 리터럴에서 속성값에 접근하는 방법:

```
const jueun = {
    name: "엄주은",
    year: 2003,
    month: 2,
    date: 19,
    gender: 'M',
};

console.log(jueun.name);
console.log(jueun['name']);
console.log(jueun.date);
console.log(jueun['date']);
console.log(jueun.hello) --> 없는 값에 접근하여 undefined뜸.
```

## 메서드:

    - 객체 리터럴의 속성값에 함수를 넣었을 떄 이 속성을 메서드라고 함.

```
const debug = {
    log: function(value) {
        console.log(value);
    }
};
debug.log('Hell, Method');
```

    - debug 객체 안에 log 메서드.

## 객체의 비교.

    - 객체끼리는 모양이 같아도 비교하면 항상 false.
    - {} === {} --> false.
    - 객체가 아닌 값들끼리 서로 비교하면 true가 나옴.
    - 새로운 객체와 새로운 객체는 다르므로...
    - 원래 한 번 만든 객체를 여러번 돌려서 쓰면 같다고 나옴.

```
const a = {name: 'Jueun'};
const array = [1, 2, a];
console.log(a === array[2]);

---> true
```

```
const a = {name: 'jueun'};
const b = a;
a.name = 'hero';
console.log(b.name); --> hero
```

    - 그러나 원시값은 다름.

## 대화창(prompt, alert, confirm):

    - Alert: 반환값이 없으며 사용자에게 경고 메세지를 표시한다.
    - Confirm: true or false 반환.
    - Prompt: 사용자가 값을 입력할 수 있게 해주며 문자열로 받아온다. 사용자로부터 값을 전달받음.

## document.querySelector('선택자'):

    - HTML의 태그를 가져옴.
    - 선택자: HTML 태그를 선택할 수 있게 도와주는 문자열.
    - document.querySelectorAll("*");
    --> 모든 요소 선택
    document.querySelector("#btn");
    --> ID 선택자
    document.querySelector(".btn");
    --> Class 선택자
    document.querySelector("button");
    --> 태그명 선택

## 콜백함수:

```
document.querySelector('input').addEventListener('input', function() {
    console.log('글자 입력');
});
document.querySelector('button').addEventListener('click', function() {
    console.log('버튼 클릭');
});
const onClick = function() {
    console.log('버튼 클릭');
}
document.querySelector('button').addEventListener('click', onClick);
```

    - input할 때마다 함수가 계속 실행됨.
    - 어떤 동작을 수행한 후 연이어 수행되는 함수 = 콜백함수.(클릭한 뒤에 호출되는 함수라서, 이벤트 리스너 안에 들어있어서 리스너 함수, 이름이 없으므로 익명함수.)
    - document.querySelector('button').addEventListener('click', onClick); 이게 맞고
    - document.querySelector('button').addEventListener('click', onClick()); 이게 아님. 왜? onClick()은 undefined를 리턴값으로 가져오기 때문.'
    - 콜백함수 정의: 함수에 파라미터로 들어가는 함수
    - 콜백함수 용도: 순차적으로 실행하고 싶을 때 씀
    - 동기 : 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식 - 순차적 로직흐름
    - 비동기 : 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식 - 동시 효율적 처리 가능, 즉시 응답X 때문에 예상 밖 결과 나올수도 있음.

## event.target.value:

```
document.querySelector('input').addEventListener('input', (event) => {
    console.log('글자 입력', event.target.value);
});
```

    - 사용자가 입력한 값을 볼 수 있음.

## UI event:

    - load: 웹페이지의 로드가 완료되었을 때
    - unload: 페이지가 언로드될 때(주로 새로운 페이지를 요청한 경우)
    - error: 브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 존재하지 않는 경우
    - resize: 브라우저 창의 크기를 조절했을 때
    - scroll: 사용자가 페이지를 위아래로 스크롤할 때
    - select: 텍스트를 선택했을 때

## Clipboard Event:

    - cut: 콘텐츠를 잘라내기할 때
    - copy:	콘텐츠를 복사할 때
    - paste: 콘텐츠를 붙여넣기할 때

## Mouse Event:

    - click: 마우스 버튼을 클릭했을 때
    - dbclick: 마우스 버튼을 더블 클릭했을 때
    - mousedown: 마우스 버튼을 누르고 있을 때
    - mouseup: 누르고 있던 마우스 버튼을 뗄 때
    - mousemove: 마우스를 움직일 때 (터치스크린에서 동작하지 않는다)
    - mouseover: 마우스를 요소 위로 움직였을 때 (터치스크린에서 동작하지 않는다)
    - mouseout: 마우스를 요소 밖으로 움직였을 때 (터치스크린에서 동작하지 않는다)

## Form Event:

    - input: <input>,<textarea>요소 값이 변경되었을 때
    - change: 선택버튼, 체크박스, 라디오 버튼 등 상태가 변경 되었을 때
    - submit: 버튼키를 이용해서 폼을 제출할 때
    - reset: 리셋 버튼을 클릭할 때
    - copy: 폼 필드의 콘텐츠를 복사했을 때
    - cut: 폼 필드의 콘텐츠를 잘라내기 했을 때
    - paste: 폼 필드의 콘텐츠를 붙여넣기 할 때
    - select: 텍스트를 선택했을 때

## Keyboard Event:

    - keydown: 사용자가 키를 눌렀을 때
    - keyup: 사용자가 키를 뗄 때
    - keypress:	사용자가 눌렀던 키의 문자가 입력 되었을 때

## DOM:

    - 웹 브라우저의 역할: HTML 문서를 해석하고, 화면을 통해 해석된 결과를 보여줌.
    - 렌더링: 해석한 HTML 코드를 화면을 통해 보여주는 과정.
    - DOM: 웹 콘텐츠가 화면에 렌더링되기에 앞서, HTML 코드를 해석해서 요소들을 트리 형태로 구조화해 표현하는 형식. 브라우저는 DOM을 통해 화면에 웹 콘텐츠들을 렌더링함.
    - DOM의 사용 목적: 자바스크립트를 사용해서 웹 화면의 콘텐츠를 추가, 수정, 삭제하거나 이벤트를 처리할 수 있도록 프로그래밍 인터페이스를 제공함.

## HTMl 요소에 접근하는 방법:

    - 웹 문서의 태그는 요소(Element) 노드로 표현.
    - DOM 요소를 ID 선택자로 접근하는 함수 - getElementById()
    - DOM 요소를 class 값으로 찾아내는 함수 - getElementsByClassName()
    - DOM 요소를 태그 이름으로 찾아내는 함수 - getElementsByTagName()
    - DOM 요소를 id, class, tag 모두 가능하게 찾아주는 함수 - querySelector(), querySelectorAll()
    - HTML 태그 속성을 가져오거나 수정하는 함수 - getAttribute(), setAttribute() 함수
    - getElementById() vs QuerySelector() 차이 - Element : 요소 노드까지만 접근 (웹 요소만 변경할 시 사용), QuerySelector(), QuerySelectorAll() : 요소노드, 텍스트 노드, 속성노드까지 접근 (웹 요소뿐 아니라 요소의 텍스트나 속성 변경, 새로운 노드 추가할 시 사용)
