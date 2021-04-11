const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
        
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алевтина",
            "id_2": "Мария",
            "id_3": "Ив",
            "id_4": "Ариана",
            "id_5": "Даро",
            "id_6": "Нина",
            "id_7": "Михалина",
            "id_8": "Даниела",
            "id_9": "Егине",
            "id_10": "Адриана"
        }
        
    }`,

    
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анатольев",
            "id_2": "Владимиров",
            "id_3": "Максимилианов",
            "id_4": "Адамов",
            "id_5": "Ахметов",
            "id_6": "Евгеньев",
            "id_7": "Сергеев",
            "id_8": "Денисов",
            "id_9": "Евстахиев",
            "id_10": "Исааков"
        }
        
    }`,

    months: [
            { month: 'Января', days: 31}, 
            { month: 'Февраля', days: 29}, 
            { month: 'Марта', days: 31}, 
            { month: 'Апреля', days: 30}, 
            { month: 'Мая', days: 31}, 
            { month: 'Июня', days: 30}, 
            { month: 'Июля', days: 31}, 
            { month: 'Августа', days: 31},             
            { month: 'Сентября', days: 30}, 
            { month: 'Октября', days: 31}, 
            { month: 'Ноября', days: 30}, 
            { month: 'Декабря', days: 31}, 
                    
        ],

    profession:[
        {prof: 'Слесарь', gen: 'male'},
        {prof: 'Маникюрщица', gen: 'fem'},
        {prof: 'Техник', gen: 'male'},
        {prof: 'Прораб', gen: 'male'},
        {prof: 'Повар', gen: 'all'},
        {prof: 'Врач', gen: 'all'},
        {prof: 'Ветеринар', gen: 'all'},
        {prof: 'Менеджер', gen: 'all'},
        {prof: 'Разработчик', gen: 'all'},
        {prof: 'HR', gen: 'all'},
        {prof: 'Массажистка', gen: 'fem'},
        {prof: 'Няня', gen: 'fem'},
    ],

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function(){  // в случайном порядке (в зависимости от randomIntNumber) выбирает гендер
        let male = this.GENDER_MALE;
        let female = this.GENDER_FEMALE;
        if (this.randomIntNumber() == 1){
            return 'Мужчина';
        }else{
            return 'Женщина';
        }
    },
    

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина'){
            

        return this.randomValue(this.firstNameMaleJson);
        }else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },


     randomSurname: function() {
        if (this.person.gender == 'Мужчина'){
            return this.randomValue(this.surnameJson);

        }else{
            
            return `${this.randomValue(this.surnameJson)}a`;

        }        

    },
    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина'){
            return `${this.randomValue(this.patronymicJson)}ич`;

        }else{
            
            return `${this.randomValue(this.patronymicJson)}на`;
        }        

    },

    
    randomYearOfBirth:  function () { 
        
        let year = this.randomIntNumber(2010, 1960)
        let leap = '';
        let mounth = '';

        if( year % 4 == 0){
            if ( year % 100 == 0){
                if ( year % 400 == 0){
                    leap = 'leap';
                }else{
                    leap = 'noleap';
                }
            }else{
                leap = 'noleap';
            }
            
        }else{
            leap = 'noleap';
        }      
        Arr = [year, leap] ;

        return Arr;   
    },

    randomMonth: function  () {
        
        const prop = this.randomIntNumber(11, 0);  
        arr = [this.months[prop]['month'], this.months[prop]['days']]
        return arr;                 

    },

    randomDays: function  () {
        const year = this.randomYearOfBirth();
        const month = this.randomMonth();

        let day = 0;

        if (month[0] == 'Февраля'){
            if(year[1] == 'leap')  day = 29;
            else  day = 28;       
        }else if (month[1 == 31])  day = 31;
        else  day = 30;

        return this.randomIntNumber(day, 1);        
        


    },
    randomDate: function() {
    let date =  `${this.randomDays()} ${this.randomMonth()[0]} ${this.randomYearOfBirth()[0]}`
    return  date;
    },

    randomProfession: function(){
        prof = this.profession.prof;
        const prof1 = this.profession.filter(el => {
            const maleProf = el.gen;
            if(this.person.gender == 'Мужчина'){
               
                if(this.randomIntNumber() == 1){
                    return maleProf.includes('male')
                }else{
                    return maleProf.includes('all') ;

                }
               
            
            }else{
                if(this.randomIntNumber() == 1){
                    return maleProf.includes('fem')
                }else{
                    return maleProf.includes('all') ;

                }
                
            }
           
        }) 
        const rand = this.randomIntNumber(prof1.length - 1, 0);

        
             
       
        return   prof1[rand].prof; 
        

    },
   /* randomProfessionResult: function(){
        const ran = this.profession.length;

        const rand = randomIntNumber(this.profession.length, 0);
        const prof1 = this.randomProfession();
        

        console.log(prof1);  // ['Мангустин', 'Дуриан']  
        console.log(rand);
    },*/

    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
               // this.person.yearOfBirth = this.randomYearOfBirth()[0];
        //this.person.months = this.randomMonth()[0];
        this.person.date = this.randomDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
