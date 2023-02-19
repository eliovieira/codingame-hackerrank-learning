class NotesStore {
  constructor(name, state) {
    this.notes = [];
  }

  addNote(state, name) {
    if (!name) {
      throw new Error("Error: Name cannot be empty");
    } else if (
      state !== "completed" &&
      state !== "active" &&
      state !== "others"
    ) {
      throw new Error(`Invalid state ${state}`);
    } else {
      this.notes.push({ name: name, state: state });
    }
  }

  getNotes(state) {
    const arr = [];
    if (state !== "completed" && state !== "active" && state !== "others") {
      throw new Error(`Invalid state ${state}`);
    } else {
      for (let i = 0; i < this.notes.length; i++) {
        if (this.notes[i].state === state) {
          arr.push(this.notes[i].name);
        }
      }
    }
    return arr;
  }
}
