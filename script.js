const botaoDetalhes = document.getElementsByClassName("botaoDetalhes")



for (let i = 0; i < botaoDetalhes.length; i++) {
    botaoDetalhes[i].addEventListener("click",()=>{
        if (i===0) {
            alert("rede na praia pós pedido :)")
        }
        if (i===1) {
            alert("primeira vez que nos encontramos(clássica)")
        }
        if (i===2) {
            alert("eu e você no cumbuco dia 31/12 antes de ir à praia")
        }
        
        if (i===3) {
            alert("tenho quase certeza que foi o dia da pizzaria nova")
        }
        
        if (i===4) {
            alert("eu e você no cinema (aquele filme da escritora emily)")
        }
        
        if (i===5) {
            alert("eu e você no jeronimo depois do cumbuco")
        }
        
        if (i===6) {
            alert("era domingo e estávamos de saída do cumbuco")
        }
        
        if (i===7) {
            alert("nossa última ida ao cumbuco (por enquanto)")    
        }
        
    })
    
}