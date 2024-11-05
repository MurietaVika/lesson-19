// Level 1
// Есть массив с учениками в классе. Необходимо убрать из массива тех, у кого средний балл ниже 7-и включительно и отсортировать по алфавиту.
// let arr_of_students =
//     [
//         {
//             name: "Петя",
//             age: 28,
//             gpa: 90
//         },
//         {
//             name: "Максим",
//             age: 30,
//             gpa: 80
//         },
//         {
//             name: "Светлана",
//             age: 21,
//             gpa: 4
//         },
//         {
//             name: "Даша",
//             age: 32,
//             gpa: 50
//         },
//         {
//             name: "Анна",
//             age: 19,
//             gpa: 8.5
//         },
//         {
//             name: "Ян",
//             age: 30,
//             gpa: 30
//         },
//     ];
// let filterStudents = arr_of_students.filter(student => student.gpa > 7);

// filterStudents.sort((a, b) => a.name.localeCompare(b.name));

// console.log(filterStudents);

// localStorage.setItem('filterStudents', JSON.stringify(filterStudents));

// const result = JSON.parse(localStorage.getItem('filterStudents'));

// console.log("Новый массив:", result);

// Напишите функцию JavaScript, которая возвращает переданную строку с буквами в алфавитном порядке.
// Пример строки: 'uncopyrightable'. Ожидаемый результат: 'abceghilnoprtuy'
function alphabet_order(str) {
    return str
        .split('')
        .sort()
        .join('');

}

document.writeln(alphabet_order("uncopyrightable"));

// Напишите функцию JavaScript, которая принимает строку в качестве параметра и находит самое длинное слово в строке.
function find_longest_word(str) {
    let words = str.split(' ');
    let longest_word = ''; 
    words.forEach(word => {
        if (word.length > longest_word.length) {
            longest_word = word;
        }
    });

    return longest_word;
}

document.writeln(find_longest_word('Web Development In Telran'));
