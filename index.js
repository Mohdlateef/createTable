let table=document.getElementById("table");


let rows=3;
let colum=4;
for(let i=0;i<rows;i++)
{
    let rows=document.createElement("tr");
    table.appendChild(rows)
    for(let j=0;j<colum;j++)
    {
    let col=document.createElement("td");
    rows.appendChild(col);
    col.innerText="abc"
    }
}