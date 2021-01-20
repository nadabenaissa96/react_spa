import {Component } from "react";
import photo1 from './photo/photo1.jpg';
import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.jpg';
import photo4 from './photo/photo4.jpg';
import photo5 from './photo/photo5.jpg';
import photo6 from './photo/photo6.jpg';
class Galaries extends Component {
    state = {
        index: 0, 
        picList: [photo1, photo2, photo3, photo4, photo5, photo6]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img alt="error" src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            
            <button class ="btn_galeries" style={{"margin-left":"25%","margin-right":"30%", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
            <button class ="btn_galeries" style={{"margin-left":"25%","margin-right":"30%","fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
          </div>
        );
      }

}

export default Galaries;