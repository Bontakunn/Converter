
const Lengthfunction = function(){
    const Meter = document.getElementById("Meter").value;

    if (Meter === ""){
        document.getElementById('Meter').value = "0";
        document.getElementById("Centimeter").value = '0';
        document.getElementById("Kilometer").value = '0';
        document.getElementById("Miles").value = '0';
        return;
    }

    getResult(Meter);


};

function getResult(Meter){
    document.getElementById("Centimeter").value = parseFloat(Meter) * 100;
    document.getElementById("Kilometer").value = parseFloat(Meter) / 1000;
    document.getElementById("Miles").value = parseFloat(Meter) / 1609;
}


const reset = function(){
    document.getElementById("Meter").value =  '';
    document.getElementById("Centimeter").value = '';
    document.getElementById("Kilometer").value = '';
    document.getElementById("Miles").value = '';
}