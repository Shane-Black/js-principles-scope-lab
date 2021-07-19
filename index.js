// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName()    {
    customerName = customerName.toUpperCase();
    return customerName;
}


function setBestCustomer()  {   
    bestCustomer = 'not bob';
}

function overwriteBestCustomer()    {
    return bestCustomer = 'maybe bob';
}

// console.log(bestCustomer)

const leastFavoriteCustomer = 'jane';

function changeLeastFavoriteCustomer(name)  {
    leastFavoriteCustomer = name;
}