/**
 * Created by Acer on 2016/11/3.
 */
//每个具体人员的基本信息组件，用于展示人员的基本信息并接收用户的删除和点击详情的操作
//在StaffItemPanel中被引用
import React from 'react';
export default class StaffItem extends React.Component{

    render(){
        return(
            <tr style={{'cursor':'pointer'}}>
                <td className="itemTd">{this.props.item.info.name}</td>
                <td className="itemTd">{this.props.item.info.age}</td>
                <td className="itemTd">{this.props.item.info.id}</td>
                <td className="itemTd">{this.props.item.info.sex}</td>
                <td className="itemTd">
                    <a className="itemBtn">删除</a>
                    <a className="itemBtn">详情</a>
                </td>
            </tr>
        );
    }
}