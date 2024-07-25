class Student {
    constructor(name) {
        this.name = name;
        this.marks = {
            subject1: 0,
            subject2: 0,
            subject3: 0
        };
    }
    
    setMarks(subject1, subject2, subject3) {
        this.marks.subject1 = subject1;
        this.marks.subject2 = subject2;
        this.marks.subject3 = subject3;
    }
    
    calculateTotalMarks() {
        return this.marks.subject1 + this.marks.subject2 + this.marks.subject3;
    }
    
    displayMarks() {
        const subject1Element = document.getElementById('subject1');
        const subject2Element = document.getElementById('subject2');
        const subject3Element = document.getElementById('subject3');
        const totalMarksElement = document.getElementById('totalMarks');
        
        subject1Element.textContent = this.marks.subject1;
        subject2Element.textContent = this.marks.subject2;
        subject3Element.textContent = this.marks.subject3;
        
        const totalMarks = this.calculateTotalMarks();
        totalMarksElement.textContent = totalMarks;
    }
}

let student = new Student('Alice');
student.setMarks(85, 90, 78);
student.displayMarks();
