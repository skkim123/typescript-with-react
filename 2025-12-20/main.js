// 2
function getValue(obj, key) {
    // 여기에 구현
    // as가 필요한가요..?
    return obj[key];
}
// 테스트 코드
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
function processRequest(type, data) {
    // 여기에 구현
    return "Processed: ".concat(data);
}
// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
