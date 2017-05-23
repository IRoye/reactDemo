import React, {Component} from 'react';

export default class Linkage extends Component {

    getStyles() {

        return {
            root: {
                margin: '1rem  auto',
                height: '100vh',
                textAlign: 'center'
            }
        }

    }
    //设置数据
    getDatas() {
        return {
            //   数组的形式
            provinces: [
                {
                    code: '0',
                    name: '请选择'
                }, {
                    code: '1',
                    name: '北京'
                },
                {
                    code: '2',
                    name: '天津',
                },{
                    code: '3',
                    name: '河北'
                }
            ],
            citys: {
                0: ['请选择'],
                1: [
                    '朝阳区',
                    '海淀',
                    '东城区',
                    '西城区',
                    '房山区',
                    '其他'
                ],
                2: ['天津'],
                3: ['沧州', '石家庄', '秦皇岛', '其他']
            }
        }
    }
    
    // 渲染完成之后设置数据
    componentDidMount() {

     let provinces = document.getElementById('provinces');

     let citys = document.getElementById('citys');

     //首先要把省级的加载进去
     let provinceData  = this.getDatas().provinces;
     console.log('省数据：', this.getDatas().provinces);
     let provinceDataStr = '';
     // 创建子元素
     for(let i = 0; i < provinceData.length; i++){
           provinceDataStr += '<option value='+ provinceData[i].code +'>'+ provinceData[i].name +'</option>'
     }
     
     console.log('子数据:', provinceDataStr);
     //组成完整的字符串一次性赋值
     provinces.innerHTML = provinceDataStr;

    }


   change(){
    
    //点击某个选项之后, 生成市的数据
    let provinces = document.getElementById('provinces');
    let citys = document.getElementById('citys');
    //拿到索引的项
    var index= provinces.selectedIndex;

    let code = provinces.options[index].value;
    //获取数据中的code 值
    let cityData  = this.getDatas().citys;
    let sss = '';
    for(let singeData in cityData){
       if(code === singeData){
           // 获取下面的数据
           console.log('数据：', cityData[singeData])
           for(let citys in cityData[singeData]){
               sss += '<option>'+cityData[singeData][citys]+'</option>';
           }
           break;
       }     
    }
    citys.innerHTML = sss;
   }
    render() {
        let styles = this.getStyles();
        return (
            <div style={styles.root}>
                省级：
                <select id="provinces" onChange={this.change.bind(this)}></select>
                <br/>
                市级：
                <select id='citys'>
                </select>
            </div>
        );
    }
}