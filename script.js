'use strict';

const labelDataDay = document.querySelector(".data--day")
const labelDataMonth = document.querySelector(".data--month")
const labelDataYear = document.querySelector(".data--year")
const inputDay = document.querySelector(".input--day")
const inputMonth = document.querySelector(".input--month")
const inputYear = document.querySelector(".input--year")
const checkData = document.querySelector(".check")
const messague = document.querySelectorAll(".messague")

checkData.addEventListener("click", () => {
    const day = +inputDay.value
    const month = +inputMonth.value
    const year = +inputYear.value


    if ((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && (year >= 1900 && year <= 2023)) {
        const fecha = new Date()
        const dayTotal = fecha.getDate() - day
        const monthTotal = (fecha.getMonth() + 1) - month
        const yearTotal = fecha.getFullYear() - year


        if (dayTotal <= 0) {
            // labelDataMonth.textContent=Math.abs(-(monthTotal-1)-12)
            console.log(monthTotal);
            if (monthTotal <= 0) {
                labelDataYear.textContent = yearTotal - 1
                labelDataMonth.textContent = Math.abs(-(monthTotal - 1) - 12)
            } else {
                labelDataYear.textContent = yearTotal
                labelDataMonth.textContent = monthTotal - 1
            }
            labelDataDay.textContent = 30 - Math.abs(dayTotal)
        } else {
            labelDataYear.textContent = yearTotal
            labelDataMonth.textContent = monthTotal
            labelDataDay.textContent = dayTotal

        }

    } else {
        messague.forEach(i => {
            i.style.display = "block"
        })


    }
})
