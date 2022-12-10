let employees = []
let roles = []
const listEl = document.querySelector('ul')
const formEl = document.querySelector('form')


async function getData() {
  [employees, roles] = await Promise.all([
    listEmployees(),
    listRoles      
  ])
  renderTable();        
}
getData();
  
function renderData() {
  document.getElementById("app").innerHTML = table;
  let rows = employees.map((employee) => {
      let role = roles.find((role) => role.id == employee.role_id);
          return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function showError(error) {
  document.getElementById("app").innerHTML = "Error ao carregar dados.";
  console.error(error)
}