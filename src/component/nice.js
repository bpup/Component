import React from 'react'
import {connect} from 'react-redux';
import getUserInfo from '../redux/action/useraction.js'


 class UserInfo extends React.Component {
	
		render() {
			var _this=this;
			console.log(this.props)
			const {userInfo, isLoading, errorMsg} = this.props.userInfo;
			return (
				<div>
					{
						isLoading ? '请求信息中......' :
							(
								errorMsg ? errorMsg :
									<div>
										<p>用户信息：</p>
										<p>用户名：{userInfo.name}</p>
										<p>介绍：{userInfo.intro}</p>
									</div>
							)
					}
					<button onClick={() => _this.props.getUserInfo()}>请求用户信息</button>
				</div>
			)
		}
	}
	
	export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);