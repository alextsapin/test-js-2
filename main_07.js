// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.

function repeatString(str, n, separator) {
    const arr = [];

    for(i = 0; i < n; i++) {
        arr.push(str)
    }

    return arr.join(separator)

}

console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))

// 2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

function checkStart(str, sub) {
    return str.toLowerCase().startsWith(sub)
}

console.log(checkStart("Incubator", "inc"));
console.log(checkStart("Incubator", "yo"));

// 3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function truncateString(str, n) {
    return str.slice(0, n) + '...';
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

// 4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

function getMinLengthWord(str) {
    const arr = str.split(' ');
    arr.sort(function(a, b) {
        if(a.length > b.length) {
            return 1
        } else {
            return -1
        }
    })

    return arr[0];
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"));

// 5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкуатора Желаю Удачи!"

function setUpperCase(str) {
    const arr = str.toLowerCase().split(' ');
    return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"));

// 6. Реализуйте функцию, которая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра 
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false

function isIncludes(str, inc) {
    const arrInc = inc.toLowerCase().split('')
    const arrStr = str.toLowerCase().split('')
    return arrInc.every(item => arrStr.indexOf(item) > -1)
}

console.log(isIncludes("Incubator", "Cut"));
console.log(isIncludes("Incubator", "table"));