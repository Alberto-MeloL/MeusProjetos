type UserStatus = 'pending' | 'paused' | 'completed';
// type UserCategory =
// usar capitaliza para todos os texto, ter modo privado e so libera com senha
type CapitalizeLetters = Capitalize<UserStatus>;//isso define um tipo

export class Post {
  title: string;
  description: string;
  category: string;
  status: CapitalizeLetters;
  dueDate: Date;
  creationDate: Date;

  constructor(
    title: string,
    description: string,
    category: string,
    status: UserStatus,
    dueDate: Date,
    creationDate: Date
  ) {
    (this.title = title),
      (this.description = description),
      (this.category = category),
      (this.status = this.capitalizeLetter(status) as CapitalizeLetters),
      (this.dueDate = dueDate),
      (this.creationDate = creationDate);
  }

  private capitalizeLetter(text: UserStatus): CapitalizeLetters {
    const capitalizedText =
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    if (['Pending', 'Paused', 'Completed'].includes(capitalizedText)) {
      return capitalizedText as CapitalizeLetters;
    }

    throw new Error(`Texto inserido é inválido ${text}`);
  }
}
