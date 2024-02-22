//문자열: 문자가 나열되어 있는 형태

//split("구분점"): 문자열에서 원하는 문자를 구분점으로 간주하고 그 구분점을 전달해서 각 값을 나누어 Array 객체로 반환
let uri = "post/list/1";
console.log(uri.split("/"));

console.log("월화수목금토일".split(""));

const day = "월화수목금토일".split("").map((day) => `${day}요일`);
console.log(day);

//includes(value): 전달한 값이 문자열에 포함되었는지 검사할 때 사용
console.log("abc".includes("a"));

const type = "image/png base64:1h324rhhfj3755qvh256uhh91rroi32w";
let isImage = type.includes("image");
console.log(isImage);

//replace(old, new), replaceAll(old, new): old를 찾은 뒤 new로 교체
//replace()는 중복된 old값이 있어도 첫번째 값만 교체
//replaceAll()은 old값에 전달한 값을 전체에서 찾은 뒤 전부 교체
console.log("ABBBBBC".replace("B", "Z"));
console.log("ABBBBBC".replaceAll("B", "Z"));

let birth = "2000-12-04";
const data = birth.replaceAll("-", "");
console.log(data);

//indexOf(value), lastIndexOf(value): 전달한 값의 인덱스를 return
console.log([1, 2, 3].lastIndexOf(3));

const i = "ABCDA".lastIndexOf("A");
console.log(i);

//substring(begin, end): 원하는 인덱스를 전달해서 해당 부분의 문자열을 추출
//end를 생략하면 끝까지 추출
console.log("ABCDE".substring(0, 2));

//URL 분석
// /member/my-page/post
const url = "/member/my-page/post";

//1차
let urlUpdated = url.substring(1);
let end = urlUpdated.indexOf("/");
let appName = urlUpdated.substring(0, end);

console.log(appName);

//2차
let start = urlUpdated.indexOf("/") + 1;
let serviceName = urlUpdated.substring(start);

console.log(serviceName);
