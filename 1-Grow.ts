/*
    Video:
    https://www.youtube.com/watch?v=FPwm_F9ljvg&list=PLFIM0718LjIVrOglQcS_ZHkT5T_27Cmea&index=1

    Challenge:
    https://www.codewars.com/kata/57f780909f7e8e3183000078/train/typescript

    Source code:
*/

const valueArray: number[] = [1, 2, 3, 4];

const grow = (arr: number[]) =>
  arr.reduce((acc: number, curr: number) => acc * curr);

console.log(grow(valueArray));
