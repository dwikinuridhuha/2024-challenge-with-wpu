/*
    Name Challenge: Is he gonna survive?

    Video:
    https://www.youtube.com/watch?v=y2YEemIlSPo&list=PLFIM0718LjIVrOglQcS_ZHkT5T_27Cmea&index=3

    Challenge:
    https://www.codewars.com/kata/59ca8246d751df55cc00014c/solutions/typescript

    Source code:
*/
export function hero(bullets: number, dragons: number): boolean {
    return bullets / 2 >= dragons;
}

console.log(hero(28,14));