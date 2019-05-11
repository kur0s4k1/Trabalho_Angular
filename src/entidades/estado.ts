
export class Estado {
    private nome: string;
    private sigla: string;

    getNome(): string {
        return this.nome;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }

    getSigla(): string {
        return this.sigla;
    }
    setSigla(sigla: string): void {
        this.sigla = sigla;
    }

}