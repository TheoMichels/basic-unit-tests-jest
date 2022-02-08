function computeAge(birthday, currentDate) {    

    if(birthday > currentDate) {
        return "It can't be a negative age"
    }
    else {
        return parseInt((currentDate - birthday)/1000/3600/24/365)
    } 
}

module.exports = computeAge