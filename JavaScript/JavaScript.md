# JavaScript



### Browser

* DOM (Document Object Model)
  * 문서 조작
  * 문서를 객체로 구조화 하여 다룸
  * 파싱(Parsing) : 브라우저가 문자열을 해석하여 DOM Tree로 만드는 과정
* Browser Object Model
  * 브라우저의 창이나 프레임을 추상화하여 프로그래밍적으로 제어



### 변수와 식별자

* 식별자(identifier)는 변수를 구분 할 수 있는 변수면
* 반드시 $나 _ 로 시작한다
* 대소문자 구분
* 작성스타일
  * 카멜 케이스 (camelCase) : 변수,객체,함수에 사용
  * 파스칼 케이스 (PascalCase) : 클래스, 생성자 함수에 사용
  * 스네이크 케이스 (SNAKE_CASE) : 상수(constants)에 사용 (변경될 가능성이 없는 값)

#### 변수선언

* <b>let</b>
  * 재할당 가능
  * 재선언 불가능
  * 블록 스코프 (중괄호 내부에서 정의되면 밖에서 접근 불가능)
* <b>const</b>
  * 재할당 불가능
  * 재선언 불가능
  * 블록 스코프
* <b>var</b>
  * 재할당 가능
  * 재선언 가능
  * 호이스팅
    * 변수 선언 이전에 참조가 가능한 현상
  * 함수 스코프 (함수 내부에서 정의된 값만 밖에서 접근 불가능)
  * 사용을 권장하지 않음



### 데이터 타입

#### 원시타입과 참조타입

* <b>원시타입</b> (Primitive Type)
  * 객체가 아닌 기본타입
  * 변수에 해당 타입의 값이 담김
  * 복사할 때 실제 값이 복사됨 (얕은 복사)
* <b>참조타입</b> (Reference Type)
  * 객체타입의 자료형
  * 변수에 해당 객체의 참조값이 담김
  * 복사할 때 참조 값이 복사됨(깊은 복사)

#### 원시타입

* <b>숫자(Number)</b>
  * 정수,실수 구분이 없음
  * 부동소수점 형식
  * `숫자e숫자` : 거듭제곱 표현
  * `Infinity`, `-Infinity` : 무한대, 음의 무한대
  * `NaN` : 산술 연산 불가 ex) 'String' / 1000 => NaN
* <b>문자열(String)</b>
  * 텍스트 데이터
  * 작은따옴표 큰따옴표 모두 사용 가능
  * `${Variation_Name}` 형태로 표현식 삽입
* <b>Undefined</b>
  * 값이 없음
  * 직접 값을 할당하지 않으면 자동으로 Undefined 할당
* <b>null</b>
  * 값이 없고 앞으로도 없을 것
  * 의도적으로 할당
  * `typeof(null)` = object
* <b>Boolean</b>
  * 논리적 참 거짓
  * `true`, `false` 로 표현 (소문자)
  * 자동 형변환
    * Undefined : 항상 false
    * Null : 항상 false
    * Number : `0`, `-0`, `NaN`을 제외하고 항상 true
    * String : 빈 문자열을 제외하고 항상 true
    * Object : 항상 true

#### 참조타입

* <b>함수(Functions)</b>
* <b>배열(Arrays)</b>
* <b>객체(Objects)</b>



### 연산자

대체로 파이썬과 비슷

* `Increment`, `Decrement` 존재 `++`, `--`
* 문자열에 비교 연산자 사용시 유니코드 값을 사용하여 비교
* `==` : 타입변환을 지원하는 연산자
* `===` : 타입변환을 지원하지 않음
* 논리연산자 : `&&` : AND, `||` : OR , `!` : NOT

* 삼항연산자 : (조건 ? 값1 : 값2)
  * ex) `Math.PI > 4 ? 'YES' : 'No'` false 이므로 뒤의 값 'No' 반환



### 조건문



#### if

```javascript
if (condition) {
	//실행
} else if (condition){
	//실행
} else {
	//실행
}
```

* 조건을 () 안에 작성
* 실행할 코드를  {} 안에 작성
* 블록스코프를 생성 ( {} 안에서 선언된 변수는 밖에 영향을 미치지 못함 )



#### switch

```javascript
switch (expression) {
	case 'first value': {
	//실행
	break
	}
	case 'second value': {
	//실행
	break
	}
	default : {
	//실행
	}
}
```

* 표현식(expression)의 결과값과 case 의 값을 비교
* `break`가 없을시 true값을 가지고 계속 진행한다
* `default`와 `break`는 선택적으로 사용가능
* 블록스코프 생성





### 반복문



#### while

```javascript
while (condition) {
	//실행
}
```

* 조건(condition)이 `true` 인 동안 반복
* 조건을 () 안에 작성
* 실행할 코드를  {} 안에 작성
* 블록스코프를 생성

ex)

```javascript
let i = 0

while ( i < 5 ) {
	console.log(i)
	i++
}
```



#### for

```java
for (initialization; condition; expression) {
	//실행
}
```

* initialization : 최초 반복문 진입 시 1회만 실행
* condition : 매 반복 시행 전 평가
* expression : 매 반복 시행 후 평가
* 블록스코프

ex)

```javascript
for (let i = 0; i < 5; i++) {
	console.log(i)
}
// 반복문 진입 변수 i 선언
// 조건 평가 i < 5 이면 실행
// 실행후 i++ 실행
```



* <b>for in</b>

  ```javascript
  for (variable in object) {
  	//실행
  }
  ```

  * 객체의 속성(key)들을 순회 할 때 사용
  * 배열이나 문자열 순회시 자리값을 variable로 가짐
  * 블록스코프

  ex)

  ```javascript
  const capitals = {
  	korea : 'Seoul',
  	france : 'Pari',
  	USA : 'Washington D.C'
  } //object
  
  for (capital in capitals) {
  	console.log(capital) // korea, france , USA 키 값을 순회한다
  }
  ```



* <b>for of</b>

  ```javascript
  for (variable in iterables) {
  	//실행
  }
  ```

  * 반복 가능한(`iterable`) 객체를 순회하며 값을 조회
  * 값을 variable로 가짐
  * 블록스코프

  ```js
  const capitals = [ 'Seoul','Pari','Washington D.C' ]
  
  for (capital of capitals) {
  	console.log(capital) // Seoul, Pari, Washington D.C 객체의 값을 조회
  }
  //object는 of로 순환 불가능하다
  ```
  
  * `Iterable`한 객체
    * `String`, `Array`, `TypedArray`, `Map`, `Set`
  
  ```js
  const capitals = [ 'Seoul','Pari','Washington D.C' ]
  
  for (const capital of capitals) {
  	console.log(capital) //블록 스코프를 가지고 반복마다 초기화 되기 때문에 반복마다 선언이 가능하다
  }
  ```
  
  

### 함수

* 함수의 type은 `function`이다
* JS에서 함수는 `일급객체`이다
  * 변수에 할당 가능함수의 매개변수로 전달 가능
  * 함수의 반환 값으로 사용 가능

#### 함수 선언과 표현

###### 함수 선언식(function declaration)

```javascript
function name(args) {
	//실행
}
```

* `name` : 함수의 이름
* `args ` : 매개변수
* `{ }` : 실행문
* 익명함수 불가능
* 호이스팅 가능 (함수 호출 이후에 선언 해도 동작)

###### 함수 표현식(function expression)

```javascript
const name = function (args) {
	//실행
}
```

* 함수의 이름을 생략하고 익명함수 (anonymous function)으로 정의 할 수 있다
* 호이스팅 불가능
* 권장방식



* <b>기본인자</b>

  ```javascript
  const greeting = function (name = 'Anonymous') {
  	return `Hi ${name}`
  }
  ```

  * `arg =` 형식으로 기본인자 선언 가능 

  * 매개변수가 인자보다 많을 경우 인자의 수 만큼만 받는다

    ```js
    const args = function (arg1, arg2){
    	return [arg1, arg2]
    }
    args(0,1,2) // [0,1]
    ```

  * 매개변수가 인자보다 적을 경우 `undefined` 로 변수를 받는다

    ```
    const args = function (arg1, arg2, arg3){
    	return [arg1, arg2, arg3]
    }
    args(0,1) // [0, 1, undefined]
    ```

    

* <b>Rest Parameter(...)</b>

  ```javascript
  const name = function (args1, args2, ...restArgs) {
  	return restArgs
  }
  
  name(1,2,3,4,5) // [3,4,5]
  ```

  * 정해지지 않은 수의 매개변수를 배열로 받는다

* <b>Spread Operator(...)</b>

  ```javascript
  const plus = function (n1, n2, n3){
  	return n1 + n2 + n3
  }
  
  const numbers = [1,2,3]
  plus(...numbers) // 6
  ```

  * 배열 인자를 전개하여 전달이 가능하다



#### 화살표 함수(Arrow Function)

* function 키워드 생략가능
* 매개변수가 하나일 경우 `()` 생략 가능
* 실행문이 표현식 하나라면 `{}` `return` 도 생략가능

```javascript
const arrow1 = function (args) { return `hello ${ars}`}
//function 생략
const arrow2 = (args) => { return `hello ${args}`}
//()생략
const arrow3 = args => { return `hello ${args}`}
//{},return생략
const arrow4 = args => `hello ${args}`
```



### 문자열

#### 문자열 주요 메서드

* <b>includes</b>

  ```javascript
  // 문자열에 value가 존재하는지 판별 후 ture false 반환
  const str = 'santa'
  
  str.includes('san') // true
  str.includes('abd') // false
  ```

* <b>split</b>

  ```javascript
  const str = 'a santa'
  
  str.split()		// value가 없을 경우 기존 문자열을 배열에 담아 반환
  str.split('')	// value가 빈 문자열일 경우 각 문자로 나눠서 반환
  str.split(' ')	// value가 기타 문자열일 경우 해당 문자열로 나눈 배열을 반환
  str.split('a')
  
  ['a santa']
  ['a',' ','s','a','n','t','a']
  ['a','santa']
  ['s','nt','']
  ```

* <b>replace</b>

  ```js
  const str = 'a b c d'
  
  str.replace('','-') // 'a-b c d' 처음 한개의 값만 교체하여 반환
  str.replaceAll('','-') // 'a-b-c-d' 모두 교체하여 반환
  ```

  * <b>replaceAll</b>

* <b>trim</b>

  ```js
  const str = '   hello   '
  
  str.trim()		// 'hello'	 양쪽 공백제거
  str.trimStart()	// 'hello   ' 왼쪽 공백제거
  str.trimEnd()	// '   hello' 오른쪽 공백제거
  ```

  * <b>trim</b>
  * <b>trimStart</b>
  * <b>trimEnd</b>



### 배열

* 키와 속성들을 담고있는 참조타입의 객체
* 순서를 보장
* 마지막 원소는 [-1] 로 접근 불가능 ( `[array.length -1]`의 형태로 접근)

```js
const numbers = [1,2,3]

console.log(numbers[0])		//1
console.log(numbers[-1])	//undefined
console.log(numbers.length)	//3	배열길이
console.log(numbers[numbers.length-1])	//3 마지막 원소 접근 방법
```



#### 배열 주요 메서드



* <b>reverse</b>
  
  ```js
  const numbers = [1,2,3,4,5]
  numbers.reverse()
  console.log(numbers)// [5,4,3,2,1] 순서 반대로 정렬
  ```
  
* <b>push&pop</b>
  
  ```js
  const numbers = [1,2,3,4,5]
  numbers.push(100)
  console.log(numbers)// [1,2,3,4,5,100] 배열의 가장 뒤에 요소 추가
  numbers.pop()
  console.log(numbers)// [1,2,3,4,5] 배열의 마지막 요소 제거
  ```
  
* <b>unshift&shift</b>
  
  ```js
  const numbers = [1,2,3,4,5]
  numbers.unshift(100)
  console.log(numbers)// [100,1,2,3,4,5] 배열의 가장 앞에 요소 추가
  numbers.shift()
  console.log(numbers)// [1,2,3,4,5] 배열의 첫번째 요소 제거
  ```
  
* <b>includes</b>
  
  ```js
  const numbers = [1,2,3,4,5] // 특정값이 존재하는지 확인 후 `true` `false` 반환
  console.log(numbers.includes(1))// true
  console.log(numbers.includes(100))// false
  ```
  
* <b>index0f</b>
  
  ```js
  const numbers = [1,2,3,4,5] // 특정값이 존재하는지 확인 후 인덱스 반환 없으면 -1 반환
  console.log(numbers.indexOf(3))// 2
  console.log(numbers.includes(100))// -1
  //복수 존재시 가장 처음 인덱스 반환
  ```
  
* <b>join</b>(separator)
  
  ```js
  const numbers = [1,2,3,4,5]
  console.log(numbers.join()) //1,2,3,4,5
  console.log(numbers.join('')) //12345
  console.log(numbers.join(' ')) //1 2 3 4 5
  console.log(numbers.join('-')) //1-2-3-4-5
  ```
  
  * 모든 요소를 연결하여 반환
  * separator는 선택적으로 사용, 없을시 `,`를 기본으로 적용
  
* <b>...</b>

  ```javascript
  const array = [1,2,3]
  const newArray = [0, ...array,4]
  
  console.log(newArray) // [0,1,2,3,4]
  ```

  * spread operator
  * 배열 내부에서 배열 전개 가능
  * 얕은 복사에 활용 가능

#### 배열 주요 메서드 (콜백함수 사용)

* <b>forEach</b>
  * 배열 각 요소에 대해 콜백 함수를 한번씩 실행
* <b>map</b>
  * 콜백 함수의 반환값을 요소로 하는 새로운 배열 반환
* <b>filter</b>
  * 콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열 반환
* <b>reduce</b>
  * 콜백 함수의 반환 값들을 하나의 값에 누적 후 반환
* <b>find</b>
  * 콜백 함수의 반환 값이 참이면 해당 요소를 반환
* <b>some</b>
  * 배열의 요소 중 하나라도 판별 함수를 통과하면 참 반환
* <b>every</b>
  * 배열의 모든 요소가 판별 함수를 통과하면 참을 반환



#### 배열 순회 방법 비교

```js
const chars = ['A', 'B', 'C', 'D']

for(let idx = 0; idx < chars.length; idx++){
    console.log(idx,chars[idx])
}
// 인덱스를 활용하여 배열요소 접근 break,continue 사용가능

for(const char of chars){
    console.log(char)
}
// 인덱스 없이 배열요소 바로 접근 break,continue 사용가능

char.forEach((char,idx) => {
    console.log(idx,char)
})

char.forEach((char) => {
    console.log(char)
})
// break continue 사용 불가능
```





### 객체



#### 객체의 정의와 특징

* 객체는 속성(property)의 집합이며 key와 value로 구성
* key는 문자열 타입만 가능
* value는 모든 타입 가능
* 객체 요소 접근은 `.`이나 `[]`로 가능



#### 객체와 메서드

* 메서드는 객체의 속성이 참조하는 함수
* `object.method()` 형식으로 호출

```javascript
const me = {
	firstName : 'junkoo',
	lastName : 'kim',
	//this 는 객체를 의미함 여기서는 me를 의미
	fullName : this.firstName + this.lastName,
    //fullName은 메서드가 아니므로 오류 발생(NaN)
	getFullName : function(){
		return thisfirstName + this.lastName
    //getFullName은 메서드이기 때문에 정상적으로 작동
	}
}
```



#### 객체 관련 문법

* <b>속성명 축약</b>

  * key와 변수의 이름이 같으면 축약가능

  ```javascript
  const num = [1,2,3]
  const alpha = ['a','b','c']
  const obj = {
  	num,
  	alpha,
  }
  
  console.log(obj)
  /*
  {
  	num : [1,2,3],
  	alpha = ['a','b','c']
  }
  */
  ```

  

* <b>메서드명 축약</b>

  * 메서드 선언시 function 생략 가능

  ```javascript
  const obj = {
  	greeting1: function(){
  		console.log('Hi')
  	},
      greeting2(){
  		console.log('Hi')
  	}
  }
  ```

  

* <b>계산된 속성</b>

  * 객체를 정의할 때 key의 이름을 표현식을 이용하여 동적으로 생성

  ```js
  const key = 'numbers'
  const value = [1,2,3,4]
  const obj = {
      [key] : value,
  }
  
  console.log(obj)		// { numbers : Array[4] }
  console.log(obj.value)	// [1,2,3,4]
  ```

  

* <b>구조분해 할당</b>(destructing assignment)

  * 배열 또는 객체를 분해하여 속성을 변수에 쉽게 할당 할 수 있음

  ```js
  const userInfo = {
  	name : 'junkoo'
  	id : 'jk95'
  	phone : '010-0000-0000'
  }
  
  const name = userInfo.name
  const id = userInfo.id
  const phone = userInfo.phone
  //=>
  const {name} = userInfo
  const {id} = userInfo
  const {phone} = userInfo
  //여러개도 가능
  const {name,id,phone} = userInfo
  ```

  

* <b>Spread Operator</b>

  * 객체 내부에서 객체 전개 가능
  * 얕은 복사에 활용가능

  ```js
  const obj = {b:2, c:3, d:4}
  const newObj = {a:1, ...obj, e:5}
  
  console.log(newObj) //{a:1, b:2, c:3, d:4, e:5}
  ```

  

* <b>JSON</b>

  * `key-value`쌍의 형태로 데이터를 표기하는 언어독립 표준 포맷
  * 자바스크립트 객체와 유사하나 실제로는 문자열타입
  * JS의 객체로써 조작하기 위해서는 `Parsing`이 필수적
  * `JSON.parse()` : JSON => JS Object
  * `JSON.stringify())` : JS Object => JSON

  ```js
  // Object => JSON
  const jsonData = JSON.stringify({
  	a : 1,
      b : 2,
  })
  
  const parsedData = JSON.parse(jsonData)
  ```

  

### this

