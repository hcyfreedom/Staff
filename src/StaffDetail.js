/**
 * Created by Acer on 2016/11/3.
 */
import React from 'react';
export default class StaffDetail extends React.Component{

    render(){
        let staffDetail = this.props.staffDetail;
        if (!staffDetail)
            return null;

        return(
            <div className="overLay">
                <h4 style={{'textAlign':'center'}}>
                    点击“完成”保存修改，点击“关闭”放弃未保存修改并推出
                </h4>
                <hr/>
                <table ref="editTabel">
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <td><input id='staffEitName' type="text" defaultValue={staffDetail.info.name}/></td>
                        </tr>
                        <tr>
                            <th>年龄</th>
                            <td><input id='staffEitAge' type="text" defaultValue={staffDetail.info.age}/></td>
                        </tr>
                        <tr>
                            <th>性别</th>
                            <td>
                                <select rel='selSex' id='staffEditSex'>
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>身份</th>
                            <td>
                                <select ref="selId" id='staffEditId'>
                                    <option value="主任">主任</option>
                                    <option value="老师">老师</option>
                                    <option value="学生">学生</option>
                                    <option value="实习">实习</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>个人描述</th>
                            <td>
                                <textarea id='staffEditDescrip' type="text" defaultValue={staffDetail.info.descrip}>

                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p ref='Dtips' className='tips'>修改成功</p>
                <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
                <button>完成</button>
                <button>关闭</button>
            </div>
        )
    }
}