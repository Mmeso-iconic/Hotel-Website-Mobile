const employees = [
    { name: 'Alice', position: 'Developer' },
    { name: 'Bob', position: 'Designer' },
    { name: 'Charlie', position: 'Manager' }
];

const renderEmployees = employees => {
    const container = document.getElementById('employeeContainer');
    employees.forEach(employee => {
        container.innerHTML += `
            <div>
                <h3>${employee.name}</h3>
                <p>Position: ${employee.position}</p>
            </div>
        `;
    });
}

renderEmployees(employees);
Resulting HTML:
After the JavaScript executes, the HTML will be:

<!DOCTYPE html>
<html>
<body>
    <h2>Employee List</h2>
    <div id="employeeContainer">
        <div>
            <h3>Alice</h3>
            <p>Position: Developer</p>
        </div>
        <div>
            <h3>Bob</h3>
            <p>Position: Designer</p>
        </div>
        <div>
            <h3>Charlie</h3>
            <p>Position: Manager</p>
        </div>
    </div>
    <script src="renderEmployees.js"></script>
</body>
</html>



