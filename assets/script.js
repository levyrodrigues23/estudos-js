let dolar = 5.1


let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.value = "1000,00"
convert("usd-to-brl")

//funçoes
function formatCurrency(value) {
let fixedValue = fixValue(value)
let options = {
useGrouping: false,
minimunFractionDigits: 2
}
let formatter = new Intl.NumberFormat("pt-BR", options)
return formatter.format(fixedValue)


}

function fixValue(value) {
let fixedValue = value.replace(",", ".")
let floatValue = parseFloat(fixedValue)
if(floatValue == NaN) {
    floatValue = 0
}
return floatValue
}



function convert(type) {
    if(type == "usd-to-brl") {



    }



if(type == "brl-to-usd"){

}
}