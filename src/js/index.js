//react 数据交互
import * as React from 'react';
import * as ReactDOM from 'react-dom';
var AddBtn = React.createClass({
    render:()=>{
        return(
            <div>111</div>
        )
    }
})

ReactDOM.render(
    <AddBtn/>,
    document.querySelector('#j-list')
)