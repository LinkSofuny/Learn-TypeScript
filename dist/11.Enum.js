var Names;
(function (Names) {
    Names[Names["link"] = 0] = "link";
    Names[Names["kiki"] = 1] = "kiki";
    Names[Names["tom"] = 2] = "tom";
})(Names || (Names = {}));
let a = [1, 2, 3, 4];
var Colors;
(function (Colors) {
    Colors[Colors["blue"] = 0] = "blue";
    Colors[Colors["red"] = 'a'.length] = "red";
    Colors[Colors["green"] = 3] = "green";
})(Colors || (Colors = {}));
console.log(Names['link'] === 1);
console.log(Names[2] === 'kiki');
