const getName = () =>{
    return "Zakaria Hossain";
}

const getAge = () => {
    return 26;
}

const gpa = 4.5;

// * indivisula esport
// exports.name = getName;
// exports.age = getAge;

// * Batch export
module.exports = {
    getName,
    getAge,
    gpa
}