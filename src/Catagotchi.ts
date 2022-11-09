export default class Catagotchi {
  private catAlive: boolean;

  /**
   * Update the state of Catagotchi according to rules
   */
  public updateCat(): void {
    this.catAlive = true;
  }

  /**
   * Update the screen of the Catagotchi
   * TODO: Complete this function.
   *
   * @returns String with the output for the screen
   */
  public getScreen(): string {
    if (this.catAlive) {
      return `Catagotchi!<br>
      Status: <br>
      Mood:   <br>
      Energy: <br>
      Hunger: `;
    }
    return 'Catagotchi Dead!';
  }
}
