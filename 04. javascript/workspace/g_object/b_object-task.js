//회원
//번호, 이름
let user = {};
user.number = 1;
user.name = "userName";

//게시글
//번호, 제목, 내용
let post = { user: user };
post.number = 3;
post.title = "postTitle";
post.content = "postContent";

//좋아요
//번호
let likes = { user: user, post: post };
likes.number = 3;
likes.post = post;

//숙제
//중고차 시장에서 다음과 같은 데이터가 필요
//1:N, N:1
//자동차
let car = {};

//등록증
let paper = { car: car, owner: owner };

//차주
let owner = {};
