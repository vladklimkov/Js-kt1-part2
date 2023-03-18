let table_value=[];
for (let i=0;i<30;i++) 
    table_value.push(Math.abs(Math.floor(Math.random()*100 - 1)))
    
let table = document.querySelector('#table');
const body = document.body;
for (let i = 0; i < 6; i++) 
{
    let tr = document.createElement('tr');
    
    for (let j = 0; j < 5; j++)  {
        let td = document.createElement('td');
        td.textContent = table_value[i * 5 + j];
        if(table_value[i * 5 + j] > 49)
        {
            td.classList.add('bgOrange');
        }
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}

function foo()
{
    let table = document.querySelector('#table');
    let tr;
    if(table_value.length % 5 == 0)
    {
        tr = document.createElement('tr');
    }
    else
    {
        tr = table.rows[table.rows.length - 1];
    }

    let newValue = Math.abs(Math.floor(Math.random()*100 - 1))
    table_value.push(newValue);

    let td = document.createElement('td');
    td.textContent = newValue;
    if(newValue > 49)
    {
        td.classList.add('bgOrange');
    }
    tr.appendChild(td);
    if(table_value.length % 5 == 1)
    {
        table.appendChild(tr);
    }
    else
    {
        body.prepend(table);
    }
}