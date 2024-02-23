//선언과 동시에 사용
// (function () {})();

// const module = function () {
//     function a() {}
//     function b() {}
//     function c() {}
//     function d() {}
//     return { a: a, b: b, c: c, d: d };
// };

// module.a();
// module.b();
// module.c();
// module.d();

const userService = (() => {
    //회원가입
    const join = ({ email, password, name }) => {};

    //로그인
    const login = (email, password, callback) => {
        return {};
    };

    //마이페이지
    const select = (callback) => {
        return {};
    };

    //회원 수정
    const update = (user) => {
        return {};
    };

    //회원 탈퇴
    const remove = (password) => {};

    return {
        join: join,
        login: login,
        select: select,
        update: update,
        remove: remove,
    };
})();

let user = {
    email: "AAA@aaa.com",
    password: "1234",
    name: "aaa",
};

userService.join(user);
userService.login("AAA@aaa.com", "1234");
