import React, {Component} from 'react';

import {changeModal} from '../actions';
import {connect} from 'react-redux';

class FileInput extends Component {

    //声明一个fileReader
    constructor(props) {
        super(props);
        var reader = new FileReader();
        this.state = {
            reader: reader
        }
    }
    componentDidMount() {
        this.state.reader.onload = function (event) {
            document
                .getElementById('uploadPreview')
                .src = event.target.result;
        }

    }

    // 第二次如果还是选择同样的图片的话， 这个方法就不再执行了
    change() {
        //IE 浏览器文件上传
        if (document.getElementById("fileData").files.length === 0) {
            return;
        }
        let node = document.getElementById("fileData");
        var oFile = document
            .getElementById("fileData")
            .files[0];
        console.log('类型：', oFile);
        if (this.filters(oFile)){
            this.state.reader.readAsDataURL(oFile);
            //重新创建一个title的值， 保证选择相同文件的时候也能触发onChange 事件
            node.value = '';
        } else {
            return false;
        }
    }

    // 限制图片上传的格式： 传递的就是 var oFile = document.getElementById("fileData").files[0];
    filters(files) {
        //1. 限制大小 ；2. 限制图片的格式
        if (files.type.indexOf('image') != -1) {
            if (files.size > 512000) {
                console.log('图片', files.name, '应该小于500k');
                this.props.dispatch(changeModal('图片' + files.name + '应该小于500k', 'false'));
                return false;
            }
            this.props.dispatch(changeModal('图片' + files.name + '上传成功', 'true'));
        }else{
            //弹窗要不要用redux
            console.log('文件' + files.name + '格式不是图片');
            this.props.dispatch(changeModal('文件' + files.name + '不是图片', 'false'));
            return false;
        }
        return true;
    }

    getFileSize(file) {
        let fileSize = 0;
        //如果是IE 的话：
    }

    getStyles() {
        return {
            root: {
                margin: '1rem  auto',
                height: '100vh',
                textAlign: 'center'
            }
        }
    }

    render() {

        const styles = this.getStyles();

        return (
            <div className="class-name" style={styles.root}>
                <div>
                    <img
                        id='uploadPreview'
                        src="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Csvg%20width%3D%22153%22%20height%3D%22153%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%3Cg%3E%0A%20%20%3Ctitle%3ENo%20image%3C/title%3E%0A%20%20%3Crect%20id%3D%22externRect%22%20height%3D%22150%22%20width%3D%22150%22%20y%3D%221.5%22%20x%3D%221.500024%22%20stroke-width%3D%223%22%20stroke%3D%22%23666666%22%20fill%3D%22%23e1e1e1%22/%3E%0A%20%20%3Ctext%20transform%3D%22matrix%286.66667%2C%200%2C%200%2C%206.66667%2C%20-960.5%2C%20-1099.33%29%22%20xml%3Aspace%3D%22preserve%22%20text-anchor%3D%22middle%22%20font-family%3D%22Fantasy%22%20font-size%3D%2214%22%20id%3D%22questionMark%22%20y%3D%22181.249569%22%20x%3D%22155.549819%22%20stroke-width%3D%220%22%20stroke%3D%22%23666666%22%20fill%3D%22%23000000%22%3E%3F%3C/text%3E%0A%20%3C/g%3E%0A%3C/svg%3E"
                        alt="预览图片"
                        style={{
                        width: '200px',
                        height: '160px',
                        margin: '20px 10px'
                    }}/>
                </div>

                <form action="" id='fileUpload' encType='multipart/form-data'>
                    <label
                        htmlFor="fileData"
                        style={{
                        display: 'inline-block',
                        border: '1px solid #00a5e0',
                        minWidth: '50px',
                        borderRadius: '4px',
                        outline: '0 none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        lineHeight: '28px',
                        padding: '0 15px',
                        backgroundColor: '#00a5e0',
                        color: '#fff',
                        margin: '30px 10px'
                    }}>
                        上传文件
                    </label>
                    {/* clip 是用来裁剪元素的 */}
                    <input
                        type="file"
                        name='xFile'
                        style={{
                        position: 'absolute',
                        clip: 'rect(1px 1px 1px 1px)'
                    }}
                        accept="image/png, image/jpeg, image/gif, image/jpg"
                        id='fileData'
                        onChange={this
                        .change
                        .bind(this)}/><br/>
                    <span>
                        {/* 这里显示图片的信息 */}
                    </span>
                    <input type="button" id='submit' value='execute'/>
                    <br/>
                </form>
            </div>
        );
    }
}

FileInput = connect()(FileInput)
export default FileInput;