import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comments }) {
  if (comments == null) {
    return (<div></div>);
  }

  const cmnts = comments.map(eachcomment => {
    return (
      <li key={eachcomment.id}>
        <p>{eachcomment.comment}</p>
        <p>--{eachcomment.author},&nbsp;{new Intl.DateTimeFormat('en-US',
          { year: 'numeric', month: 'short', day: '2-digit' })
          .format(new Date(Date.parse(eachcomment.date)))}
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

function RenderDish({ dish }) {
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
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className='row'>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
      </div>
    )
  }
  else {
    return (<div></div>)
  }
}

export default DishDetail;