import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;


public class Solution {
    public int[] solution(int []arr) {
        AtomicInteger index = new AtomicInteger();
        return Arrays.stream(arr).filter(value -> index.getAndIncrement() == 0 || value != arr[index.get()-2]).toArray();
    }
}