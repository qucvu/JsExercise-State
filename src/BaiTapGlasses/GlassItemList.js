import React, { Component } from 'react'
import styles from './GlassItemList.module.css'
export default class GlassItemList extends Component {
  
  render() {
    const {glasses , OnChoose} = this.props;
    // console.log(glasses, onClick);
    if(!glasses) return null;
    return (
      <div className={styles.glassItem}>
        {glasses.map((glass, inex) => {
          return (
            <img key={glass.id} src={glass.url} alt={glass.name} className={styles.img} onClick={() => {
              OnChoose(glass);
            }}/>
          )
        })}
      </div>
    )
  }
}
