/*
    Video:
    https://www.youtube.com/watch?v=_9TeAkRddqc&list=PLFIM0718LjIVrOglQcS_ZHkT5T_27Cmea&index=2

    Challenge:
    https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/typescript

    Source code:
*/

export const reverseSeq = (n: number): number[] => {
    return [...Array(n)].map((_val, idx) => n - idx);
};

console.log(reverseSeq(10));