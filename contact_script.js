fetch("contacts.json")
.then(function(response){
   return response.json();
})
.then(function(contacts){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let contact of contacts){
      out += `
         <tr>
            <td>${contact.Name}</td>
            <td>${contact.Designation}</td>
            <td>${contact.Department}</td>
            <td>${contact.Ext}</td>
            <td>${contact.Mobile}</td>
            <td>${contact.Email}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});