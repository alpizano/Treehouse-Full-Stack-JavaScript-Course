var students = [
{name: 'John', track: 'iOS' , achievements: 7, points: 1000  },
{name: 'Mary', track: 'Front End Development', achievements: 6, points: 650  },
{name: 'Sam', track: 'Back End Development', achievements: 5, points: 500 },
{name: 'Sally', track: 'Android', achievements: 4, points:  99},
{name: 'Pedro', track: 'Web Design', achievements: 11, points: 5000 }
];

var running = "";

for(var key in students) {
document.getElementById('output').innerHTML += 'Name: ' + students[key].name + ' ' + 'Track: ' + students[key].track + ' ' + 'Achievements: ' + students[key].achievements + ' ' + 'Points: ' + students[key].points + '<p>';

}

/*
var print = document.getElementById('output');
print.innerHTML = "";
*/
