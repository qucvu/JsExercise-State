import React, { Component } from "react";
import Header from "./Header";
import styles from "./TryGlasses.module.css";
import data from "./data.json";
import GlassItemList from "./GlassItemList";
export default class TryGlasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGlass: data[0],
    };
  }

  handleGlass = (glass) => {
    this.setState({
      selectedGlass: glass,
    });
  };
  render() {
    const glass = this.state.selectedGlass;
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.model}>
          <div className={styles["model-glasses"]}>
            <img src="./glassesImage/model.jpg" alt="Model" />
            <div className={styles["glass-choose"]}>
              <h1>{glass.name}</h1>
              <p>{glass.desc}</p>
            </div>
            <div className={styles["glass-img-choose"]}>
              <img src={glass.url} alt={glass.name} />
            </div>
          </div>
          <div className={styles["model-sample"]}>
            <img src="./glassesImage/model.jpg" alt="Model" />
          </div>
        </div>
        <div className={styles.glassList}>
          <GlassItemList glasses={data} OnChoose={this.handleGlass} />
        </div>
      </div>
    );
  }
}
