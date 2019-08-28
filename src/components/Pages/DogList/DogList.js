import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./dogList.css";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";

export class DogList extends Component {
  letterClicked = letter => {
    document.querySelector(".z").scrollIntoView();
  };

  render() {
    const listOfDogs = this.props.dogList;

    return (
      <div>
        <header>
          <BackArrow />
          <Logo />
        </header>
        <div className="alphabet-picker">
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.a).offsetTop)
            }
          >
            A
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.b).offsetTop)
            }
          >
            B
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.c).offsetTop)
            }
          >
            C
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.d).offsetTop)
            }
          >
            D
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.e).offsetTop)
            }
          >
            E
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.f).offsetTop)
            }
          >
            F
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.g).offsetTop)
            }
          >
            G
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.h).offsetTop)
            }
          >
            H
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.i).offsetTop)
            }
          >
            I
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.j).offsetTop)
            }
          >
            J
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.k).offsetTop)
            }
          >
            K
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.l).offsetTop)
            }
          >
            L
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.m).offsetTop)
            }
          >
            M
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.n).offsetTop)
            }
          >
            N
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.o).offsetTop)
            }
          >
            O
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.p).offsetTop)
            }
          >
            P
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.q).offsetTop)
            }
          >
            Q
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.r).offsetTop)
            }
          >
            R
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.s).offsetTop)
            }
          >
            S
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.t).offsetTop)
            }
          >
            T
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.u).offsetTop)
            }
          >
            U
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.v).offsetTop)
            }
          >
            V
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.w).offsetTop)
            }
          >
            W
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.x).offsetTop)
            }
          >
            X
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.y).offsetTop)
            }
          >
            Y
          </div>
          <div
            onClick={() =>
              window.scrollTo(0, ReactDOM.findDOMNode(this.refs.z).offsetTop)
            }
          >
            Z
          </div>
        </div>
        <main id="dogList-main">
          {listOfDogs.reduce(
            (alphabetList, dog) => {
              let dog2 = dog;
              dog = (
                <Link to={"/dog-list/" + dog}>
                  {dog.charAt(0).toUpperCase() + dog.slice(1)}
                </Link>
              );
              switch (dog2.toLowerCase().charAt(0)) {
                case "a":
                  alphabetList[0].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "b":
                  alphabetList[1].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "c":
                  alphabetList[2].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "d":
                  alphabetList[3].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "e":
                  alphabetList[4].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "f":
                  alphabetList[5].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "g":
                  alphabetList[6].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "h":
                  alphabetList[7].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "i":
                  alphabetList[8].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "j":
                  alphabetList[9].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "k":
                  alphabetList[10].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "l":
                  alphabetList[11].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "m":
                  alphabetList[12].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "n":
                  alphabetList[13].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "o":
                  alphabetList[14].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "p":
                  alphabetList[15].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "q":
                  alphabetList[16].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "r":
                  alphabetList[17].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "s":
                  alphabetList[18].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "t":
                  alphabetList[19].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "u":
                  alphabetList[20].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "v":
                  alphabetList[21].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "w":
                  alphabetList[22].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "x":
                  alphabetList[23].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "y":
                  alphabetList[24].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                case "z":
                  alphabetList[25].splice(
                    alphabetList.length - 1,
                    0,
                    <div>{dog}</div>
                  );
                  return alphabetList;
                default:
                  return alphabetList;
              }
            },
            [
              [<div className="letter" ref="a">A</div>],
              [<div className="letter" ref="b">B</div>],
              [<div className="letter" ref="c">C</div>],
              [<div className="letter" ref="d">D</div>],
              [<div className="letter" ref="e">E</div>],
              [<div className="letter" ref="f">F</div>],
              [<div className="letter" ref="g">G</div>],
              [<div className="letter" ref="h">H</div>],
              [<div className="letter" ref="i">I</div>],
              [<div className="letter" ref="j">J</div>],
              [<div className="letter" ref="k">K</div>],
              [<div className="letter" ref="l">L</div>],
              [<div className="letter" ref="m">M</div>],
              [<div className="letter" ref="n">N</div>],
              [<div className="letter" ref="o">O</div>],
              [<div className="letter" ref="p">P</div>],
              [<div className="letter" ref="q">Q</div>],
              [<div className="letter" ref="r">R</div>],
              [<div className="letter" ref="s">S</div>],
              [<div className="letter" ref="t">T</div>],
              [<div className="letter" ref="u">U</div>],
              [<div className="letter" ref="v">V</div>],
              [<div className="letter" ref="w">W</div>],
              [<div className="letter" ref="x">X</div>],
              [<div className="letter" ref="y">Y</div>],
              [<div className="letter" ref="z">Z</div>]
            ]
          )}
              
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList
  };
};

export default connect(mapStateToProps)(DogList);
