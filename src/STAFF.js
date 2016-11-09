/**
 * Created by Acer on 2016/11/8.
 */
//单独建一个STAFF类来完成业务逻辑，包括排序、筛选、新增、删除、修改、以及关键字搜索等
//STAFF.js中创建两个类。为了实现更好的“封装性”，将每一个人员单独作为一个staffItem类，
// 该对象中包含该人员的所有信息，在本应用中包含他的姓名、年龄、性别、身份、个人描述等，
// 实践中我们可以加入类似入职时间，福利薪酬，个人经历等信息。
// 另外还有一个key值，它是一个类变量，这个值是唯一标识该staffItem用的。
//把ManageSystem.js中伪造好的数据也搬过来。
//在STAFF类的构造函数中，创建了2个实例变量，一个是allStaff，其中存储所有staffItem；
// 一个是staff，它是最终需要给React展示的数据，是经过用户筛选操作、关键字搜索操作之后得到的人员数组。
// 之所以这么设计变量也是为了后面的筛选、搜索等功能。


class staffItem{
    constructor(item){
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age||0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip||'';
        this.key = ++staffItem.key;
    }
}
staffItem.key = 0;

export default class STAFF{

    constructor(){
        this.allStaff = [
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10]),
        ];
        this.staff = this.allStaff;
    }
    //增
    addStaffItem(item){
        let newItem = new staffItem(item);
        this.allStaff.push(newItem);
        this.staff = this.allStaff;
        return this;
    }
}
STAFF.rawData = [{info:{descrip:'祥云1中',sex:'男',age:57,name:'顾尚华',id:'老师'}},
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