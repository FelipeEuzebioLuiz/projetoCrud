document.addEventListener('DOMContentLoaded', function(){
    const studentForm = document.getElementById('studentForm');
    const studentNameInput = document.getElementById('studentName');
    const studentIdInput = document.getElementById('studentId');
    const studentList = document.getElementById('studentList');
    const apiUrl = 'http://localhost:3000/students';
})

function fetchStudents(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(students => {
        studentList.innerHTML = '';
        students.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `
            <span>$(student.name)</span>
            <div>
                button onclick="editStudent(${student.id},
                    '${student.name}')">Editar</button>
                <button onclick="deleteStudent(${student.id})">Excluir</button>
            </div>        
        `;
        studentList.appendChild(studentItem);
    });
   });
};