'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../components/styled');

var _envelope = require('react-icons-kit/fa/envelope');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alex/Projects/my/ruzzarin.net/pages/index.js?entry';


var people = [{
  name: 'Alex Ruzzarin',
  photos: ['https://placeimg.com/640/480/people', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/tech']
}, {
  name: 'Alan Ruzzarin',
  photos: ['https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/people', 'https://placeimg.com/640/480/tech']
}, {
  name: 'Alex Ruzzarin',
  photos: ['https://placeimg.com/640/480/people', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/tech']
}, {
  name: 'Alan Ruzzarin',
  photos: ['https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/people', 'https://placeimg.com/640/480/tech']
}];

exports.default = function () {
  return [_react2.default.createElement(_styled.Header, { key: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_styled.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'Fam\xEDlia Ruzzarin'), _react2.default.createElement(_styled.HeaderLink, { href: 'http://mail.ruzzarin.net', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_styled.HeaderIcon, { icon: _envelope.envelope, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }))), _react2.default.createElement(_styled.Main, { key: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, people.map(function (person) {
    return _react2.default.createElement(_styled.Person, { key: person.name, __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }, person.photos.map(function (photo) {
      return _react2.default.createElement(_styled.Photo, { key: photo, src: photo, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      });
    }), _react2.default.createElement(_styled.About, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    }, _react2.default.createElement(_styled.Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, person.name), _react2.default.createElement(_styled.Social, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, 'Here')));
  }))];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkhlYWRlckljb24iLCJIZWFkZXJMaW5rIiwiVGl0bGUiLCJNYWluIiwiUGVyc29uIiwiQWJvdXQiLCJOYW1lIiwiU29jaWFsIiwiUGhvdG8iLCJlbnZlbG9wZSIsInBlb3BsZSIsIm5hbWUiLCJwaG90b3MiLCJtYXAiLCJwZXJzb24iLCJwaG90byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDSzs7QUFDUCxBQUFTOzs7Ozs7O0FBRVQsSUFBTTtRQUNKLEFBQ1EsQUFDTjtVQUFRLENBQUEsQUFDTix1Q0FETSxBQUVOLHVDQUxTLEFBQ2IsQUFFVSxBQUdOO0FBTEosQUFDRSxDQUZXO1FBU2IsQUFDUSxBQUNOO1VBQVEsQ0FBQSxBQUNOLHVDQURNLEFBRU4sdUNBYlMsQUFTYixBQUVVLEFBR047QUFMSixBQUNFO1FBT0YsQUFDUSxBQUNOO1VBQVEsQ0FBQSxBQUNOLHVDQURNLEFBRU4sdUNBckJTLEFBaUJiLEFBRVUsQUFHTjtBQUxKLEFBQ0U7UUFPRixBQUNRLEFBQ047VUFBUSxDQUFBLEFBQ04sdUNBRE0sQUFFTix1Q0E3Qk4sQUFBZSxBQXlCYixBQUVVLEFBR04sQUFLTjtBQVZFLEFBQ0U7O2tCQVNXLFlBQUE7MEJBQ2IsQUFBQyxnQ0FBTyxLQUFSLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUMsb0NBQVcsTUFBWixBQUFpQjtnQkFBakI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsb0NBQUQsQUFBWSxBQUFNO2dCQUFsQjtrQkFKZSxBQUNuQixBQUVFLEFBQ0U7QUFBQTt3QkFHSixBQUFDLDhCQUFLLEtBQU4sQUFBVTtnQkFBVjtrQkFBQSxBQUNHO0FBREg7R0FBQSxTQUNHLEFBQU8sSUFBSSxrQkFBQTsyQkFDVixBQUFDLGdDQUFPLEtBQUssT0FBYixBQUFvQjtrQkFBcEI7b0JBQUEsQUFDRztBQURIO0tBQUEsU0FDRyxBQUFPLE9BQVAsQUFBYyxJQUFJLGlCQUFBOzZCQUFTLEFBQUMsK0JBQU0sS0FBUCxBQUFZLE9BQU8sS0FBbkIsQUFBd0I7b0JBQXhCO3NCQUFULEFBQVM7QUFBQTtPQUFBO0FBRDlCLEFBQ0csQUFDRCx3QkFBQSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDOztrQkFBRDtvQkFBQSxBQUFPO0FBQVA7QUFBQSxjQURGLEFBQ0UsQUFBYyxBQUNkLHVCQUFBLEFBQUM7O2tCQUFEO29CQUFBO0FBQUE7QUFBQSxPQUxNLEFBQ1YsQUFFRSxBQUVFO0FBYkssQUFBTSxBQU9uQixBQUNHLEtBUmdCO0FBQXJCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L1Byb2plY3RzL215L3J1enphcmluLm5ldCJ9