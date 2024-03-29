/*

Decode Variations
A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

Examples:

input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
Constraints:



HINTS:

Decode Variations
Try to write the number of ways to write S[i:] in terms of the number of ways to write S[i+1:] and S[i+2:]. For example, if there are 2 ways to write S[1:] = '262' ('ZB' and 'BFB'), and one way to write S[2:] = '62' ('FB'), then we could say there are 3 ways to write S as we either write 'A' then a decoding of S[1:], or write 'L' then a decoding of S[2:].

We can store the answer for S[i:] into an integer array dp.

The recursion is given below. You can help the candidate with the specific part of the recursion they are having difficulty with:

If S[i] == 0, then dp(i) = 0.

If S[i] == 1, then we have dp(i) = dp(i+1) + dp(i+2).

If S[i] == 2, then we have dp(i) = dp(i+1) + (S[i+1] <= 6 ? dp(i+2) : 0).

If S[i] > 2, then we have dp(i) = dp(i+1).
*/

/*
SOLUTION

Solution: Dynamic Programming

Let dp(i) be the answer for the string S[i:]. We can calculate dp(i) in terms of dp(i+1) and dp(i+2).

If S[i] == 0, then dp(i) = 0. There are no ways, since no encoded letter starts with 0.

If S[i] == 1, then we have dp(i) = dp(i+1) + dp(i+2), since either we write A plus any way to write S[i+1:], or we write a letter that encodes somewhere between 10 and 19, plus any way to write S[i+2:].

If S[i] == 2, then we have dp(i) = dp(i+1) + (S[i+1] <= 6 ? dp(i+2) : 0). Either we write B plus any way to write S[i+1:], or we write a letter that encodes somewhere between 20 and 26, plus any way to write S[i+2:].

If S[i] > 2, then we have dp(i) = dp(i+1). For example, if S[i] = 5, then we write E plus any way to write S[i+1:]. We can’t write any other letters because the only letter which has encoding that starts with 5 is E.

Putting this all together, we have the following code:

function decodeVariations(S):
    N = S.length
    dp = new Array(N)
    dp[N] = 1
    for i from N-1 to 0:
        if S[i] == '0':
            dp[i] = 0
        else if S[i] == '1':
            dp[i] = dp[i+1] + dp[i+2]
        else if S[i] == '2':
            dp[i] = dp[i+1]
            if i+1 < S.length && S[i+1] <= '6':
                dp[i] += dp[i+2]
        else:
            dp[i] = dp[i+1]

    return dp[0]

*/
