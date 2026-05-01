
class trinagulo{
    base: number;
    altura: number;
   
    constructor(pbase:number, paltura:number, ){
        this.base = pbase;
        this.altura = paltura;
       
    }
    
    calcularArea():number{
        return (this.base * this.altura)/2;
    }
}

const bagui = new trinagulo(10,5);