# 비동기 통신과 AXIOS

### AJAX

* 비동기식 자바스크립트와 XML

* 서버와 통신하기 위해 XMLHttpRequest 객체를 활용
* 페이지 전체를 reload 하지 않고도 수행되는 비동기성

```js
const request = new XTMLHttpRequest()
const URL = 'URL주소'

request.open('Get',URL)
request.send()

const todo = request.response
console.log(`data : ${todo}`)
// todo가 출력되지 않음
// 비동기식 진행으로 request 요청을 보낸후 바로 다음으로 진행
// respopnse를 받기전에 console.log가 실행됨
```



### 동기식과 비동기식

#### 동기식

* 요청을 보낸 후 응답을 받아야만 다음 동작이 이루어진다
* JS는 single threaded 한번에 하나의 일만 한다

#### 비동기식

* Task를 병렬적으로 수행
* 요청을 보낸후 응답을 기다리지 않고 다음 동작 수행



### Concurrency Model

* <b>Call Stack</b> : 요청이 들어올 때마다 해당 요청을 순차적으로 처리
* <b>Web API</b> : JS가 아닌 브라우저 영역에서 제공하는 API
* <b>Task Queue</b> : 비동기 처리된 callback 함수가 대기하는 자리 
* <b>Event Loop</b> : Call Stack이 비어있는지 확인하고 Task Queue에서 실행 대기중인 함수를 PUSH



### Zero Delays

* Delay(지연) 개념은 시간이 아니라 순서의 개념
* `setTimeout`에서 특정 지연 시간을 설정하였더라도 대기중인 메시지의 모든 코드가 완료될 때까지 대기



### Callback function

* 다른 함수에 인자로 전달된 함수
* 동기식 비동기식 모두 사용됨
* 비동기 작업이 완료된 후 코드 실행을 계속하는데 사용되는 경우를 `비동기 콜백` 이라고 한다

#### 	일급 객체

		* 다른 객체들에 적용할 수 있는 연산을 모두 지원하는 객체
		* 인자로 넘길 수 있다
		* 함수의 반환값으로 사용 할 수 있다
		* 변수에 할당 할 수 있다

#### 	Callback Hel

* 순차적 연쇄비동기 작업을 처리하기 위해 call back 함수를 호출하는 패턴이 지속적으로 반복됨
* 디버깅이 난해하고 코드 가독성이 떨어짐
* 그래서 `Promise Callback`을 사용한다



### Promise

