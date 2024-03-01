const userService = (() => {
    const join = ({ email, password, name }) => {};

    const login = (email, password, callback) => {
        return {};
    };

    const select = (callback) => {
        return {};
    };

    const update = (user) => {
        return {};
    };

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

const postService = (() => {
    const write = ({ title, content, ...file }) => {};

    const getList = (page) => {
        return {};
    };

    const select = (id) => {
        return {};
    };

    const update = (post) => {};

    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        select: select,
        update: update,
        remove: remove,
    };
})();
