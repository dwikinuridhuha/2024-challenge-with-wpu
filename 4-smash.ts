/*
    Name Challenge: Sentence Smash?

    Video:
    https://www.youtube.com/watch?v=JCDVi5Pot30&list=PLFIM0718LjIVrOglQcS_ZHkT5T_27Cmea&index=4

    Challenge:
    https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/typescript

    Source code:
*/

export function smash (words: string[]): string {
    return words.join(" ");
}

console.log(smash(["hello", "amazing", "world"]))