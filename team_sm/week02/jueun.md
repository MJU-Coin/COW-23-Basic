## form:

    - 사용자가 입력한 데이터(입력값)를 서버로 보내기 위해 사용하는 태그.
    + 서버란? 정보를 제공하는 호스트.
    + 클라이언트(사용자)가 요청을 하면, 서버는 그에 대한 응답으로 정보를 제공함.
    - 입력 요소들을 감싸며, 입력 값을 서버 측으로 submit할 수 있다.
    - form의 내용을 제출하기 위해 input 태그의 submit 타입을 사용 가능.
    - ex) <input type="submit" value="로그인">
    - 로그인 버튼을 누르면 입력된 데이터가 서버로 전송되고(=요청), 서버 측에서 데이터를 처리해 그 결과를 클라이언트에게 보내줌(응답)

## form의 속성:

    - action: 입력값을 전송할 서버의 url 작성.
    - method: 사용자가 입력한 데이터를 그냥 보여주며 전송할건지 숨겨서 전송할건지.(GET or POST)

## GET:

    - GET은 요청을 전송할 때 URL 주소 끝에 파라미터로 사용자가 입력한 데이터가 파라미터로 포함되어 전송됨. 이 부분을 쿼리 스트링(QueryString)이라고 함.
    (만약, 요청된 파라미터가 여러 개면 &로 연결된다.)
    - ex) www.example-url.com/resources?name1=엄주은&name2=엄주동

## POST:

    - 이처럼 POST는 데이터가 Body로 전송되고, 내용이 눈에 보이지 않음.
    - GET보다 보안적인 면에서 안전하다고 생각할 수 있지만, POST 요청도 크롬의 개발자 도구, Fiddler와 같은 툴로 요청 내용을 확인할 수 있음
    - 민감한 데이터의 경우에는 반드시 암호화해 전송해야 함.
    - ex) http://example.php

## Idempotent. 멱등성:

    - idempotent는 멱등법칙(冪等法則) 또는 멱등성(冪等性)이란 뜻으로, 수학이나 전산학에서 연산의 한 성질을 나타내는 것으로, ""연산을 여러 번 적용하더라도 결과가 달라지지 않는 성질""을 의미한다.
    (출처 : 위키백과)
    - 집중해야 할 부분은 딱 한 줄.
    - 즉, 멱등이라는 것은 동일한 연산을 여러 번 수행하더라도 동일한 결과가 나타나야함.

## Idempotent하도록 설계된 GET:

    - GET으로 서버에게 동일한 요청을 여러 번 전송하더라도 동일한 응답이 돌아와야 한다는 것을 의미.
    - 이에 따라 GET은 설계 원칙에 따라 서버의 데이터나 상태를 변경시키지 않아야 Idempotent함.
    - 이 때문에 주로 조회시에 사용.
    - ex) 브라우저에서 웹페이지를 열어보거나 게시글을 읽는 등 조회를 하는 행위 --> GET으로 요청.

## Non-idempotent하도록 설계된 POST:

    - POST는 Non-idempotent 하기 때문에 서버에게 동일한 요청을 여러 번 전송해도 응답은 항상 다를 수 있음.
    - 이 때문에 POST는 서버의 상태나 데이터를 변경시킬 때 사용.
    -  게시글을 쓰면 서버에 게시글이 저장이 되고, 게시글을 삭제하면 해당 데이터가 없어지는 등 POST로 요청을 하게 되면 서버의 무언가는 변경되도록 사용됨.
    - (그렇지만 생성은 POST, 수정은 PUT, 삭제는 DELETE가 더 용도에 맞는 메서드라고 함.)

## 왜 멱등을 구분하는가?:

    - 네트워크 상에서 어떤 요청을 했을 때, 네트워크 상에서 다양한 변수에 의해(패킷 유실, 패킷 손실, 지연 등 수많은 이유) 요청이 실패할 수 있음.
    - 보통 이런 예외에 의해 실패할 경우 재전송을 통해 해결하려함.
    - 이 경우에 멱등인지 아닌지가 매우 중요함.
    - 예를 들어 주문에 대한 POST 요청이 지연이나 손실에 의해 실패했을 경우 재전송 된다 하더라도 이전 요청의 상태를 파악하지 않은 상황에서 재전송된 요청의 처리가 되어선 안됨.
    - 그러므로 멱등 속성의 메서드의 경우 재전송 온 요청을 일단 처리하고 봐도된다는 점이 있음.

## viewport(뷰포트):

    - 의미: 현재 화면에 보여지고 있는 영역.
    - 웹 문서의 설계: 기본적으로 PC 화면에 맞게. --> 다른 기기에선? 배율 조정이 일어남.
    - 아래 코드는 viewport 지정 시 가장 많이 사용하는 형태임.
    - <meta name="viewport" content="width=device-width, initial-scale=1.0">
