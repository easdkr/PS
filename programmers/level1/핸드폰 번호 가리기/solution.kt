const val BACK_NUMBER_LENGTH = 4
const val JOIN_SEPARATOR = ""
class Solution {
    fun solution(phoneNumber: String) : String {
       return createHidedPhoneNumber(phoneNumber)
    }

    fun createHidedPhoneNumber(phoneNumber: String) : String {
        return phoneNumber.mapIndexed { index, c ->  
            hideNumber(phoneNumber.length-BACK_NUMBER_LENGTH)(index, c)}.joinToString(JOIN_SEPARATOR)
    }
    
    val hideNumber : (Int) -> (Int, Char) -> Char = {
        length: Int -> {index: Int, char: Char -> if(index < length) '*' else char}
    }
}
