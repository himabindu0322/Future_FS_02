let leads = [];

function addLead(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let source=document.getElementById("source").value;
let status=document.getElementById("status").value;
let notes=document.getElementById("notes").value;

let lead={
name:name,
email:email,
source:source,
status:status,
notes:notes
};

leads.push(lead);

displayLeads();

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("source").value="";
document.getElementById("notes").value="";
}

function displayLeads(){

let table=document.getElementById("leadTable");

table.innerHTML="";

leads.forEach(l=>{

let row=`
<tr>
<td>${l.name}</td>
<td>${l.email}</td>
<td>${l.source}</td>
<td>${l.status}</td>
<td>${l.notes}</td>
</tr>
`;

table.innerHTML+=row;

});

}
