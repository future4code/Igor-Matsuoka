export class Competition {  
    constructor(
        private id: string,
        private competicao: string,
        private atleta: string,
        private value: string,
        private unidade: string,
        private situacao: SITUACAO
    ){
        this.id = id;
        this.competicao = competicao;
        this.atleta = atleta;
        this.value = value;
        this.unidade = unidade;
        this.situacao = situacao
    }

    public getId(){
        return this.id
    }

    public getCompeticao(){
        return this.competicao
    }

    public getAtleta(){
        return this.atleta
    }

    public getValue(){
        return this.value
    }

    public getUnidade(){
        return this.unidade
    }

    public getSituacao(){
        return this.situacao
    }

    static toCompetitionModel(data: any): Competition {
        return new Competition(data.id, data.competicao, data.atleta, data.value, data.unidade, data.situacao)
    }

}

export type InputDTO = {
    competicao: string,
    atleta: string,
    value: string,
    unidade: string
}

export enum SITUACAO {
    ANDAMENTO = "EM ANDAMENTO",
    FINALIZADO = "FINALIZADO"
}