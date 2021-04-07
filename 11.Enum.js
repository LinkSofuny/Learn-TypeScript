var Names;
(function (Names) {
    Names[Names["link"] = 0] = "link";
    Names[Names["kiki"] = 1] = "kiki";
    Names[Names["tom"] = 2] = "tom";
})(Names || (Names = {}));
var a = [1, 2, 3, 4];
var SSCS;
(function (SSCS) {
    SSCS[SSCS["red"] = 'a'.length] = "red";
    SSCS[SSCS["blue"] = 2] = "blue";
    SSCS[SSCS["green"] = 3] = "green";
})(SSCS || (SSCS = {}));
console.log(Names['link'] === 1);
console.log(Names[2] === 'kiki');
