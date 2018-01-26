import * as moviesSelectors from "../store/movies/reducer";

import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

Counter.defaultProps = {};

Counter.propTypes = {};

function mapStateToProps(state) {
  console.log(moviesSelectors.getMoviesCounter(state));
  return {
    counter: moviesSelectors.getMoviesCounter(state)
  };
}

export default connect(mapStateToProps)(Counter);
