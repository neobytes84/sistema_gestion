enum Label {
    Marketing = "Marketing",
    Sales = "Sales",
    Finance = "Finance",
    Engineering = "Engineering",
    Operations = "Operations",
    Shipments = "Shipments",
    Supplier = "Supplier",
    QualityAssurance = "Quality Assurance",
    CustomerService = "Customer Service",
    HumanResources = "Human Resources"
}
type Department = {
    id: number,
    name: string,
    employees: string,
    job: string,
    email: string,
    phone: string,
    label: Label;

};

let departments: Department[] = [];
const form = document.getElementById('departmentForm') as HTMLFormElement;
const departmentName = document.getElementById('departmentName') as HTMLInputElement;

function addDepartment(id: number, name: string, employees: string, job: string, email: string, phone: string, label: Label) {
    const department: Department = {
        id,
        name,
        employees,
        job,
        email,
        phone,
        label
    };
    departments.push(department);
    return department;
} 
function removeDepartment(id: number): boolean {
    const initialLength = departments.length;
    departments = departments.filter(department => department.id !== id);
    return departments.length != initialLength;
}
function updateDepartment(id: number, updatedDepartment: Department): boolean {
    const index = departments.findIndex(department => department.id === id);
    if (index === -1) {
        return false;
    }
    departments[index] = updatedDepartment;
    return true;
}

function render(): void {
    const tbody = table.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = '';
        departments.forEach(department => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${department.id}</td>
                <td>${department.name}</td>
                <td>${department.employees}</td>
                <td>${department.job}</td>
                <td>${department.email}</td>
                <td>${department.phone}</td>
                <td>${department.label}</td>
                <td><button onclick="removeDepartment(${department.id})">Remove</button></td>
                <td><button onclick="editDeparment(${department.id})">Edit</button></td>
            `;
            tbody.appendChild(tr);
        });
    }
}
function deleteDepartment(id: number): void {
    if (removeDepartment(id)) {
        render();
    
    }
}
form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const id = (document.getElementById('id') as HTMLInputElement)?.valueAsNumber;
    const name = (document.getElementById('departmentName') as HTMLInputElement)?.value;
    const employees = (document.getElementById('employees') as HTMLInputElement)?.value;
    const job = (document.getElementById('job') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
    const label = (document.getElementById('label') as HTMLSelectElement)?.value as Label;
    addDepartment(id, name, employees, job, email, phone, label);
    render();
    form.reset();
});

render();