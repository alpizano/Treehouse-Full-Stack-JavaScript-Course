var students = [
{name: 'John', track: 'iOS' , achievements: 7, points: 1000  },
{name: 'Mary', track: 'Front End Development', achievements: 6, points: 650  },
{name: 'Sam', track: 'Back End Development', achievements: 5, points: 500 },
{name: 'Sally', track: 'Android', achievements: 4, points:  99},
{name: 'Pedro', track: 'Web Design', achievements: 11, points: 5000 }
];

var ans;
var message;

function print(message) {
  var placeholder = document.getElementById('output')
  placeholder.innerHTML = message;
}


 //var ans = prompt('Type in the students name you want to search for: ');

   ans = prompt('Type in the students name you want to search for: ');

   for (let i=0; i<students.length; i++) {

   if( ans.toLowerCase() ==  students[i].name.toLowerCase()) {
     for(let key in students) {
       message += `${key}: ${students[key]}`;
       print(message);
       //console.log(this.students[key]);
     }
     //message = students[i].name + students[i].track + //students[i].achievements + students[i].points;
     //print(message);

     }

   }





/*
for(var key in students) {
  console.log(ans);
  if(ans == students[key].name) {
    document.getElementById('output').innerHTML = students[key].name;
  }
  else {
    document.getElementById('output').innerHTML = 'Student not found';
  }
}
*/


/*
do {
 var ans = prompt('Type in the students name you want to search for or type \'quit\' to exit: ');
console.log(ans);
 for(var key in students) {
   if(ans == students[key].name) {
     document.getElementById('output').innerHTML = students[key].name;
   }
   else {
     document.getElementById('output').innerHTML = 'Student not found';
   }
 }
}

while(ans.toLowerCase() != 'quit');
*/
