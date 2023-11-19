AOS.init();

const bday = new Date('jun 28, 2024 19:30:00')
const timeStamp = bday.getTime()

const dateCounter = setInterval(() => {
    const today = new Date()
    const currentTimeStamp = today.getTime()

    const timeGap = timeStamp - currentTimeStamp

    const days = 1000 * 60 * 60 * 24
    const hours = 1000 * 60 * 60
    const minutes = 1000 * 60

    const daysToBday= Math.floor(timeGap / days);
    const hoursToBday = Math.floor((timeGap % days) / hours) + today.getHours();
    const minutesToBday = Math.floor((timeGap % hours) / minutes);
    const secondsToBday = Math.floor((timeGap % minutes) / 1000) ;


    document.getElementById('counter').innerHTML = `${daysToBday}d ${hoursToBday}h ${minutesToBday}m ${secondsToBday}s`

    if(timeGap < 0){
            clearInterval(dateCounter);
            document.getElementById('counter').innerHTML = `<br>This event has ended.`
    }
}, 1000);
