import React, { Component } from "react";
import KanbanBoard from "../Store/KandanBoard/KandanBoard";
export default class ScrumComponent extends Component {
  render() {
    return (
      <div>
        <KanbanBoard />
      </div>
    );
  }
}
