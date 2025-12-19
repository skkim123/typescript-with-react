var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 함수 작성
function updateUserForm(user, updates) {
    return __assign(__assign({}, user), updates);
}
// 테스트 코드
var currentUser = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
};
var updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    return {
        id: user.id,
        name: user.name,
    };
}
// 테스트 코드
var userProfile = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    address: "123 Main St",
};
console.log(getProfileSummary(userProfile));
// 함수 작성
function filterSensitiveInfo(user) {
    return {
        name: user.name,
        email: user.email,
        role: user.role,
    };
}
// 테스트 코드
var userInfo = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
    role: "admin",
};
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    // 여기에 구현
    return __assign({ id: 1, name: "", email: "", role: "developer", isActive: true }, data);
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    // 여기에 구현
    return members.filter(function (member) {
        return member.role === filter.role && member.isActive === filter.isActive;
    });
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    // 여기에 구현
    return members.map(function (member) { return ({
        id: member.id,
        name: member.name,
        role: member.role,
        isActive: member.isActive,
    }); });
}
// 테스트 코드
var members = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        role: "developer",
        isActive: true,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        role: "designer",
        isActive: false,
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        role: "manager",
        isActive: true,
    },
];
// 1. 새 팀원 생성
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
var activeDesigners = filterTeamMembers(members, {
    role: "designer",
    isActive: true,
});
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 배송비 데이터 정의
var shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
// 배송비 계산 함수 작성
function calculateShippingCost(region, costs) {
    // 여기에 구현
    return costs[region];
}
// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
// 2
// 학생 점수 데이터 정의
var scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    // 여기에 구현
    var sum = 0;
    for (var score in scores) {
        sum += scores[score];
    }
    return sum / Object.keys(scores).length;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
// 3
// 제품 가격 데이터 정의
var prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
// 가격 업데이트 함수 작성
function updateProductPrice(prices, product, newPrice) {
    var _a;
    // 여기에 구현
    return __assign(__assign({}, prices), (_a = {}, _a[product] = newPrice, _a));
}
// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
