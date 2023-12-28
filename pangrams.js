//this function returns pangram if s is pangram 
function pangrams(s) {
    const alphabetSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'W', 'x', 'y', 'z']
    let pang=true
    for(const word of alphabetSet){
        if((!(s.includes(word))&&(!(s.includes(word.toUpperCase))))){
           
                pang=false
                break 
            
           
        }
    }
    return pang?'pangam':'N/a'

}
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))