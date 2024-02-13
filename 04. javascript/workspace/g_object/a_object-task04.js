//회원
//번호, 이름
let member = {
    id: 1,
    name: "memberName",
};

//프로필 사진
//번호, 경로(2024/02/13/a.png)
let picture = {
    number: 2,
    path: "a.png",
    member: member,
};

const fullPath = `upload/${picture.path}`;

console.log(fullPath);
console.log(picture.member.name);
