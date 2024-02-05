//color에는 색상, result에는 color
//color의 종류는 검은색, 빨간색, 흰색, 노란색
let color = "검은색";
let result = "";

switch (color) {
    case "검은색":
        result = "black";
        break;
    case "빨간색":
        result = "red";
        break;
    case "흰색":
        result = "white";
        break;
    case "노란색":
        result = "yellow";
        break;
    default:
        result = "다시 입력";
        break;
}

console.log(result);
