function change(object) {
    // object.src = 'images/${object.src.includes("icon5") ? "icon6.png" : "icon5.png"}'
    if (object.src.includes("icon5")) object.src = "images/icon6.png";
    else object.src = "images/icon5.png";
}
