let body = document.querySelector("body");

function setTheme() {
    if (localStorage.getItem("theme") == "dark") {
        body.classList.add("dark-theme");
    } else if (localStorage.getItem("theme") == "light") {
        body.classList.remove("dark-theme");
    }
    let btnTheme = document.querySelector(".theme");

    btnTheme.addEventListener("click", changeTheme);
    function changeTheme() {
        body.classList.toggle("dark-theme");
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }  
    }
}
if (document.querySelector(".theme")) {
    setTheme();
}

function changeTimeBlock() {    
    let timeText = document.querySelector(".time");
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeText.innerHTML = time;
    function changeTime() {
        let date = new Date();
        let time = date.toLocaleTimeString();
        timeText.innerHTML = time;
    }
    setInterval(changeTime, 1000);
    
    const timeBlock = document.querySelector(".time-block");

    const redInputBg = document.querySelector("#redBg");
    const greenInputBg = document.querySelector("#greenBg");
    const blueInputBg = document.querySelector("#blueBg");

    redInputBg.addEventListener("input", changeBackground);
    greenInputBg.addEventListener("input", changeBackground);
    blueInputBg.addEventListener("input", changeBackground);

    let rBg;
    let gBg;
    let bBg;
    if (localStorage.getItem("r") != null) {
        rBg = parseInt(localStorage.getItem("r"));
        gBg = parseInt(localStorage.getItem("g"));
        bBg = parseInt(localStorage.getItem("b"));
        redInputBg.value = rBg;
        greenInputBg.value = gBg;
        blueInputBg.value = bBg;
    } else {
        rBg = redInputBg.value;
        gBg = greenInputBg.value;
        bBg = blueInputBg.value;
    }
    
    timeBlock.style.background = `rgb(${rBg} ${gBg} ${bBg})`;
    function changeBackground() {
        localStorage.setItem("r", redInputBg.value);
        localStorage.setItem("g", greenInputBg.value);
        localStorage.setItem("b", blueInputBg.value);
        if (localStorage.getItem("r") != null) {
            rBg = parseInt(localStorage.getItem("r"));
            gBg = parseInt(localStorage.getItem("g"));
            bBg = parseInt(localStorage.getItem("b"));
        }
        timeBlock.style.background = `rgb(${rBg} ${gBg} ${bBg})`;
    }
    const redInputText = document.querySelector("#redText");
    const greenInputText = document.querySelector("#greenText");
    const blueInputText = document.querySelector("#blueText");
    redInputText.addEventListener("input", changeTextColor);
    greenInputText.addEventListener("input", changeTextColor);
    blueInputText.addEventListener("input", changeTextColor);

    let rText;
    let gText;
    let bText;
    if (localStorage.getItem("rText") != null) {
        rText = parseInt(localStorage.getItem("rText"));
        gText = parseInt(localStorage.getItem("gText"));
        bText = parseInt(localStorage.getItem("bText"));
        redInputText.value = rText;
        greenInputText.value = gText;
        blueInputText.value = bText;
    } else {
        rText = redInputText.value;
        gText = greenInputText.value;
        bText = blueInputText.value;
    }
    function changeTextColor() {
        localStorage.setItem("rText", redInputText.value);
        localStorage.setItem("gText", greenInputText.value);
        localStorage.setItem("bText", blueInputText.value);
        if (localStorage.getItem("r") != null) {
            rText = parseInt(localStorage.getItem("rText"));
            gText = parseInt(localStorage.getItem("gText"));
            bText = parseInt(localStorage.getItem("bText"));
        }
        timeBlock.style.color = `rgb(${rText} ${gText} ${bText})`;
    }
    changeTextColor();


    const btnChangeText = document.querySelector("#typeColor");
    const btnChangeBg = document.querySelector("#typeBg");
    const blockChangeText = document.querySelector("#typeTextBlock");
    const blockChangeBg = document.querySelector("#typeBgBlock");

    btnChangeText.addEventListener("click", changeTypeColor);
    btnChangeBg.addEventListener("click", changeTypeColor);

    function changeTypeColor() {
        if(btnChangeText.checked) {
            blockChangeText.classList.contains("disabled") ? blockChangeText.classList.remove("disabled") : true;
            blockChangeBg.classList.contains("disabled") ? true : blockChangeBg.classList.add("disabled");
        } else if(btnChangeBg.checked) {
            blockChangeBg.classList.contains("disabled") ? blockChangeBg.classList.remove("disabled") : true;
            blockChangeText.classList.contains("disabled") ? true : blockChangeText.classList.add("disabled");
        }
    }
}
if (document.querySelector(".time")) {
    changeTimeBlock();
}

function fnLanguage() {
    let currentLang;
    if (localStorage.getItem("lang") != null) {
        currentLang = localStorage.getItem("lang");
    } else {
        currentLang = "ru";
    }

    const langData = [
        ["title", "Портфолио!", "Portfolio!"],
        ["#langBtn", "EN", "РУ"],
        [".contacts-href", "Контакты", "Contacts"],
        [".home-href", "Главная", "Home"],
        ["#name", "Иван _<br><span>Петров</span>", "Ivan _<br><span>Petrov</span>"],
        ["#text-prof", "UI & UX Дизайнер", "UI & UX Designer"],
        ["#profile", "Профиль _", "Profile _"],
        ["#profileDesc", "Здравствуйте! Я Иван, бэкенд-разработчик с пятилетним стажем. Специализируюсь на создании масштабируемых приложений на Python/Django. Имею опыт работы с высоконагруженными системами»", 
            "Hello, I'm Ivan, a backend developer with five years of experience. I specialize in building scalable applications in Python/Django. I have experience working with highly loaded systems»"],
        ["#redLabelBg", "Красный", "Red"],
        ["#redLabelText", "Красный", "Red"],
        ["#greenLabelBg", "Зеленый", "Green"],
        ["#greenLabelText", "Зеленый", "Green"],
        ["#blueLabelBg", "Синий", "Blue"],
        ["#blueLabelText", "Синий", "Blue"],
        ["#labelText", "Текст", "Text"],
        ["#labelBg", "Фон", "Background"],
        ["#contact", "Контакты _", "Contact _"],
        ["#phone", "Телефон", "Phone"],
        ["#website", "Сайт", "Website"],
        ["#adress", "Адрес", "Adress"],
        ["#adressName", "Москва, Красная площадь 1", "Moscow, Red square 1"],
        ["#education", "Образование _", "Education _"],
        ["#edName1", "Факультет информатики<br>Гарвард", "Deegre name<br>Universe name"],
        ["#edName2", "Факультет информатики<br>Гарвард", "Deegre name<br>Universe name"],
        ["#edName3", "Факультет информатики<br>Гарвард", "Deegre name<br>Universe name"],
        ["#experiance", "Опыт _", "Experience _"],
        ["#expTitle1", "Senior UX Дизайнер - 2025<br>Компания Гугл/Калифорния", "Senior UX Designer - 2025<br>Company Google/California"],
        ["#expTitle2", "Junior UX Дизайнер - 2020<br>Компания Гугл/Калифорния", "Junior UX Designer - 2020<br>Company Google/California"],
        ["#expDesc1", "Стандартный проект в нестандартной обертке. Допустим, вы можете подать тот же калькулятор, но с красивой анимацией, или визуализировать сортировку, сделав из нее занимательную игру.", 
            "A standard project in a non-standard wrapper. For example, you can submit the same calculator, but with a beautiful animation, or visualize sorting by making an entertaining game out of it."],
        ["#expDesc2", "Сложные работы должны преобладать. При этом хорошо, если они с юнит-тестами, лог-файлом и бейджиком в README от любого сервиса для сборки и тестирования ПО.", 
            "Complex jobs should prevail. It is good if they have unit tests, a log file and a badge in README from any service for building and testing software."],
        ["#skills", "Навыки _", "Skills _"],
        ["#reference", "Ссылки _", "Reference _"],
        ["#hobbies", "Хобби _", "Hobbies _"]
    ];

    function setLanguage() {
        let j;
        if (currentLang == "ru") {
            j = 1;
        } else {
            j = 2;
        }
        for (let i = 0; i < langData.length; i++) {
            if (document.querySelector(langData[i][0])) {
                document.querySelector(langData[i][0]).innerHTML = langData[i][j];
            }
        }
    }
    setLanguage();
    const btnLang = document.querySelector("#langBtn");
    btnLang.addEventListener("click", changeLanguage);
    function changeLanguage() {
        currentLang = currentLang == "ru" ? "en" : "ru";
        localStorage.setItem("lang", currentLang);
        setLanguage();
    }
}
if (document.querySelector("#langBtn")) {
    fnLanguage();
}
