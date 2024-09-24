import { reverseString, countCharacters, pickEveryLetterT } from "./stringUtils";
import fs from "fs";

export const useReverseString = reverseString(
    "Learning NodeJS gives us the flexibility to go through the fullstack of an application using the same programming language, hurrah!"
);



console.log("How many letter 't's do we have in this string? " + pickEveryLetterT());
console.log("The amount of characters used in our reversed string minus the spaces is: " + countCharacters(useReverseString));
console.log("And here's our character strings in reverse:" + " " + useReverseString)

fs.writeFileSync("reversed.txt", useReverseString);