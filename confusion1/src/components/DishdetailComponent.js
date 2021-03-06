import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {

  renderComments(comments) {
    if (comments == null) {
      return (<div></div>);
    }

    const cmnts = comments.map(eachcomment => {
      return (
        <li key={eachcomment.id}>
          <p>{eachcomment.comment}</p>
          <p>--{eachcomment.author},&nbsp;{new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(eachcomment.date))}
          </p>
        </li>
      )
    });
    return (
      <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          {cmnts}
        </ul>
      </div>
    )
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

  // final render‚
  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return (<div></div>)
    }
    const dishItem = this.renderDish(dish);
    const commentItem = this.renderComments(dish.comments);
    return (
      <div className='row'>
        {dishItem}
        {commentItem}
      </div>
    )
  }

}

export default DishdetailComponent