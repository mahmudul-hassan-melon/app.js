let basicSalary =95000;

if(basicSalary <= 10000 ){
    console.log(basicSalary + 500 + ( basicSalary * .25) +1000 -( basicSalary * .15 ) );
 } else if(basicSalary <= 50000 ){
    console.log(basicSalary + 2000 + ( basicSalary * .50) +3000 -( basicSalary * .15 ) );
} else if(basicSalary <= 100000 ){
    console.log(basicSalary + 5000 + ( basicSalary * .55) +10000 -( basicSalary * .15 ) );
} else if(basicSalary > 100000 ){
    console.log(basicSalary -( basicSalary * .15 ) );
}
