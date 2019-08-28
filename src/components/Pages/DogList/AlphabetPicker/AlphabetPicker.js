import React, { Component } from "react";
import "./AlphabetPicker.css";

export class AlphabetPicker extends Component {
  render() {
    return (
      <div className="alphabet-picker">
        <div onClick={() => this.props.letterClicked("a")} className="a letter">A</div>
        <div onClick={() => this.props.letterClicked("b")} className="b letter">B</div>
        <div onClick={() => this.props.letterClicked("c")} className="c letter">C</div>
        <div onClick={() => this.props.letterClicked("d")} className="d letter">D</div>
        <div onClick={() => this.props.letterClicked("e")} className="e letter">E</div>
        <div onClick={() => this.props.letterClicked("f")} className="f letter">F</div>
        <div onClick={() => this.props.letterClicked("g")} className="g letter">G</div>
        <div onClick={() => this.props.letterClicked("h")} className="h letter">H</div>
        <div onClick={() => this.props.letterClicked("i")} className="i letter">I</div>
        <div onClick={() => this.props.letterClicked("j")} className="j letter">J</div>
        <div onClick={() => this.props.letterClicked("k")} className="k letter">K</div>
        <div onClick={() => this.props.letterClicked("l")} className="l letter">L</div>
        <div onClick={() => this.props.letterClicked("m")} className="m letter">M</div>
        <div onClick={() => this.props.letterClicked("n")} className="n letter">N</div>
        <div onClick={() => this.props.letterClicked("o")} className="o letter">O</div>
        <div onClick={() => this.props.letterClicked("p")} className="p letter">P</div>
        <div onClick={() => this.props.letterClicked("q")} classNme="q letter">Q</div>
        <div onClick={() => this.props.letterClicked("r")} className="r letter">R</div>
        <div onClick={() => this.props.letterClicked("s")} className="s letter">S</div>
        <div onClick={() => this.props.letterClicked("t")} className="t letter">T</div>
        <div onClick={() => this.props.letterClicked("u")} className="u letter">U</div>
        <div onClick={() => this.props.letterClicked("v")} className="v letter">V</div>
        <div onClick={() => this.props.letterClicked("w")} className="w letter">W</div>
        <div onClick={() => this.props.letterClicked("x")} className="x letter">X</div>
        <div onClick={() => this.props.letterClicked("y")} className="y letter">Y</div>
        <div onClick={() => this.props.letterClicked("z")} className="z letter">Z</div>
      </div>
    );
  }
}

export default AlphabetPicker;
