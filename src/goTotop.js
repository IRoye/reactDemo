import React, {Component} from 'react';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';

class GoTotop extends  Component{

componentDidMount(e){
  //检测浏览器的变化
  var backTop = document.getElementById('back-top');
  window.addEventListener('scroll', function(e){
      if(document.body.scrollTop > 50){
        backTop.style.display="block";
      }else {
        backTop.style.display="none"; 
      }
  })
}

goBack(){
    window.scrollTo(0,0);
}
    render(){
        let rootStyles = {
          textAlign: 'center',
          height: '40px',
          width: '40px',
          lineHeight: '40px',
          borderRadius: '20px',
          backgroundColor: '#A9A9A9',
          position: 'fixed',
          right: '50px',
          bottom: '100px',
          display: 'none',  
        }
        let iconStyles = {
            color: '#FFFAFA',
            verticalAlign:'middle',
            cursor: 'pointer',   
        }
        return(
           <div className="back-top" id="back-top" style={rootStyles}>
               <NavigationArrowUpward id="back-arrow" style={iconStyles} onClick = {this.goBack.bind(this)}/>
           </div>
        );
    }
} 

export default GoTotop