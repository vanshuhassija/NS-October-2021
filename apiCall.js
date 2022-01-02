function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  // fetch(url)
  // .then(response => response.json())
  // .then(json => console.log(json))

  fetch(url)
    .then(function (response) {
     // JSON received
     // should be converted
     // to a Javascript object
     return response.json();
    })
    .then((data)=>{
       const table= document.createElement('table');
       const tableHead = document.createElement('thead');
       const tableRow= document.createElement('tr');
       const tableHeading= document.createElement('th');
       tableHeading.innerHTML="ID"
       const tableHeading2= document.createElement('th');
       tableHeading2.innerHTML="Name"
       const tableHeading3= document.createElement('th');
       tableHeading3.innerHTML="Email";
       tableRow.appendChild(tableHeading);
       tableRow.appendChild(tableHeading2);
       tableRow.appendChild(tableHeading3);
       tableHead.appendChild(tableRow);
       table.appendChild(tableHead);

        const tableBody = document.createElement('tbody');
        for(let i=0;i<data.length;i++){
          const tableBodyRow= document.createElement('tr');
          const tableBodyData= document.createElement('td');
          tableBodyData.innerHTML=data[i].id;
          const tableBodyData2= document.createElement('td');
            tableBodyData2.innerHTML=data[i].name;
          const tableBodyData3= document.createElement('td');
            tableBodyData3.innerHTML=data[i].email;
        tableBodyRow.appendChild(tableBodyData);
        tableBodyRow.appendChild(tableBodyData2);
        tableBodyRow.appendChild(tableBodyData3);
        tableBody.appendChild(tableBodyRow);
        }
        table.appendChild(tableBody);

       const body = document.querySelector('body');
       body.appendChild(table);
    })

    // <table>
    //     <thead>
    //         <tr>
    // <th></th>
    // <th></th>
    // <th></th>
    // </tr>
    //     </thead>
    //     <tbody>
    //         <tr>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //         </tr>
    //     </tbody>
   

   

   
}

// What are Anonymous functions?
// They are functions without a name.
// They are used when the function executes itself.

// Anonymous Functions
// Arrow Functions
// const functionName =()=> console.log();



//String , Number,Boolean, Array ,JSON
