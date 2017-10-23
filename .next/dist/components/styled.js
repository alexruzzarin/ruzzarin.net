'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photo = exports.Social = exports.Name = exports.About = exports.Person = exports.Main = exports.Title = exports.HeaderLink = exports.HeaderIcon = exports.Header = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIconsKit = require('react-icons-kit');

var _novaColors = require('nova-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  * {\n    padding: 0;\n    margin: 0;\n  }\n\n  html,\n  body,\n  body > div:first-child,\n  #__next,\n  #__next > div:first-child {\n    display: flex;\n    flex-direction: column;\n    font-size: 10px;\n    height: 100%;\n    min-height: 100%;\n  }\n\n  body {\n    color: ', ';\n    background-color: ', ';\n    font-family: "Courier New", Courier, monospace;\n  }\n\n  a {\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n\n  ::selection {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  * {\n    padding: 0;\n    margin: 0;\n  }\n\n  html,\n  body,\n  body > div:first-child,\n  #__next,\n  #__next > div:first-child {\n    display: flex;\n    flex-direction: column;\n    font-size: 10px;\n    height: 100%;\n    min-height: 100%;\n  }\n\n  body {\n    color: ', ';\n    background-color: ', ';\n    font-family: "Courier New", Courier, monospace;\n  }\n\n  a {\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n\n  ::selection {\n    background-color: ', ';\n    color: ', ';\n  }\n']);

(0, _styledComponents.injectGlobal)(_templateObject, _novaColors.uiGroups.foreground, _novaColors.uiGroups.background, _novaColors.uiGroups.userCurrentState, _novaColors.uiGroups.backgroundShade);

var Header = exports.Header = _styledComponents2.default.header.withConfig({
  displayName: 'styled__Header',
  componentId: 'q1ndac-0'
})(['display:flex;flex:1 0 auto;flex-direction:row;justify-content:space-between;background-color:', ';padding:1.6rem;'], _novaColors.uiGroups.backgroundShade);

var HeaderIcon = exports.HeaderIcon = (0, _reactIconsKit.withBaseIcon)({ size: 22 });

var HeaderLink = exports.HeaderLink = _styledComponents2.default.a.withConfig({
  displayName: 'styled__HeaderLink',
  componentId: 'q1ndac-1'
})(['color:', ';'], _novaColors.syntaxGroups.trivial);

var Title = exports.Title = _styledComponents2.default.h1.withConfig({
  displayName: 'styled__Title',
  componentId: 'q1ndac-2'
})(['color:', ';font-size:2.2rem;font-weight:400;'], _novaColors.uiGroups.userCurrentState);

var Main = exports.Main = _styledComponents2.default.main.withConfig({
  displayName: 'styled__Main',
  componentId: 'q1ndac-3'
})(['flex:auto;overflow-y:auto;']);

var Person = exports.Person = _styledComponents2.default.section.withConfig({
  displayName: 'styled__Person',
  componentId: 'q1ndac-4'
})(['display:flex;height:30rem;']);

var About = exports.About = _styledComponents2.default.div.withConfig({
  displayName: 'styled__About',
  componentId: 'q1ndac-5'
})(['flex:1;flex-basis:25%;width:25%;padding:1.6rem;']);

var Name = exports.Name = _styledComponents2.default.h2.withConfig({
  displayName: 'styled__Name',
  componentId: 'q1ndac-6'
})(['color:', ';font-size:3.5rem;font-weight:400;line-height:1;', ':hover &{color:', ';}'], _novaColors.uiGroups.userCurrentState, Person, _novaColors.syntaxGroups.emphasis);

var Social = exports.Social = _styledComponents2.default.div.withConfig({
  displayName: 'styled__Social',
  componentId: 'q1ndac-7'
})(['']);

var Photo = exports.Photo = _styledComponents2.default.img.withConfig({
  displayName: 'styled__Photo',
  componentId: 'q1ndac-8'
})(['flex:1;flex-basis:25%;width:25%;']);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3R5bGVkLmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImluamVjdEdsb2JhbCIsIndpdGhCYXNlSWNvbiIsInVpR3JvdXBzIiwic3ludGF4R3JvdXBzIiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmQiLCJ1c2VyQ3VycmVudFN0YXRlIiwiYmFja2dyb3VuZFNoYWRlIiwiSGVhZGVyIiwiaGVhZGVyIiwiSGVhZGVySWNvbiIsInNpemUiLCJIZWFkZXJMaW5rIiwiYSIsInRyaXZpYWwiLCJUaXRsZSIsImgxIiwiTWFpbiIsIm1haW4iLCJQZXJzb24iLCJzZWN0aW9uIiwiQWJvdXQiLCJkaXYiLCJOYW1lIiwiaDIiLCJlbXBoYXNpcyIsIlNvY2lhbCIsIlBob3RvIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTOztBQUNULEFBQVMsQUFBVTs7Ozs7O0FBRW5CLHFEQW1CYSxxQkFuQmIsQUFtQnNCLFlBQ0UscUJBcEJ4QixBQW9CaUMsWUFhVCxxQkFqQ3hCLEFBaUNpQyxrQkFDcEIscUJBbENiLEFBa0NzQixBQUl0Qjs7QUFBTyxJQUFNLHFEQUFBLEFBQWdCO2VBQWhCO2VBQUE7QUFBQSxDQUFTLHlIQUtBLHFCQUxmLEFBQU0sQUFLa0IsQUFJL0I7O0FBQU8sSUFBTSxrQ0FBYSxpQ0FBYSxFQUFFLE1BQWxDLEFBQW1CLEFBQWEsQUFBUSxBQUUvQzs7QUFBTyxJQUFNLDZEQUFBLEFBQW9CO2VBQXBCO2VBQUE7QUFBQSxDQUFhLG1CQUNmLHlCQURKLEFBQU0sQUFDVyxBQUd4Qjs7QUFBTyxJQUFNLG1EQUFBLEFBQWU7ZUFBZjtlQUFBO0FBQUEsQ0FBUSxvREFDVixxQkFESixBQUFNLEFBQ08sQUFLcEI7O0FBQU8sSUFBTSxpREFBQSxBQUFjO2VBQWQ7ZUFBQTtBQUFBLENBQU8sR0FBYixBQUtQOztBQUFPLElBQU0scURBQUEsQUFBZ0I7ZUFBaEI7ZUFBQTtBQUFBLENBQVMsR0FBZixBQUtQOztBQUFPLElBQU0sbURBQUEsQUFBZTtlQUFmO2VBQUE7QUFBQSxDQUFRLEdBQWQsQUFPUDs7QUFBTyxJQUFNLGlEQUFBLEFBQWM7ZUFBZDtlQUFBO0FBQUEsQ0FBTywyRkFDVCxxQkFERSxBQUNPLGtCQURQLEFBTVQsUUFDUyx5QkFQTixBQUFNLEFBT2EsQUFJMUI7O0FBQU8sSUFBTSxxREFBQSxBQUFnQjtlQUFoQjtlQUFBO0FBQUEsQ0FBUyxHQUFmLEFBRVA7O0FBQU8sSUFBTSxtREFBQSxBQUFlO2VBQWY7ZUFBQTtBQUFBLENBQVEsR0FBZCIsImZpbGUiOiJzdHlsZWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvUHJvamVjdHMvbXkvcnV6emFyaW4ubmV0In0=