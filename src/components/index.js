import {Component} from "react"
import './index.css'
class ReviewsCarousel extends Component{
    state={index:0}
    onIncrement=()=>{
            const{reviewsList}=this.props
             const Length=reviewsList.length
            this.setState(prevState=>({index:Math.min(prevState.index+1,Length-1)}))
        }
    onDecrement=()=>{
        this.setState(prevState=>({index:Math.max(prevState.index-1,0)}))
    }
    render(){
        const{reviewsList}=this.props
        const{index}=this.state
        const SelectedList=reviewsList[index]
        return(
            <div className="block-review">
                <h1>Reviews</h1>
                <div className="items">
                        <img className="icon" src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left" onClick={this.onDecrement}/>
                        <div className="details">
                            <img src={SelectedList.imgUrl}alt={SelectedList.username}/>
                            <p>{SelectedList.username}</p>
                            <p>{SelectedList.comapnyName}</p>
                            <p>{SelectedList.description}</p>
                        </div>
                        <img  className="icon"src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right" onClick={this.onIncrement}/>
                </div>
            </div>
        )
    }
}
export default ReviewsCarousel