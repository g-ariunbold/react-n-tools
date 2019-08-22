import { observable, computed } from "mobx";

class AppStore {
  @observable unit = "C";
  @observable tempCelcius = 25;

  @computed get tempFahrenheit() {
    return this.tempCelcius * (9 / 5) + 32;
  }
  @computed get temp() {
    switch (this.unit) {
      case "F":
        return this.tempFahrenheit + "F";
      case "C":
        return this.tempCelcius + "C";
    }
  }
}

const store = new AppStore();

export default store;
