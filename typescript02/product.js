var Label;
(function (Label) {
    Label["Marketing"] = "Marketing";
    Label["Sales"] = "Sales";
    Label["Finance"] = "Finance";
    Label["Engineering"] = "Engineering";
    Label["Operations"] = "Operations";
    Label["Shipments"] = "Shipments";
    Label["Supplier"] = "Supplier";
    Label["QualityAssurance"] = "Quality Assurance";
    Label["CustomerService"] = "Customer Service";
    Label["HumanResources"] = "Human Resources";
})(Label || (Label = {}));
var departments = [];
var form = document.getElementById('departmentForm');
var departmentName = document.getElementById('departmentName');
function addDepartment(id, name, employees, job, email, phone, label) {
    var department = {
        id: id,
        name: name,
        employees: employees,
        job: job,
        email: email,
        phone: phone,
        label: label
    };
    departments.push(department);
    return department;
}
function removeDepartment(id) {
    var initialLength = departments.length;
    departments = departments.filter(function (department) { return department.id !== id; });
    return departments.length != initialLength;
}
function updateDepartment(id, updatedDepartment) {
    var index = departments.findIndex(function (department) { return department.id === id; });
    if (index === -1) {
        return false;
    }
    departments[index] = updatedDepartment;
    return true;
}
function render() {
    var tbody = table.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = '';
        departments.forEach(function (department) {
            var tr = document.createElement('tr');
            tr.innerHTML = "\n                <td>".concat(department.id, "</td>\n                <td>").concat(department.name, "</td>\n                <td>").concat(department.employees, "</td>\n                <td>").concat(department.job, "</td>\n                <td>").concat(department.email, "</td>\n                <td>").concat(department.phone, "</td>\n                <td>").concat(department.label, "</td>\n                <td><button onclick=\"removeDepartment(").concat(department.id, ")\">Remove</button></td>\n                <td><button onclick=\"editDeparment(").concat(department.id, ")\">Edit</button></td>\n            ");
            tbody.appendChild(tr);
        });
    }
}
function deleteDepartment(id) {
    if (removeDepartment(id)) {
        render();
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    var _a, _b, _c, _d, _e, _f, _g;
    e.preventDefault();
    var id = (_a = document.getElementById('id')) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
    var name = (_b = document.getElementById('departmentName')) === null || _b === void 0 ? void 0 : _b.value;
    var employees = (_c = document.getElementById('employees')) === null || _c === void 0 ? void 0 : _c.value;
    var job = (_d = document.getElementById('job')) === null || _d === void 0 ? void 0 : _d.value;
    var email = (_e = document.getElementById('email')) === null || _e === void 0 ? void 0 : _e.value;
    var phone = (_f = document.getElementById('phone')) === null || _f === void 0 ? void 0 : _f.value;
    var label = (_g = document.getElementById('label')) === null || _g === void 0 ? void 0 : _g.value;
    addDepartment(id, name, employees, job, email, phone, label);
    render();
    form.reset();
});
render();
