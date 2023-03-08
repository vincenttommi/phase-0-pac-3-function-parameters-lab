function introduction(name){

    return `Hi, my name is ${name}.`;
}

//second test

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// third test 


function introductionWithLanguageOptional(name, language= "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// 4th test

function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}