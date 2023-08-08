let grade = Number(prompt('put your grade'));

message =
    grade >=101
    ? 'Error'
    : grade >= 80
    ? 'A'
    : grade >=70
    ? 'B'
    : grade >=60
    ? 'C'
    : grade >=50
    ? 'D'
    : 'F' ;

    alert(message);