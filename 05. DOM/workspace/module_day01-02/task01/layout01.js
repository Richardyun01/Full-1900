const userLayout = (() => {
    const showList = (users) => {
        let text = ``;
        users.forEach((user) => {
            text += `
                <tr>
                    <td>${user.id}</id>
                    <td>${user.name}</id>
                    <td>${user.address.stree}</id>
                    <td>${user.address.suite}</id>
                    <td>${user.address.city}</id>
                    <td>${user.address.zipcode}</id>
                </tr>
            `;
        });
        return text;
    };

    const showUser = (createdUser) => {
        //새롭게 추가된 회원의 정보 객체를 화면 형식에 맞는 태그 문자열로 변경
        return `
            <tr>
                <td>${createdUser.id}</td>
                <td>${createdUser.name}</td>
                <td>${createdUser.street}</td>
                <td>${createdUser.suite}</td>
                <td>${createdUser.city}</td>
                <td>${createdUser.zipcode}</td>
            </tr>
        `;
    }

    return { showList: showList, showUser: showUser };
})();