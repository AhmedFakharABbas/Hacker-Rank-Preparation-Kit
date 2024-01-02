//this function returns pangram if s is pangram 
function pangrams(s) {
    const alphabetSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'W', 'x', 'y', 'z']
    let pangram = true;
    for(const word of alphabetSet){
        if (!(s.includes(word)) && !(s.includes(word.toUpperCase()))) {
           
            pangram=false
                break 
            
           
        }
    }
    return pangram?'pangram':'N/a'

}
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
//upercase comes up with ()

//this function returns pangram if s is pangram 
function pangrams(s) {
    const alphabetSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'W', 'x', 'y', 'z']
    let pangram = true;
    for(const word of alphabetSet){
        if (!(s.includes(word)) && !(s.includes(word.toUpperCase()))) {
           
            pangram=false
                break 
            
           
        }
    }
    return pangram?'pangram':'N/a'

}
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
//upercase comes up with ()

