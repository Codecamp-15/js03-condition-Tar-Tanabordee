let login = prompt("Enter username");

message = 
    login =='Employee' 
        ? 'Hello'
        : login === 'Director'
        ? 'Greeting'
        : login == ''
        ? 'No login'
        : 'Invalid user';

        alert(message);