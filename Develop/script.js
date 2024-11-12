// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', function () {
  console.log('Add Employee button was clicked!');
});
// Collect employee data
let employeesArray = [];

const collectEmployees = function () {
  let i = 0;
  let input = '';

  while (i < 2) {
let firstName = prompt("First Name")
if (firstName === 'exit') break;
let lastName = prompt("Last Name")
if (lastName === 'exit') break;
let salary = prompt("Salary")
if (isNaN(salary)) {
  console.log(`That's not a valid number!`)
}
let userResponse = confirm("Do you want to continue")

employeesArray.push({
  firstName: firstName,
  lastName: lastName,
  salary: salary,
});
i++;
  }
  return employeesArray
};
  // TODO: Get user input to create and return an array of employee objects

// Display the average salary
function calculateAverageSalary(employeesArray) {
  if (employeesArray.length === 0) {
    return 0;
  }
const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0)
return totalSalary / employeesArray.length;
  }

const displayAverageSalary = function () {
  let averageSalary = calculateAverageSalary(employeesArray);
  console.log("Average Salary: $" + averageSalary);
  // TODO: Calculate and display the average salary
};
calculateAverageSalary();
// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
