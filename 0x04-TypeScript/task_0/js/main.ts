export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: strin;,
 }
/* Creating two studets using Student interface */
const studentA:Student = {
  firstName: "Thoma";
  lastName: "chris';
  age: 25;
  location: "German";
  };

const studentB: Student = {
  firstName: "Fantu";
  lastName: "Tada";
  age: 23;
  location: "Ethiopia";
  };

/* creating an array for the above two students */
const studentsList: Array<Student> = [
  studentA;
  studentB;  
  ];

  /* render a table and for each elements in the array using firstname and location */
export const displayStudent = (students:Array<Students>)=> void {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', <td>FirstName</td>);
  headRow.insertAdjacentHTML('beforeend', <td>Location</td>);
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tablebody);
    document.body.insertAdjacentElement('beforeend', table);
}


