import React, { Component } from "react";
import defaultBcg from "../images/room-11.jpeg";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this);
    this.state = {
      slug: this.props.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className='error'>
          <h3>no such room could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <Hero hero='roomsHero'>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default withRouter(SingleRoom);
// SingleRoom.contextType = RoomContext;
