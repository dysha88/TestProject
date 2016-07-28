var reel = new ReelConfig();
var reel1 = new ReelConfig();
var reel2 = new ReelConfig();
var text = new WritingText();



//function cf_random()
//{
//    a=Math.round(Math.random()*10000); //Генерация случайного четырехзначного числа
//    b="c:\\f"+a+".txt" //Генерация имени файла
//    var fso, f1;
//    fso = new ActiveXObject("Scripting.FileSystemObject");
//    f1 = fso.CreateTextFile(b, true); //Создание файла со случайным именем, хранящимся в переменной b и открытие его для записи
//    f1.WriteLine("Testing 1, 2, 3.") ; //Занесение информации в файл
//    document.writeln("Создан файл с именем:" + b); //Вывод сообщения в окно браузера.
//}
//
//var fso, tf;
//fso = new ActiveXObject("Scripting.FileSystemObject"); //Создаем экземпляр объекта FSO
//tf = fso.CreateTextFile("c:\\user_text.txt", true);//Создаем файл с именем c:\user_text.txt и открываем его для записи
//tf.Write (a); //Записываем в него текст, переданный функции в качестве параметра
//tf.Close(); //Закрываем файл
//}


function done(){
    text.writeText();
    reel.getElements('SYM9', CONFIG.betLines[0], false, false);
    reel1.getElements('SYM9', CONFIG.betLines[0], true, false);
    //reel2.getElements('SYM9', CONFIG.betLines[0], true, true);
}


