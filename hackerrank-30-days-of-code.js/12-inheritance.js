class Student extends Person {
    /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, idNumber, scores){
        super(firstName, lastName, idNumber, scores);
        this.scores = scores;
    }

    /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        var combine = this.scores.reduce(function(a, b){ return a + b; })
        var average = combine / this.scores.length;
        var grade = '';

        if(average <= 100 && average >= 90){
            grade = 'O';
        } else if (average < 90 && average >= 80){
            grade ='E';
        } else if (average < 80 && average >= 70){
            grade = 'A';
        } else if (average < 70 && average >= 55){
            grade = 'P';
        } else if (average < 55 && average >= 40){
            grade = 'D';
        } else {
            grade = 'T';
        }

        return grade;
    }

}
