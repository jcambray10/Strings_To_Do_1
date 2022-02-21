var oldString = "Pl ayTha tF u nkyM usi c";
var newString = oldString.replace(/\s+/g,"");

console.log(newString);

function removeBlanks(str) {
    return str.split(" ").join("");
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

var oldString = "0s1a3y5w7h9a2t4?6!8?0";
var newString = oldString.replace(/\D/g,'');

console.log(newString);

function getDigits(str) {
    var stringArr = str.split("");
    var intStr = "";
    for (var ind = 0; ind < stringArr.length; ind++) {
        if (stringArr[ind]%1 == 0) {
            intStr += stringArr[ind];
        }
    }
    return intStr/1;
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}

console.log(acronyms(" there's no free lunch - gotta pay yer way. "));
console.log(acronyms( "Live from New York, it's Saturday Night!"));


// echo "# strings_to_do_1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jcambray10/strings_to_do_1.git
// git push -u origin main