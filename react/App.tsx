import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
class HelloWorld extends React.Component {
    // render() {
    //       return (
    //               <div>
    //                 Hello, React!
    //               </div>
    //             )
    //     }
    render() { return "FOO" }
};
 
ReactDOM.render(<HelloWorld />, document.getElementById('mavroot'));

