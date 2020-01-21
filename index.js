/**
 * 1. Używanie polskich znaków
 * 2. Emulacja logiki boolowskiej za pomocą integerów
 * 3. Znaczna komplikacja kodu
 * 4. Bardzo długie linie które nie mieszczą się w 120 kolumnach
 * 5. Kilka punktów wyjścia z programu
 * 6. Używanie niebezpiecznych porównań == zamiast ===
 * 7. Program nie działa jak powinien - zwraca 1(true) pomimo wpisania Gżegżółka123.-
 */

var tab_znak = new Array("Ą","ą", "Ę","ę", "Ł", "ł", "Ź", "ź", "Ż", "ż", "Ć", "ć", "Ś", "ś", "Ń", "ń", "Ó", "ó");

function polska_litera(litera) {
    var NO = 0;
    var OK = 1;

    var tab_dlug = tab_znak.length;

    for(j = 0; j <= tab_dlug; j++) {
        if(litera == tab_znak[j] ) {
            return OK;
        }
    }

    return NO;
}

function tylko_cyfry_i_litery(wyraz) {
    var OK = 1
    var NO = 0

    wyraz = wyraz.toUpperCase();

    var rozmiar = wyraz.length;

    for (i = 0; i < rozmiar; i++) {
        if (wyraz.charAt(i) < "A" && wyraz.charAt(i) != "-" && wyraz.charAt(i) != " " && wyraz.charAt(i) != "." && wyraz.charAt(i) != "&" && wyraz.charAt(i) != "_" && wyraz.charAt(i) != "0" && wyraz.charAt(i) != "1" && wyraz.charAt(i) != "2" && wyraz.charAt(i) != "3" && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "5" && wyraz.charAt(i) != "7" && wyraz.charAt(i) != "8" && wyraz.charAt(i) != "9") {
            if (polska_litera(wyraz.charAt(i)) == 0)
                return NO;
        }
        if (wyraz.charAt(i) > "Z" && wyraz.charAt(i) != "-" && wyraz.charAt(i) != " " && wyraz.charAt(i) != "." && wyraz.charAt(i) != "&" && wyraz.charAt(i) != "_" && wyraz.charAt(i) != "0" && wyraz.charAt(i) != "1" && wyraz.charAt(i) != "2" && wyraz.charAt(i) != "3" && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "4" && wyraz.charAt(i) != "5" && wyraz.charAt(i) != "7" && wyraz.charAt(i) != "8" && wyraz.charAt(i) != "9") {

            if (wyraz.charCodeAt(i) > 188)
                continue;
            else {
                if (polska_litera(wyraz.charAt(i)) == 0)
                    return NO;
                else
                    continue;
            }
        }
    }
    var licznik = 0;
    for (i = 0; i < rozmiar; i++) {
        if (wyraz.charAt(i) == "-" || wyraz.charAt(i) == " " || wyraz.charAt(i) == "." || wyraz.charAt(i) == "&" || wyraz.charAt(i) == "_") {
            licznik++;
        }
    }
    if (rozmiar > 0)
        if (licznik == rozmiar) {
            return NO;
        }
    return OK;
}

console.log('123ą  ' + tylko_cyfry_i_litery('123ą'));
console.log('Polska  ' + tylko_cyfry_i_litery('Polska'));
console.log('Polska123  ' + tylko_cyfry_i_litery('Polska123'));
console.log('Gżegżółka123  ' + tylko_cyfry_i_litery('Gżegżółka123'));
console.log('Gżegżółka123.-  ' + tylko_cyfry_i_litery('Gżegżółka123.-'));
console.log('Gżegżółka123.-"  ' + tylko_cyfry_i_litery('Gżegżółka123.-"'));