// 1
// 매개변수, 리턴타입 정의 필요
function getFirstElement<T>(array: T[]): T | undefined {
  // 여기에 구현
  return array[0];
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

// 2

// 매개변수, 리턴타입 정의 필요
function isNumberArray<T>(array: T[]): boolean {
  // 여기에 구현
  return array.every((item) => typeof item === "number");
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)

// 3
// 조건부 타입 정의
type IsArray<T> = T extends Array<any> ? true : false;

// const a: IsArray<number[]> = true;
// const b: IsArray<number> = false;

// 4
// Mapped Type 정의
type WithDefault<T> = {
  // 여기에 작성
  [key in keyof T]: [T[key], T[key]];
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }

// 5
// 매개변수, 리턴 타입 정의 필요
function pluck<T>(array: T[], key: keyof T): T[keyof T][] {
  // 여기에 구현
  return array.map((item) => item[key]);
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice", haha: "hoho" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
console.log(pluck(users, "haha")); // ["hoho", undefined]

// 1

const exhaustiveCheck = (style: never) => {
  throw new Error("Unknown style: " + style);
};

type ButtonStyle = "primary" | "secondary" | "danger";

function getButtonClass(style: ButtonStyle): string {
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
// console.log(getButtonClass("unknown")); // 오류 발생

// 2
type Status = "loading" | "success" | "error";
function handleRequestState(state: Status): string {
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
