// export const toUpperCase = (str: string): string => str.toUpperCase();
// export const toLowerCase = (str: string): string => str.toLowerCase();
import { useReverseString } from "./main";

export const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
};

/* 
I actually did step 4 after I'd done the extra function below :D I did get stuck 
with what parameters to put in the function, and may have over-done it on the returns
but i was adding them due to errors i had so newbie code that works is good enough for today !!
*/

export const countCharacters = (useReverseString: string): number => {
    let charsMinusSpaces: string[] = [];
    for (let i = 0; i < useReverseString.length; i++) {
        if (useReverseString[i] !== " ") {
            charsMinusSpaces.push(useReverseString[i])
        };
    };
    return charsMinusSpaces.length;
};

// Now, think of another useful string function and add the function to this module. It’s up to you! Be creative and have fun with it. 

/* i wanted to practice something so I devised a way to catch how many letter t's we had and return the amount
I managed to put this together myself after a bit of a struggle as i always get the ordering wrong on the positioning
of what goes on which sides of the arguments like push, or [] (like i do i[reverseString]) because logically and 
grammatically that's the right way, the index position of reverseString, but not in programming! */

export const pickEveryLetterT = () => {
    let result: string[] = [];
    for (let i = 0; i < useReverseString.length; i++) {
        const currentLetter = useReverseString[i]
        if (currentLetter === "t") {
            result.push(currentLetter)
        };

    };
    return result.length;
};