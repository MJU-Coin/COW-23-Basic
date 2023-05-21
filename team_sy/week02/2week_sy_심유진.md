# 뷰포트

현재 화면에 보여지고 있는 영역

# name = “viewport”

```html
<meta name = "viewport" content="width=device-width. initial-scale=1.0">
<!-뷰포트의 너비를 단말기 너비에 맞추고, 초기 배율을 1로 한다-->
```

# 메타 태그

- html문서에 대한 메타데이터

### 항상 head 태그 안에 들어가며, 일반적으로 문자 세트, 페이지 설명, 키워드, 문자의 작성자 및 뷰포트 설정을 지정하는 데 사용

(웹페이지의 정보를 제공하는데 사용)

# 1. charset

문자 인코딩에 대한 요약 정보를 기입하는 속성

한글을 표시하기 위해 문자 세트를 지정하는 작업. 영문과 한글을 모두 사용하기 위해 utf-8 방식 사용

```html
<meta chatset="utf-8">
```

# 2. http-equiv

콘텐츠 속성의 정보/값에 대한 http (인터넷에서 데이터를 주고 받을 수 있는 포로토콜) 헤더 제공

```html
<!-- 10초마다 페이지 새로고침 하라는 뜻 -->
<meta http-equiv="refresh" content="10">
```

# 3. name

name 속성을 이름으로, content 속성을 값으로 하여 문서 정보를 이름+값 쌍의 형태로 제공할 때 사용

```html
<meta name="author" content="유진이">
```

# 폼(form)

form은 사용자가 입력한 데이터를 서버로 보내기 위해 사용하는 태그. 

  서버 : 정보를 제공하는 호스트

- 클라이언트가 요청을 보내는 것을 서버에 전달하는 형태

```html
<form>
 <input type="text" placeholder="아이디">
<br>
 <input type="text" placeholder="아이디">
 <input type="submit" value ="로그인">
 <!-- 로그인 버튼을 누르면 결과가 서버로 요청됨(요청)
    서버 측에서 데이터를 처리한 결과를 클라이언트에게 보내준다.(응답) -->
</form>
```

---

# form의 속성

```html
<form action="exmple.php" method="POST">
<input type="submit" value="전송">
</form>
<!-- example.php서버 프로그램으로 입력값을 post 방식으로 전송 -->
```

get : 서버에 요청을 보내어 응답을 받아낸다.

post : 서버에 요청을 보내어 작업을 수행한다. 

form : 입력 요소를 감싸고, 데이터를 제출한다.

: form 속성 —— action : 서버 측 주소

                   —— method: 데이터 전송 방식

---



# select 그리고 textarea

# -select

: 다수의 옵션을 포함할 수 있는 선택 메뉴

```html
<select name='coffee'multiple> <!-- multiple은 다중선택-->
 <option value="dog">스타벅스</option>
 <option selected>커피빈</option> <!-- selected는 기본선택으로 시작-->
 <option>할리스</option>
 <option>이디야</option>
</select>
```

---

# -textarea

: 텍스트를 입력할 때 여러 줄을 치면 밑으로 내려가주는 기능

```html
<textarea rows="10" cols="10">기본적으로 쓰여 있는 텍스트</textarea>
<!-- 텍스트 박스의 크기를 조절할 수 있음 -->
```

# 입력요소 만들기

# input 태그 (단일태그)

---

사용자로부터 값을 입력받을 수 있는 태그

```html
<input/>여기에 뭔갈 쓸 수 있대
```

# input의 핵심, Type 속성

---

type의 값에 따라 입력 요소의 형태나 데이터 유형이 달라짐. 

type종류는 20여가지, 기본값은 text

```html
<input type="text" name="nickname" />
<input type="text" name="job" />
```

name식별자를 추가하여 각 입력항복에 대한 이름을 설정해 줌.

⇒ input태그 구분하기!

```html
<input type="text" placeholder="메세지 입력!" maxlength="5"
        /> <br>
        <input type="button" value="push"/>
        <input type="color"/>
        <input type="range" max="100" min="0" step="10"/>
        <input type="date"/>
```
