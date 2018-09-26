// list of companies

const companiesList = document.getElementById('companies');
const totalCompanies = document.getElementById('countCompanies');
let totalCompaniesNumber = null;

const showAllCompanies = () => {
    companiesList.innerHTML = '';

    fetch('http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList')
        .then(response => response.json())
        .then(data => {
         console.log(data.list.map((companies) => companies.name))
        
         data.list.map((companies, number) => {
            const { name } = companies;
            totalCompaniesNumber = number + 1;
            
            const li = document.createElement('li');
            li.className = 'list-group-item';
            companiesList.appendChild(li);
            li.textContent = `${name}`;
            
            totalCompanies.innerHTML = `${totalCompaniesNumber}`;
            totalCompanies.className = 'total-number';
          })
        })
        .catch(error => console.error(error));

}       

showAllCompanies();

//news of companies


