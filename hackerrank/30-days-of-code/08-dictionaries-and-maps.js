function processData(input) {
    // var input = input.split('\n');

    // Number of entries in the phone book
    var entriesNum = Number(input[0]);

    // Create the phone book
    var phonebook = {};
    for(var i = 1; i <= entriesNum; i++){
        // Find the breaking space in the string
        var space = input[i].indexOf(' ');
        // Add the entry
        phonebook[input[i].slice(0, space)] = input[i].slice(space + 1, entriesNum.length);
    }

    // Phonebook check
    for(var j = entriesNum + 1; j < input.length; j++){
        // Assign result of name match
        var matchTry = phonebook[input[j]];
        // Output result
        if(matchTry !== undefined){
            console.log(input[j] + '=' + phonebook[input[j]]);
        } else {
            console.log('Not found')
        }
    }
}

var data = [ '3', 'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam','edward', 'harry' ]

console.log(processData(data));
