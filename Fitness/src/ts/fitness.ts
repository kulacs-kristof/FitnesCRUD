export class FitnessNap {
  napNeve: string;
  elegetettKaloria: number;
  edzesHossz: number;
  pihenoNap: boolean;
  tevekenysegNev: string = "";
  edzesIntenzitasErtek: number = 3; // ÚJ mező, alapértelmezett 3

  constructor(napNeve: string) {
    this.napNeve = napNeve;
    this.elegetettKaloria = 0;
    this.edzesHossz = 0;
    this.pihenoNap = false;
  }

  edzesIntenzitas(): string {
    if (this.pihenoNap) return "-";
    return this.edzesIntenzitasErtek.toString();
  }

  tevekenyseg(): string {
    return this.pihenoNap ? "Pihenés" : "Edzés";
  }
}
