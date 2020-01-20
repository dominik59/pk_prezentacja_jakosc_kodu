var tab_znakow = new Array("Ą","ą", "Ę","ę", "Ł", "ł", "Ź", "ź", "Ż", "ż", "Ć", "ć", "Ś", "ś", "Ń", "ń", "Ó", "ó");

function polska_litera(litera) {
    var NO = 0;
    var OK = 1;

    var tab_dl = tab_znakow.length;

    for(j = 0; j <= tab_dl; j++) {
        if(litera == tab_znakow[j] ) {
            return OK;
        }
    }

    return NO;
}

function tylko_litery_i_cyfry(wyraz) {
    var OK = 1
    var NO = 0

    wyraz = wyraz.toUpperCase();

    var dlugosc = wyraz.length;

    for (i = 0; i < dlugosc; i++) {
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
    for (i = 0; i < dlugosc; i++) {
        if (wyraz.charAt(i) == "-" || wyraz.charAt(i) == " " || wyraz.charAt(i) == "." || wyraz.charAt(i) == "&" || wyraz.charAt(i) == "_") {
            licznik++;
        }
    }
    if (dlugosc > 0)
        if (licznik == dlugosc) {
            return NO;
        }
    return OK;
}

console.log(tylko_litery_i_cyfry('123ą'));
