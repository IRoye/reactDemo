import React,{Component} from 'react';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
export default class Fold extends Component {

    componentDidMount() {
        // 鼠标滑过， 显示箭头
        let content = document.getElementsByClassName('content')[0];
        let arrowFiled = document.getElementsByClassName('arrowFiled')[0];
        let arrows = document.getElementsByClassName('arrows')[0];
        let summary = document.getElementsByClassName('summary')[0];
        // 初始状态没有展开
        let status = false;
        content.onmouseenter = function(){

            arrowFiled.style.display = 'inline-block';

        }
        content.onmouseleave = function(){

             arrowFiled.style.display = 'none';

        }
        content.onclick = function(){
            // 展开
            if(status){
                summary.style.display = 'none';
                status = false;
                //旋转
                arrows.style.transform = 'rotate(180deg)';

            }else{
                summary.style.display = 'block';
                status = true;
                //旋转
                arrows.style.transform = 'rotate(0deg)';

            }
        }

    }

    getStyles(){
        return{
            root:{
                height: '100vh',
                textAlign: 'left',
            },
            content: {
                position:'relative',
                color: '#696969',
                margin: '1rem auto',
                borderTop : '1px solid #ddd', //feng的readHub定义border使用一个div来定义的？？？
                borderBottom : '1px solid #ddd',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                width: '60%',
                cursor: 'pointer',
            },
            time:{
                display: 'inline-block',
                fontSize: '.5rem',
                fontWeight: '300', //定义粗细， 400是normal ， 700是bold
                marginLeft: '.5rem',
                verticalAlign: 'middle',
            }, 
            arrow: {           
                position: 'absolute',
                display: 'none',
                color: '#808080',
                right: '1rem',
                lineHeight:'40px',
                width: '40px',
                height: '40px',  
                top: '2rem',
                fontSize: '1rem',
                fontWeight: '200',
            }
        }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="class-name" style={styles.root}>
                <div className='content' style={styles.content}>
                    <h3>
                        <div className='main'>
                            ISS 直播 SpaceX「龙」 飞船对接画面
                            <div className='time' style={styles.time}>
                                7 小时前
                            </div>
                            <div className='arrowFiled' style={styles.arrow}>
                                <HardwareKeyboardArrowDown  className='arrows'  style={{
                                    color: '#808080',
                                    width: '40px',
                                    height: '40px',
                                    fontWeight : '800',
                                }}/>
                            </div>
                        </div>
                    </h3>
                    {/* h3 标题下的内容 */}
                    <div className='summary' style={{
                        fontSize: '.85rem',
                        fontWeight: '300',
                        width: '80%',
                        marginTop: '1rem',
                        display: 'none',
                    }}>
                        对于未来将统一的国内安卓系统推送标准，并非是类似于谷歌 GCM/FCM 的模式，消息投递的方式与苹果 iOS 在原理上类似，服务器推送的消息到达设备之后将会直接展现，而不必唤醒应用。
                    </div>
                    
                </div>
            </div>
        );
    }
}