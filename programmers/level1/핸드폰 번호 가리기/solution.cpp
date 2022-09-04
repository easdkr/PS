#include <string>
#include <vector>

using namespace std;

string createSecretPhoneNumber(string& phoneNumber);

string solution(string phoneNumber) {
    return createSecretPhoneNumber(phoneNumber);
}

string createSecretPhoneNumber(string& phoneNumber){
    for (int i = 0; i < phoneNumber.size() - 4; ++i)
        phoneNumber[i] = '*';
    return phoneNumber;
}
