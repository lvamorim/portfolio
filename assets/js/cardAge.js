export function cardAge() {
    const birthDate = new Date(1996, 11, 17, 0, 0, 0, 0);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDate() - birthDate.getDate();

    if(month < 0 || month == 0 && day < 0) { 
        age--;
    }

    const cardAge = document.querySelector("[data-age]");
    cardAge.append(age + " anos");
}