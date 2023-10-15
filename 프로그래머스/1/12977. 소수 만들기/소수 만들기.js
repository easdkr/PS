
/**
* 제약 사항에 배열 최대 길이가 50개 이하로 완전 탐색으로 충분히 풀수 있는 문제로 보임
* 단순하게 모든 세 수의 합을 저장하는 배열을 구하고 소수판별 알고리즘 수행 (아리스토테네스의 체로 캐싱 map)
*/
function solution(nums) {
    const createPrimeNumbers = (limit) => {
      const DELETED = -1;

      const primes = new Array(limit + 1)
        .fill(0)
        .map((_, i) => i)
        .filter((i) => i >= 2);

      primes.forEach((prime, _) => {
        if (prime !== DELETED) {
          for (let i = prime * 2; i <= limit; i += prime) {
            primes[i - 2] = DELETED;
          }
        }
      });

      return primes
        .filter((prime) => prime !== DELETED)
        .reduce((acc, cur) => {
          acc[cur] = true;
          return acc;
        }, {});
    };

    const threeSum = (nums) => {
      const result = [];

      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
            result.push(nums[i] + nums[j] + nums[k]);
          }
        }
      }

      return result;
    };    
    
    const primes = createPrimeNumbers(1000 * 3);
    
    return threeSum(nums).filter((sum) => primes[sum]).length;
}