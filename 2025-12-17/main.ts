// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.
// Product 타입 정의
type Product = {
  id: number;
  name: string;
  price: number;
};
// 여기에 작성

// Discount 타입 정의
type Discount = {
  discountPercentage: number;
};
// 여기에 작성

function calculateDiscountedPrice(item: Product & Discount): number {
  // 여기에 구현
  return (item.price * (100 - item.discountPercentage)) / 100;
}

// 테스트 코드
const discountedProduct = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800

// 문제2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.

type ContactInfo = {
  phone: string;
  address: string;
};

type OrderInfo = {
  orderId: number;
  items: string[];
};

function printOrderSummary(order: ContactInfo & OrderInfo): string {
  // 여기에 구현
  return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"

// 문제3. 사용자 프로필과 활동 기록 병합
// 기본 사용자 정보 타입 정의
// 여기에 작성
type Profile = {
  id: number;
  name: string;
  email: string;
};

// 사용자 활동 기록 타입 정의
// 여기에 작성
type Activity = {
  lastLogin: Date;
  actions: string[];
};

// 사용자 데이터를 병합하는 함수
function mergeUserData(
  profile: Profile,
  activity: Activity
): Profile & Activity {
  return {
    ...profile,
    ...activity,
  };
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: Profile & Activity): string {
  // 여기에 구현
  return `사용자 ${user.id} - ${user.name} (${
    user.email
  }) - 마지막 로그인 : ${user.lastLogin.toISOString()}`;
}

// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"

// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.

// 매개변수, 리턴타입 정의필요
function processInput(
  input: number[] | string[] | { message: string }
): string | number {
  // 여기에 작성
  if (Array.isArray(input)) {
    if (input.length === 0) {
      throw new Error();
    }

    if (input.every((v) => typeof v === "string")) {
      return input.join("");
    }

    if (input.every((v) => typeof v === "number")) {
      return input.reduce((a, b) => a + b, 0);
    }

    throw new Error();
  }

  return input.message.toUpperCase();
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생

// 문제2. 다음 조건을 만족하는 코드를 작성하세요.

// 클래스 정의
// 여기에 작성
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

class Bike {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

function processVehicle(vehicle: Car | Bike): string {
  // 여기에 구현
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  }

  return "Bike: " + vehicle.type;
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle("unknown")); // 에러 발생

// 문제3. in을 활용한 사용자 관리
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  // 여기에 작성
  if (user.type === "admin") {
    return user.permissions.join();
  }

  return user.email;
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// console.log(processUser({ type: "guest" })); // 에러 발생

// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
  return (
    typeof (shape as Rectangle).width === "number" &&
    typeof (shape as Rectangle).height === "number"
  );
}

function calculateArea1(shape: Rectangle | Circle): number {
  // 여기에 작성
  if (isRectangle(shape)) {
    return shape.height * shape.width;
  }

  return shape.radius * shape.radius * 3.14;
}

// 테스트 코드
console.log(calculateArea1({ width: 10, height: 5 })); // 50
console.log(calculateArea1({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

// 문제5. 유니온 타입의 문제점과 해결 방법
type Shape =
  | { side: number; type: "square" }
  | { radius: number; type: "circle" };

// 넓이를 계산하는 함수
function calculateArea2(shape: Shape): number {
  // 여기에 구현
  if (shape.type === "circle") {
    return 3.14 * shape.radius * shape.radius;
  } else if (shape.type === "square") {
    return shape.side * shape.side;
  } else {
    exhaustiveCheck(shape);
  }
}

function exhaustiveCheck(params: never): never {
  throw new Error();
}

// 테스트 코드
console.log(calculateArea2({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea2({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
