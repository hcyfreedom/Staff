/**
 * Created by Acer on 2016/11/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';
import "../bundle/style.css"

var rawData =  [{info:{descrip:'祥云一中',sex:'男',age:27,name:'顾尚华',id:'老师'}},
                {info:{descrip:'祥云二中',sex:'女',age:30,name:'大作',id:'主任'}},
                {info:{descrip:'祥华中学',sex:'男',age:25,name:'老班',id:'主任'}},
                {info:{descrip:'祥云四中',sex:'女',age:40,name:'小作',id:'主任'}},
                {info:{descrip:'大理一中',sex:'女',age:70,name:'小翠',id:'老师'}},
                {info:{descrip:'下关一中',sex:'男',age:15,name:'色魔',id:'学生'}},
                {info:{descrip:'宾川一中',sex:'男',age:12,name:'小数学',id:'实习'}},
                {info:{descrip:'弥渡一中',sex:'女',age:60,name:'吴帆',id:'老师'}},
                {info:{descrip:'宣威一中',sex:'男',age:55,name:'小地理',id:'老师'}},
                {info:{descrip:'下关一中',sex:'男',age:15,name:'老y',id:'老师'}},
                {info:{descrip:'宾川一中',sex:'男',age:12,name:'鸡嘴',id:'学生'}}
];
class App extends React.Component{
    render(){
        return(
            <div>
                <StaffHeader/>
                <StaffItemPanel items={rawData}/>
                <StaffFooter/>
                <StaffDetail/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,
    document.getElementById('app'));


/*<StaffHeader/>
 <StaffItemPanel items={rawData}/>
 <StaffFooter/>
 <StaffDetail/>*/