/**
 * Created by Acer on 2016/11/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class StaffFooter extends React.Component{
    handlerAddClick(evt){
        evt.preventDefault();
        // 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。
        let item = {};
        let addForm = ReactDOM.findDOMNode(this.refs.addForm);
        let sex = addForm.querySelector('#staffAddSex');
        let id =addForm.querySelector('#staffAddId');

        item.name = addForm.querySelector('#staffAddName').value.trim();
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[sex.selectedIndex].value;


        // 表单验证，确保信息不为空
        if (item.name==''||item.age==''||item.descrip==''){
            let tips =ReactDOM.findDOMNode(this.refs.tipsUnDone);
            tips.style.display='block';
            setTimeout(function () {
                tips.style.display='none';
            },1000);
            return;
        }

        //非负整数
        let numReg = /^\d+$/;//非负整数
        if (!numReg.test(item.age)||parseInt(item.age)>150){
            let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            },1000);
            return;
        }

        this.props.addStaffItem(item);//这一行代码，就是调用了ManageSystem通过prop属性传入的回调函数
        addForm.reset();

        //此处应在返回添加成功信息后确认
        let tips = ReactDOM.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        },1000);

    }




        render(){
            return(
                <div>
                    <h4 style={{'textAlign':'center'}}>人员新增</h4>
                    <hr/>
                    <form ref='addForm' className="addForm">
                        <div>
                            <label for='staffAddName' style={{'display':'block'}}>姓名</label>
                            <input ref='addName' id='staffAddName' type="text" placeholder="your name..."/>
                        </div>
                        <div>
                            <label for='staffAddAge' style={{'display':'block'}}>年龄</label>
                            <input ref='addAge' id='staffAddAge' type="text" placeholder="your Age(0-150)..."/>
                        </div>
                        <div>
                            <label for='staffAddSex' style={{'display':'block'}}>性别</label>
                            <select ref='addSex' id='staffAddSex'>
                                <option value='男'>男</option>
                                <option value='女'>女</option>
                            </select>
                        </div>
                        <div>
                            <label for='staffAddId' style={{'display':'block'}}>身份</label>
                            <select ref='addId' id='staffAddId'>
                                <option value='主任'>主任</option>
                                <option value='老师'>老师</option>
                                <option value='学生'>学生</option>
                                <option value='实习'>实习</option>
                            </select>
                        </div>
                        <div>
                            <label for='staffAddDescrip' style={{'display':'block'}}>个人描述</label>
                            <textarea ref='addDescrip' id='staffAddDescrip' type="text">

                            </textarea>
                        </div>
                        <p ref='tips' className="tips">提交成功</p>
                        <p ref='tipsUnDone' className="tips">请录入完整的人员信息</p>
                        <p ref='tipsUnAge' className="tips">请录入正确的年龄</p>
                        <div>
                            <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                        </div>
                    </form>
                </div>
            )
        }

}