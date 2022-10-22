function solution(arr){
    return arr.filter((item, index) => index == 0 || item != arr[index - 1]);
}