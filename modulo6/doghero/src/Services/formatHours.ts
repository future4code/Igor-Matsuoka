export class FormataHoras {
    public FormataStringHora(hora:string) {
        var h  = hora.split(":")[0];
        var m  = hora.split(":")[1];
        var s  = hora.split(":")[2];
      
        return [h, m, s]
    }

    public formatar_segundos(h:number,min:number,s:number) {
        return (h*3600)+(min*60)+(s);
    }

    public diferenca(h1:number,h2:number) {
        return h1-h2
    }

    public data_format(s:number) {
        const h = Math.floor(s/3600);
        const min = Math.floor((s - (h*3600))/60);
        s = s - (Math.floor(s/60)*60);
        return h + "h "+ min + "min "+s + "s";
    }
}