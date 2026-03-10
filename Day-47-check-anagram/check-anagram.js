// Day 47: Check Anagram

function isAnagram(str1, str2) {

    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    if (s1 === s2) {
        console.log("Anagram");
    } else {
        console.log("Not Anagram");
    }
}

isAnagram("listen", "silent");
