function introduction(name) {
    return(`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, langauge) {
    return(`Hi, my name is ${name} and I am learning to program in ${langauge}.`);
}

function introductionWithLanguageOptional(name, langauge = "JavaScript" ) {
    return(`Hi, my name is ${name} and I am learning to program in ${langauge}.`);
}

