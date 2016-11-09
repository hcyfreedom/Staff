/**
 * Created by Acer on 2016/11/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';
import Staff from './STAFF.js';
import "../bundle/style.css";

// var rawData =  [{info:{descrip:'祥云1中',sex:'男',age:57,name:'顾尚华',id:'老师'}},
//                 {info:{descrip:'祥云二中',sex:'女',age:30,name:'大作',id:'主任'}},
//                 {info:{descrip:'祥华中学',sex:'男',age:25,name:'老班',id:'主任'}},
//                 {info:{descrip:'祥云四中',sex:'女',age:40,name:'小作',id:'主任'}},
//                 {info:{descrip:'大理一中',sex:'女',age:70,name:'小翠',id:'老师'}},
//                 {info:{descrip:'下关一中',sex:'男',age:15,name:'色魔',id:'学生'}},
//                 {info:{descrip:'宾川一中',sex:'男',age:12,name:'小数学',id:'实习'}},
//                 {info:{descrip:'弥渡一中',sex:'女',age:60,name:'吴帆',id:'老师'}},
//                 {info:{descrip:'宣威一中',sex:'男',age:55,name:'小地理',id:'老师'}},
//                 {info:{descrip:'下关一中',sex:'男',age:15,name:'老y',id:'老师'}},
//                 {info:{descrip:'宾川一中',sex:'男',age:12,name:'鸡嘴',id:'学生'}}
// ];
class App extends React.Component{
    constructor(){
        super();
        // super(...) 做的事情就是生成一个 this。因为在原型继承中，如果一个类要继承自另一个类，那就得先实例化一次它的父类作为作为子类的原型。如果不做这件事，子类的原型就不能确定，当然也就无法创建 this。
        // 所以如果在 constructor 中没有 super(...) 就企图获取 this 就会报错。
        this.state = {
            staff : new Staff,
            staffDetail: null
        };
    }

    //新增人员
    addStaffItem(item){
        this.setState({
            staff:this.state.staff.addStaffItem(item)
        });
    }
    render(){
        return(
            <div>
                <StaffHeader/>
                {/*<StaffItemPanel items={rawData}/>*/}
                <StaffItemPanel items={this.state.staff.staff}/>
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,
    document.getElementById('app'));


