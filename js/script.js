$().ready(function () {
    $('#calcular').click(calcular);
});


function calcular() {
    voltagem = $("#voltagem").val();
    resistencia_r = $("#resistencia_r").val();
    resistencia_c = $("#resistencia_c").val();
    corrente_m = $("#corrente_m").val();

    if (typeof voltagem === 'undefined' || voltagem === '') {
        alert('Voltagem inválida!');
        return false;
    }
    if (typeof resistencia_r === 'undefined' || resistencia_r === '') {
        alert('Resistência R inválida!');
        return false;
    }
    if (typeof resistencia_c === 'undefined' || resistencia_c === '') {
        alert('Resistência C inválida!');
        return false;
    }
    if (typeof corrente_m === 'undefined' || corrente_m === '') {
        alert('Corrente inválida!');
        return false;
    }
    
    ic = voltagem / resistencia_c; //corrente c
    ir = corrente_m - ic; //corrente r
    fem = voltagem - ir * resistencia_r; //forca eletromotriz
    pdb = resistencia_c * ic * ic; //potencia dissipada nas bobinas
    pdr = resistencia_r * ir * ir; //potencia dissipada no rotor
    ps = fem * ir; //potencia de saida
    efc = ps / (voltagem * corrente_m); //eficiência do motor

    $("#ir").html(ir);
    $("#fem").html(fem);
    $("#pdb").html(pdb);
    $("#pdr").html(pdr);
    $("#ps").html(ps);
    $("#efc").html(efc * 100);
}