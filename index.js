//GPA Calculator
//Written By Alexander and Adrian Ahlbrandt

var readlineSync = require('readline-sync');

main();

var courseNames;
var courseGrades;

function main(){
    if(process.argv[2]=="-h"||process.argv[2]=="--help"){
        console.log("Your can use this program to calculate your GPA.");
        console.log("If your class is AP, you can specify so to compensate for grading scale.");
        console.log("Specify so like this:");
        console.log("AP <class-name>");
    }
    else{
        courseNames = readlineSync.question("Enter the name of a courses, seperated by a comma, and press 'enter'.\n").split(',');
        courseGrades = readlineSync.question("Enter the letter grade of the corresponding courses, seperated by comma, and press 'enter'.\n").split(',');
        let GPA=0;
        courseGrades.forEach((value,index)=>{
            GPA = GPA + getNumberFromLetterGrade(value);
            if(courseNames[index].includes("AP ")){
                GPA = GPA + 1;
            }
        })
        GPA=GPA/courseGrades.length;
        console.log("Your GPA is a " + GPA);
    }
}

function getNumberFromLetterGrade(char){
    char = char.trim();
    if(char=='a'||char=='A'||char=='4'){
        return 4;
    }
    else if(char=='b'||char=='B'||char=='3'){
        return 3;
    }
    else if(char=='c'||char=='C'||char=='2'){
        return 2;
    }
    else if(char=='d'||char=='D'||char=='1'){
        return 1;
    }
    else if(char=='f'||char=='F'||char=='0'){
        return 0;
    }
}