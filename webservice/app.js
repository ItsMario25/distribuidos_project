const express = require('express')
const app = express()
const port= 3000

app.get('/', (req, res) => {
	
	var x=req.query.a;
	var tam = x.length;
	var numero = [1,8,2,5];
	var Cfijas=0, Cpicas=0;
	var num_in = Array.from(x);
	if(tam==4 && !isNaN(x) && !repetido(num_in)){
		if(!comparar(num_in)){
			for (let i = 0; i < tam; i++) {
				if(num_in[i]==numero[i]){
					Cfijas=Cfijas+1;
				}else{
					if (seEncuentra(num_in[i])){
						Cpicas=Cpicas+1;
					}
				}
			}
			res.send ('tiene  '+ Cfijas + "  fijas y  "+ Cpicas +"  picas")
		}else{
			res.send ('Felicidades ha encontrado el numero  '+ x)
		}
	}else{
		res.send (' Debe de ser numero que debe tener 4 digitos  ')
	}
	
	function comparar(n){
		var z=0;
		for (let i = 0; i < tam; i++) {
			if(n[i]==numero[i]){
				z++;
			}
		}
		if (z==4) {
			return true;
		}else{
			return false;
		}
	}
	
	function seEncuentra(n){
		for (let i = 0; i < tam; i++) {
			if(n==numero[i]){
				return true
			}	
		}
	}
	function repetido(n){
		for (let i = 0; i < tam-1; i++) {
			for(let j = i+1; j<tam; j++){
				if(n[i]==n[j]){
					return true
				}
			}	
		} 
	}
})

app.listen(port, () => {
	console.log(`Aplicacion en escucha atraves del puerto http://localhost:${port}`)
})
