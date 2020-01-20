class StringValidator {
    doContainPolishLetters(string) {
        const regex = /[ąćęłńóśźż]+/i;

        return regex.exec(string) !== null;
    };

    doContainRegularLetters(string) {
        const regex = /[a-zA-Z]+/;

        return regex.exec(string) !== null;
    };

    doContainNumbers(string) {
        const regex = /\d+/;

        return regex.exec(string) !== null;
    };

    doContainNonWordCharacters(string) {
        const regex = /[^\w\dąćęłńóśźż]+/;

        return regex.exec(string) !== null;
    };

    doContainOnlyNumbers(string) {
        return this.doContainNumbers(string)
            && !this.doContainPolishLetters(string)
            && !this.doContainRegularLetters(string)
            && !this.doContainNonWordCharacters(string);
    }

    isPolishWordWithOptionalNumbers(string) {
        return !this.doContainOnlyNumbers(string)
            && !this.doContainNonWordCharacters(string)
            && (this.doContainRegularLetters(string) || this.doContainPolishLetters(string));
    }
}

const stringValidator = new StringValidator();

console.log('Gżegżółka123 ' + stringValidator.isPolishWordWithOptionalNumbers('Gżegżółka123'));
console.log('Gżegżółka ' + stringValidator.isPolishWordWithOptionalNumbers('Gżegżółka'));
console.log('123 ' + stringValidator.isPolishWordWithOptionalNumbers('123'));
console.log('Zółć.) ' + stringValidator.isPolishWordWithOptionalNumbers('Zółć.)'));
