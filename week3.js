

    function runThis (){

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Firstname";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Surname";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Algebra";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Calculus";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Programming";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Databases";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    thead.appendChild(row_1);


    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Joe.";
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "Jane";
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "Mike";

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_3_data_1);
    row_2.appendChild(row_4_data_1);
    tbody.appendChild(row_2);


    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "2.";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = "Adam White";
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = "Microsoft";

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);
    }