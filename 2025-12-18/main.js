// 1
// 매개변수, 리턴타입 정의 필요
function getFirstElement(array) {
    // 여기에 구현
    return array[0];
}
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
// 2
// 매개변수, 리턴타입 정의 필요
function isNumberArray(array) {
    // 여기에 구현
    return array.every(function (item) { return typeof item === "number"; });
}
// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
// 5
// 매개변수, 리턴 타입 정의 필요
function pluck(array, key) {
    // 여기에 구현
    return array.map(function (item) { return item[key]; });
}
// 테스트 코드
var users = [
    { id: 1, name: "Alice", haha: "hoho" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
console.log(pluck(users, "haha")); // ["hoho", undefined]
// 1
var exhaustiveCheck = function (style) {
    throw new Error("Unknown style: " + style);
};
function getButtonClass(style) {
    // 여기에 구현
    switch (style) {
        case "primary":
            return "btn-primary";
        case "secondary":
            return "btn-secondary";
        case "danger":
            return "btn-danger";
        default:
            return exhaustiveCheck(style);
    }
}
// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
function handleRequestState(state) {
    // 여기에 구현
    switch (state) {
        case "loading":
            return "Loading, please wait...";
        case "success":
            return "Request successful!";
        case "error":
            return "There was an error processing your request.";
    }
}
// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생
