import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    //const context = this.context;
    const { featuredRooms: rooms } = this.context;
    
    return <div> from featured rooms</div>;
  }
}
