import React from "react";

export class ListExample extends React.PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>price: {price}won</div>);
    return (
      <div>
        <label>price list</label>
        {prices}
      </div>
    );
  }
}

