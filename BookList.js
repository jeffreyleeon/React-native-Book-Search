'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Component
} = React;

var styles = StyleSheet.create({

});

var FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}
];

class BookList extends Component {
  render() {
    return (
      <View>
      </View>
    )
  }
}

module.exports = BookList;