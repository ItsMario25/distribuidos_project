const express = require('express')
const app = express()
const port= 3000

app.get('/', (req, res) => {
	
	var x=req.query.a;
	var Ningresado=[],n=[];
	var tam = x.length;
	var numero = [1,8,2,5];
	var Cfijas=0, Cpicas=0;

	if(tam==4){
	
		Ningresado[0]= Math.trunc(x / 1000);
		Ningresado[1]= Math.trunc((x % 1000)/100);
		Ningresado[2]= Math.trunc(((x % 1000)%100)/10);
		Ningresado[3]= Math.trunc(((x % 1000)%100)%10);

		if(comparar(Ningresado)!=true){
				for (let i = 0; i < tam; i++) {
					
					if(Ningresado[i]==numero[i]){
						Cfijas=Cfijas+1;
					}else{
						if (Estaenarreglo(Ningresado[i])==true) {
							Cpicas=Cpicas+1;
						}
					}
						
					
					
				}
				res.send ('tiene  '+ Cfijas + "  fijas y  "+ Cpicas +"  picas")
		}else{
			res.send ('felicidades ha encontrado el numero  '+ numero)
		}		

	}else{
		res.send (' el numero debe tener 4 digitos  ')
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

	function Estaenarreglo (n){
		for (let i = 0; i < tam; i++) {
			if(n==numero[i]){
				return true
			}	
		}
	}


 	
})
app.post('/', (req, res) => {
	const x=req.query.name;
 	res.send ('hello'+ x)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
