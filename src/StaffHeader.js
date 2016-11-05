/**
 * Created by Acer on 2016/11/3.
 */
// 这个组件，主要提供搜索框、人员筛选下拉框、排列方式下拉框
import React from 'react';
export default class StaffHeader extends React.Component{

    render(){
        return(
            <div>
                <h3 style={{'textAlign':'center'}}>人员管理系统</h3>
                <table className="optHeader">
                    <tbody>
                    <tr>
                        <td className="headerTd"><input type="text" placeholder="Search..."/></td>
                        <td className="headerTd">
                            <label for='idSelect'>人员筛选</label>
                            <select id='idSelect'>
                                <option value='0'>全部</option>
                                <option value='1'>主任</option>
                                <option value='2'>老师</option>
                                <option value='3'>学生</option>
                                <option value='4'>实习</option>
                            </select>
                        </td>
                        <td>
                            <label for='orderSelect'>排列方式</label>
                            <select id='orderSelect'>
                                <option value='0'>身份</option>
                                <option value='1'>年龄升</option>
                                <option value='2'>年龄降</option>
                            </select>

                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}