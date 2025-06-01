export class FitnessNap {
  napNeve: string;
  elegetettKaloria: number;
  edzesHossz: number;
  pihenoNap: boolean;

  constructor(napNeve: string) {
    this.napNeve = napNeve;
    this.elegetettKaloria = 0;
    this.edzesHossz = 0;
    this.pihenoNap = false;
  }

  edzesIntenzitas(): string {
    if (this.pihenoNap || this.edzesHossz === 0) return "-";
    const intenzitas = this.elegetettKaloria / this.edzesHossz;
    if (intenzitas < 5) return "Alacsony";
    if (intenzitas < 10) return "Közepes";
    return "Magas";
  }

  tevekenyseg(): string {
    return this.pihenoNap ? "Pihenés" : "Edzés";
  }
}
