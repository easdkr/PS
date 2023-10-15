
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

      return primes.filter((prime) => prime !== DELETED);
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
    
    return threeSum(nums).filter((sum) => primes.includes(sum)).length;
}