/*
I want to create a function that will put my words into a cipher. 
I want the cypher to make the letters be their opposites. So, a becomes z, b becomes y, c becomes x, etc.
So, this code was born! For every letter, it finds the index of it in the regular alphabet, then adds the same index in the unalphabet to an answer string. 
The nice thing about this cipher is you can use the same funciton for both encoding and decoding, since it's an asymmetrical pattern.
*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let backwards = 'z y x w v u t s r q p o n m l k j i h g f e d c b a'
let unalphabet = backwards.split(' ')

function decode(code){
    answer = ''
    for (i=0; i<code.length; i++){
        for (j=0; j< alphabet.length; j++){
            if (code[i] === alphabet[j]){
                answer += unalphabet[j]
            
            }else if(code[i] === ' ') {
                answer += " "
                break
            }
        }
    }
    return answer

}
console.log(decode("i dont like ciphers"))