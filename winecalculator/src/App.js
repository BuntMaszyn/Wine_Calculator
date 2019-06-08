import React, { Component } from "react";
import "./App.css";

class WineCalculator extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  state = {
    bo: 26,
    juice: 10,
    water: 0,
    waterAdd: 0,
    sugarAdd: 0,
    bx: 0,
    // success: false,
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
    let popWithAdditions =
      4 * (juice / (juice + waterAdd + water + sugarAddVolume));
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

    this.setState(
      {
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
      },
      () => {
        window.scrollTo(0, this.myRef.current.offsetTop);
      }
    );

    console.log(this.state);
  };

  setBo = e => {
    // console.log(e.target.value);
    let val = parseFloat(e.target.value);
    // console.log(`Bo ${val}`);
    // console.log(typeof val);
    if (Number.isNaN(val) || val > 30 || val < -4) {
      alert(
        "Błąd: początkowa gęstość nie może być większa od 30 ani mniejsza od -4 Blg, pole nie może być puste"
      );
      document.querySelector(".bo").value = 0;
    } else {
      this.setState({
        bo: val
      });
    }
  };

  setJuice = e => {
    let val = parseFloat(e.target.value);
    console.log(val);
    if (Number.isNaN(val) || val <= 0) {
      alert(
        "Błąd: pole nie może być puste, nie można robić wina z 0 litra lub mniej soku"
      );
    } else {
      console.log(val);
      this.setState({
        juice: val
      });
    }
  };

  setWater = e => {
    let val = parseFloat(e.target.value);
    if (Number.isNaN(val) || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      this.setState({
        water: val
      });
    }
  };

  setWaterAdd = e => {
    let val = parseFloat(e.target.value);
    if (Number.isNaN(val) || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      this.setState({
        waterAdd: val
      });
    }
  };

  setSugarAdd = e => {
    let val = parseFloat(e.target.value);
    if (Number.isNaN(val) || val < 0) {
      alert("Błąd: pole nie może być puste, wartości ujemne są wykluczone");
    } else {
      this.setState({
        sugarAdd: val
      });
    }
  };

  setBx = e => {
    let val = parseFloat(e.target.value);
    if (Number.isNaN(val) || val > 30 || val < -4) {
      alert(
        "Błąd: końcowa gęstość nie może być większa od 30 ani mniejsza od -4 Blg, pole nie może być puste"
      );
      document.querySelector(".bx").value = 0;
    } else {
      this.setState({
        bx: val
      });
    }
  };

  reset = e => {
    e.preventDefault();

    // document.querySelector(".reportRef").style.display = "none";
    this.setState({
      bo: 26,
      juice: 10,
      water: 0,
      waterAdd: 0,
      sugarAdd: 0,
      bx: 0,
      allCalculated: false
      // sugarRest: false
    });
    document.querySelector(".bo").value = this.state.bo;
    document.querySelector(".bx").value = this.state.bx;
  };

  render() {
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
                className="bo"
                type="number"
                defaultValue={this.state.bo}
                onBlur={this.setBo}
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
                className="bx"
                type="number"
                defaultValue={this.state.bx}
                onBlur={this.setBx}
              />
              <div />
              <button className="button" type="submit">
                Oblicz
              </button>
              <div />
              <button className="button button2" onClick={this.reset}>
                Reset
              </button>
            </form>

            <div className="animationContainer flex">
              <PreFermentation props={this.state} />
            </div>

            <div className="sweetContainer flex">
              {this.state.allCalculated ? (
                <Sweetness props={this.state.sugarRest} />
              ) : (
                <SweetnessInitial props={this.state.sugarRest} />
              )}
            </div>

            <div ref={this.myRef} className="reportRef">
              {this.state.allCalculated ? (
                <Report props={this.state} />
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const PreFermentation = e => {
  console.log(e);
  return (
    <>
      <div className="circle">
        <div className="wave" />
      </div>
      {e.props.allCalculated ? (
        <h1>Uzyskałeś {e.props.finalAlkoVol.toFixed(2)} % alkoholu i wino:</h1>
      ) : (
        <></>
      )}
    </>
  );
};

const style = {
  border: "1px solid black",
  borderRadius: "50%",
  lineHeight: "3em",
  width: "10em",
  justifyContent: "center",
  backgroundColor: "#a6d2ff",
  display: "flex",
  alignItems: "center",
  margin: "1em"
};

// wina wytrawne mają zawartość cukru poniżej 4 g/l, półwytrawne do 12 g/l, półsłodkie do 45 g/l, a słodkie powyżej tej normy

const Sweetness = e => {
  console.log(e);
  let a = e.props;
  return (
    <>
      {a <= 4 ? (
        <div
          style={{
            ...style,
            background: "red",
            transform: "scale(1.4)"
          }}
        >
          Wytrawne
        </div>
      ) : (
        <div style={{ ...style, background: "#a6d2ff" }}>Wytrawne</div>
      )}
      {a > 4 && a <= 12 ? (
        <div style={{ ...style, background: "red", transform: "scale(1.4)" }}>
          Półwytrawne
        </div>
      ) : (
        <div style={{ ...style, background: "#a6d2ff" }}>Półwytrawne</div>
      )}
      {a > 12 && a <= 45 ? (
        <div style={{ ...style, background: "red", transform: "scale(1.4)" }}>
          Półsłodkie
        </div>
      ) : (
        <div style={{ ...style, background: "#a6d2ff" }}>Półsłodkie</div>
      )}
      {a > 45 ? (
        <div style={{ ...style, background: "red", transform: "scale(1.4)" }}>
          Słodkie
        </div>
      ) : (
        <div style={{ ...style, background: "#a6d2ff" }}>Słodkie</div>
      )}
    </>
  );
};

const SweetnessInitial = e => {
  return (
    <>
      <div style={{ ...style, background: "#a6d2ff" }}>Wytrawne</div>
      <div style={{ ...style, background: "#a6d2ff" }}>Półwytrawne</div>
      <div style={{ ...style, background: "#a6d2ff" }}>Półsłodkie</div>
      <div style={{ ...style, background: "#a6d2ff" }}>Słodkie</div>
    </>
  );
};

const Report = e => {
  console.log(e);
  return (
    <>
      <div className="reportContainer flex">
        <div className="reportList">
          <h3>Winiarzu, nastawiłeś wino o następujących parametrach:</h3>
          <ul>
            <li>Sok owocowy: {e.props.juice} l</li>
            {e.props.water !== 0 || e.props.water !== "" ? (
              <li>Woda: {e.props.water} l</li>
            ) : (
              <li>nie dodano wody</li>
            )}
            <li>Wskazania gęstościomierza: {e.props.bo} Blg</li>
            <li>Poprawka na niecukry: {e.props.pop.toFixed(2)} Blg </li>
            <li>
              W jednym kilogramie nastawu znajduje się{" "}
              {Math.floor(e.props.sugarInitial)} g czyli{" "}
              {Math.floor(e.props.sugarInitialVolume)} ml cukru oraz{" "}
              {Math.floor(e.props.waterInitialVolume)} ml wody
            </li>
            <li>
              Całkowita ilość cukru w {e.props.water + e.props.juice} l nastawu
              to: {Math.floor(e.props.allSugarInInitialWine)} g{" "}
            </li>
          </ul>
          {e.props.sugarAdd !== 0 || e.props.waterAdd !== 0 ? (
            <div className="reportList optionalReport">
              <h3>Do początkowego nastawu dodałeś:</h3>
              <ul>
                {e.props.sugarAdd !== 0 ? (
                  <li>Dosłodzono cukrem w ilości: {e.props.sugarAdd} g</li>
                ) : (
                  <li>Nie dosładzano</li>
                )}
                {e.props.waterAdd !== 0 ? (
                  <li>Dolano wody w ilości: {e.props.waterAdd} l</li>
                ) : (
                  <li>Nie dolewano wody</li>
                )}
                {e.props.pop !== e.props.popWithAdditions ? (
                  <li>
                    {console.log(e.props.popWithAdditions.toFixed(2), "ada")}
                    Skorygowana poprawka na niecukry:{" "}
                    {e.props.popWithAdditions.toFixed(2)} Blg
                  </li>
                ) : (
                  <></>
                )}
                <li>
                  Objętość z uwględnieniem dodatków:{" "}
                  {e.props.volumeOfAllUsed.toFixed(2)} l
                </li>
              </ul>
            </div>
          ) : (
            <div />
          )}
        </div>

        <div className="reportList">
          <h3>Po fermentacji:</h3>
          <ul>
            <li>
              W litrze nastawu było:{" "}
              {Math.floor(e.props.potentialSugarPerLiter)} g cukru co dawało
              potencjalną możliwość uzyskania{" "}
              {e.props.potentialAlkoToProduce.toFixed(2)} % alkoholu
            </li>
            <li>
              Wskazania gęstościomierza po fermentacji: {e.props.bx.toFixed(2)}{" "}
              Blg
            </li>
            <li>
              Poprawka gęstościowa na zawartość alkoholu:{" "}
              {e.props.popAlko.toFixed(2)} Blg{" "}
            </li>
            <li>
              Skorygowane wskazanie gęstościomierza:{" "}
              {e.props.bxWithPops.toFixed(2)} Blg{" "}
            </li>
            <li>
              Cukier przefermentowany{" "}
              {e.props.allFermentedSugarPerLiter.toFixed(2)} g/l{" "}
            </li>
            <li>
              Cukier resztkowy (słodkość) {e.props.sugarRest.toFixed(2)} g/l{" "}
            </li>
            <li>Finalna moc wina {e.props.finalAlkoVol.toFixed(2)} % alk </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <WineCalculator />
    </>
  );
};

export default App;
