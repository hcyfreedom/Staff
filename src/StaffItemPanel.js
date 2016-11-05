/**
 * Created by Acer on 2016/11/3.
 */
//该组件仅用于展示由父组件传入的各个人员条目
import React from 'react';
import StaffItem from './StaffItem.js';
export default class StaffItemPanel extends React.Component{
    render(){
        let items = [];

        if (this.props.items.length==0){
        items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
        }else {
            this.props.items.forEach(item =>{
                items.push(<StaffItem key={item.key} item={item}/>);
            });
        }

        return(
            <table className="itemPanel">
                <thead>
                    <th className="itemTd">姓名</th>
                    <th className="itemTd">年龄</th>
                    <th className="itemTd">身份</th>
                    <th className="itemTd">性别</th>
                    <th className="itemTd">操作</th>
                </thead>
                <tbody>{items}</tbody>
                {/*看ManageSystem.js，传入的items是什么*/}
            </table>
        )
    }
}