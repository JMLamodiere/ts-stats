import { OutputTarget } from "../Summary";

export class CompositeReport implements OutputTarget {
  constructor(private targets: OutputTarget[]) {}

  print(report: string): void {
    this.targets.forEach((target) => target.print(report));
  }
}
