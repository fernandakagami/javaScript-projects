let employees = []
let roles = []
const listEl = document.querySelector('ul')
const formEl = document.querySelector('form')


async function init() {
  try {
    [employees, roles] = await Promise.all([listEmployees(), listRoles()])
    renderData()
  } catch (erro) {
    showError(erro)
  }      
}
init();
  
function renderData() {  
  let items = employees.map((employee) => {
      let role = roles.find((role) => role.id == employee.role_id)
      return `<li>${employee.name}<br>${role.name}</li>`
  })
  listEl.innerHTML = items.join('')

  for (const employees of employees) {
    let role = roles.find((role) => role.id == employee.role_id)
    const li = document.createElement("li")
    const divName = document.createElement("div")
    divName.textContent = employee.name
    const divRole = document.createElement("div")
    divRole.textContent = role.name
    listEl.appendChild(li)
  }
}

function showError(error) {
  document.getElementById("app").innerHTML = "Error ao carregar dados.";
  console.error(error)
}