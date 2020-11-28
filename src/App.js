import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Counter from "./Components/counter";
import Rest from "./Components/Rest";
class App extends React.Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  increment = (currentIndex) => {
    const { counters } = this.state;
    const copied = [...counters];
    copied[currentIndex].value += 1;

    this.setState({ counters: copied });
  };

  decrement = (currentIndex) => {
    const { counters } = this.state;
    const copied = [...counters];
    copied[currentIndex].value -= 1;
    this.setState({ counters: copied });
  };

  reset = () => {
    const { counters } = this.state;
    const ini = counters.map((counter) => ({ id: counter.id, value: 0 }));
    this.setState({counters: ini})
  };

  render() {
    const { counters } = this.state;
    return (
      <div className="App">
        <Header />
        <Rest reset={this.reset} />
        {counters.map((counter) => (
          <Counter
            counter={counter.value}
            key={counter.id}
            increment={this.increment}
            decrement={this.decrement}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
