function calculateGrossSalary()
{
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const houseRentAllowance = 0.05 * basicSalary;
    const travelAllowance = 0.08 * basicSalary;
    const medicalAllowance = 0.07 * basicSalary;

    const totalAllowance = houseRentAllowance + travelAllowance + medicalAllowance;
    
    const taxDeduction = 200;
    const grossSalary = basicSalary + totalAllowance - taxDeduction;
    document.getElementById("grossSalaryResult").innerText = `Gross Salary: ${grossSalary}`;
}

