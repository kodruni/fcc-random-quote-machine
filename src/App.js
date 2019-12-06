import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh'
  }
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
    .then(data => data.json())
    //assignNewQuoteIndex function is not called, just passed in = this. just takes in the function, not the result
    //don't forget to bind it (see above)
    .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  //ES6 getter function
  //if this state quote has no length(or has 0 length), OR if this selectedIndexQuote is not an integer
  //just return undefined
  //if not undefined -> we can return selected quote index
  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <Grid className ={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          {/* previously used get() now allows us to call that selectedQuote function as a variable */}
          {/* if this selectedQuote not undefined (if it exists), let's render this.selectedQuote.quote, else render nothing   */}
          {/* use template literals to interpolate strings */}
          {/* { this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : '' }
          <Button buttonDisplayName="Next Quote" clickHandler={this.assignNewQuoteIndex}/> */}
          {/* extract into their own components --> see (logic moved there) QuoteMachine component --> then inlcude it here */}
          {/* like so */}
          {
            this.selectedQuote ? 
            <QuoteMachine  selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/> :
            null
          }
        </Grid>
      </Grid>
      );
  }
}

export default withStyles(styles)(App);
