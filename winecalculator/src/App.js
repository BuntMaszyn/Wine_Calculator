import React, { Component } from "react";
import "./App.css";

class WineCalculator extends Component {
  state = {
    bo: 13,
    juice: 20,
    water: 20,
    waterAdd: 0,
    sugarAdd: 500,
    bx: -1,
    success: false,
    allCalculated: false
  };

  submitHandle = e => {
    e.preventDefault();
    const { bo, juice, water, waterAdd, sugarAdd, bx } = this.state;
    console.log(this.state);

    //Etap 1-3 SAM SOK I WODA
    // poprawka na niecukry przed dosładzaniem
    let pop = 4 * (juice / (juice + water));
    console.log("poprawka: " + pop);
    // poprawiony balling poczatkowy
    let boPop = bo - pop;
    console.log("Blg o skorygowany: " + boPop);

    //PARAMETRY ROZTWORU
    //cukier [g/kg roztworu]
    let sugarInitial = boPop * 10;
    //cukier [ml/kg roztworu]
    let sugarInitialVolume = sugarInitial * 0.62;
    //woda [g/kg roztworu]
    let waterInitial = 1000 - sugarInitial;
    //woda [ml/kg roztworu]
    let waterInitialVolume = waterInitial;
    //objetosc kilograma roztworu [ml/kg roztworu]
    let wineInitialKgVolume = waterInitialVolume + sugarInitialVolume;
    console.log(
      "cukier g/l: " + sugarInitial,
      "cukier ml: " + sugarInitialVolume,
      "woda g/l ml: " + waterInitial,
      "objętość kg roztworu: " + wineInitialKgVolume
    );
    // ilość cukru w litrze nastawu
    let sugarInLiterOfInitialWine = (sugarInitial * 1000) / wineInitialKgVolume;
    //ilość cukru w nastawie
    let allSugarInInitialWine = sugarInLiterOfInitialWine * (juice + water);
    console.log(
      "ilość cukru w litrze nastawu: " + sugarInLiterOfInitialWine,
      "ilość cukru w nastawie: " + allSugarInInitialWine
    );

    // DOSŁADZANIE I DOLEWANIE - POPRAWKA NA NIECUKRY
    // objetosc dosypanego cukru
    let sugarAddVolume = (sugarAdd / 1000) * 0.62;
    // teoretyczna ilosc cukru w nastawie po doslodzeniu
    let sugarWhole = allSugarInInitialWine + sugarAdd;
    // skorygowana poprawka na niecukry uwzględniająca dodaną wodę i dosładzanie
    let popWithAdditions = 4 * (juice / (juice + waterAdd + water));
    console.log(
      "skorygowana poprawka na niecukry uwzględniająca dodaną wodę i dosładzanie: " +
        popWithAdditions
    );
    // ZAKOŃCZENIE FERMENTACJI - MOC, POPRAWKA NA ALKOHOL, CUKRY RESZTKOWE
    let volumeOfAllUsed = water + juice + sugarAddVolume + waterAdd;
    let potentialSugarPerLiter = sugarWhole / volumeOfAllUsed;
    let potentialAlkoToProduce = potentialSugarPerLiter / 16.9;
    let popAlko = potentialAlkoToProduce * 0.1974 + 1.3;
    let bxWithPops = bx - popWithAdditions + popAlko;
    let sugarRest = bxWithPops * 10;
    let allFermentedSugarPerLiter = potentialSugarPerLiter - sugarRest;
    let finalAlkoVol = allFermentedSugarPerLiter / 16.9;
    console.log(finalAlkoVol);

    this.setState({
      pop: parseFloat(pop),
      boPop: parseFloat(boPop),
      sugarInitial: parseFloat(sugarInitial),
      sugarInitialVolume: parseFloat(sugarInitialVolume),
      waterInitial: parseFloat(waterInitial),
      waterInitialVolume: parseFloat(waterInitialVolume),
      wineInitialKgVolume: parseFloat(wineInitialKgVolume),
      sugarInLiterOfInitialWine: parseFloat(sugarInLiterOfInitialWine),
      allSugarInInitialWine: parseFloat(allSugarInInitialWine),
      sugarAddVolume: parseFloat(sugarAddVolume),
      sugarWhole: parseFloat(sugarWhole),
      popWithAdditions: parseFloat(popWithAdditions),
      volumeOfAllUsed: parseFloat(volumeOfAllUsed),
      potentialSugarPerLiter: parseFloat(potentialSugarPerLiter),
      potentialAlkoToProduce: parseFloat(potentialAlkoToProduce),
      popAlko: parseFloat(popAlko),
      bxWithPops: parseFloat(bxWithPops),
      sugarRest: parseFloat(sugarRest),
      allFermentedSugarPerLiter: parseFloat(allFermentedSugarPerLiter),
      finalAlkoVol: parseFloat(finalAlkoVol),
      allCalculated: true
    });
    console.log(this.state);
  };

  setBo = e => {
    // console.log(e.target.value);
    let val = parseFloat(e.target.value);
    // console.log(`Bo ${val}`);
    // console.log(typeof val);
    if (val === "" || val > 30 || val < -4) {
      alert(
        "Błąd: początkowa gęstość nie może być większa od 25 ani mniejsza od -4 Blg, pole nie może być puste"
      );
    } else {
      this.setState({
        bo: val
      });
    }
  };

  setJuice = e => {
    let val = parseFloat(e.target.value);
    if (val === "" || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      console.log(val);
      this.setState({
        juice: val
      });
    }
  };

  setWater = e => {
    let val = parseFloat(e.target.value);
    if (val === "" || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      this.setState({
        water: val
      });
    }
  };

  setWaterAdd = e => {
    let val = parseFloat(e.target.value);
    if (val === "" || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      this.setState({
        waterAdd: val
      });
    }
  };

  setSugarAdd = e => {
    let val = parseFloat(e.target.value);
    if (val === "" || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      this.setState({
        sugarAdd: val
      });
    }
  };

  setBx = e => {
    let val = parseFloat(e.target.value);
    if (val === "" || val > 30 || val < -4) {
      alert(
        "Błąd: końcowa gęstość nie może być większa od 30 ani mniejsza od -4 Blg, pole nie może być puste"
      );
    } else {
      this.setState({
        bx: val
      });
    }
  };

  // // metoda powrotu do pustego formularza
  // reset = () => {
  //   this.setState({
  //     name: "",
  //     surname: "",
  //     success: false
  //   });
  // };

  // render zaczyna sie od warunku state
  render() {
    // po wyslaniu state.succes = true
    // if (this.state.success) {
    //   return (
    //     <>
    //       <h1>Formularz został wysłany. Dzieki {this.state.name} !</h1>
    //       <button onClick={this.reset}>Dodaj kolejną osobę</button>
    //     </>
    //   );
    // }
    // przed wysłaniem: formularz z metodą on Submit oraz inputy dla name i surname i metodami onChange
    return (
      <>
        <div className="container">
          <h1 className="header"> Kalkulator Winiarski</h1>
          <div className="wrapper">
            <form className="form" onSubmit={this.submitHandle}>
              <label> 1) Ilość soku w nastawie [l]:</label>
              <input
                type="number"
                value={this.state.juice}
                onChange={this.setJuice}
              />
              <label> 2) Ilość wody w nastawie [l]:</label>
              <input
                type="number"
                value={this.state.water}
                onChange={this.setWater}
              />
              <label>
                {" "}
                3) Wskazania gęstościomierzą przed fermentacją [Blg]:
              </label>
              <input
                type="number"
                defaultValue={this.state.bo}
                onChange={this.setBo}
              />

              <label> 4) Cukier dodany przed/podczas fermentacji [g]:</label>
              <input
                type="number"
                value={this.state.sugarAdd}
                onChange={this.setSugarAdd}
              />
              <label> 5) Woda dodana podczas fermentacji [l]:</label>
              <input
                type="number"
                value={this.state.waterAdd}
                onChange={this.setWaterAdd}
              />
              <label>
                {" "}
                6) Wskazania gęstościomierzą po zakończeniu fermentacji [Blg]:
              </label>
              <input
                type="number"
                value={this.state.bx}
                onChange={this.setBx}
              />
              <div />
              <button className="button" type="submit">
                Oblicz
              </button>
              {/* <input type="submit" value="Oblicz" /> */}
            </form>

            <div className="animationContainer flex">
              <PreFermentation />
              <PostFermentation />
            </div>
            <div className="spanContainer flex">
              <Sweetness />
            </div>
            <div className="reportContainer">
              <Report props={this.state} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

class PreFermentation extends Component {
  render() {
    return (
      <>
        <div>
          <span>Fermentowano:</span>
          <div className="animationDiv" />
        </div>
      </>
    );
  }
}

class PostFermentation extends Component {
  render() {
    return (
      <>
        <div>
          <span>Uzyskano wino:</span>
          <div className="animationDiv" />
        </div>
      </>
    );
  }
}

class Sweetness extends Component {
  render() {
    return (
      <>
        <span>Wytrawne</span>
        <span>Półwytrawne</span>
        <span>Półsłodkie</span>
        <span>Słodkie</span>
        <span>Deserowe</span>
      </>
    );
  }
}

const Report = e => {
  console.log(e);
  if (e.props.allCalculated) {
    return (
      <>
        <p>RAPORT</p>
      </>
    );
  } else {
    return (
      <>
        <p>To jest miejsce na raport</p>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <WineCalculator />
    </>
  );
};

export default App;
