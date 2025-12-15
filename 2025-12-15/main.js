// npx tsc main.ts && node main.js
/* 문제 1 : 다음 변수들의 타입을 지정해주세요 */
var userName; // 예: 이름
var userAge; // 예: 나이
var isAdmin; // 예: 관리자 여부
userName = "Alice";
userAge = 25;
isAdmin = true;
/* 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.*/
// 변수 선언과 초기값 지정
var productName = "iPhone 17"; // 상품 이름
var productPrice = 1230000; // 상품 가격
var isAvailable = true; // 상품 재고 여부
// 예시 출력
console.log("\uC0C1\uD488\uBA85: ".concat(productName, ", \uAC00\uACA9: ").concat(productPrice, ", \uC7AC\uACE0 \uC5EC\uBD80: ").concat(isAvailable));
/* 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.*/
console.log(addNumbers(5, 3));
function addNumbers(a, b) {
    return a + b;
}
/* 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다 */
function stringifyValue(value) {
    return value !== null && value !== void 0 ? value : "값이 없습니다";
}
// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
/* 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.*/
function compareValues(a, b) {
    if (a === b) {
        return "엄격한 동등성";
    }
    else if (a == b) {
        return "느슨한 동등성";
    }
    else {
        return "동등하지 않음";
    }
}
// 함수 호출 예시
console.log(compareValues(5, "5")); // 느슨
console.log(compareValues(null, undefined)); // 느슨
console.log(compareValues(false, 0)); // 느슨
console.log(compareValues(NaN, NaN)); // NaN 끼리는 그냥 아예 안 동등
console.log(compareValues(42, 42)); // 엄격
/* 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.*/
function isPrimitive(value) {
    // 여기에 구현
    // string
    // number
    // boolean
    // bigint
    // symbol
    // undefined
    // null
    if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        typeof value === "bigint" ||
        typeof value === "symbol" ||
        typeof value === "undefined" ||
        value === null // typeof null은 object네..
    ) {
        return true;
    }
    return false;
}
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
