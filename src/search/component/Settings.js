import React from 'react'
import { Dropdown, Menu, Button } from 'antd'
import { SettingFilled } from '@ant-design/icons'
import PropTypes from 'prop-types'

/**
 * @param {() => void} param.logout
 */
export default function Settings({ logout }) {
	return (
		<>
			<Dropdown
				overlay={
					<Menu>
						<Menu.Item onClick={logout}>로그아웃</Menu.Item>
					</Menu>
				}
				trigger={['click']}
				placement='bottomRight'
			>
				<Button shape='circle' icon={<SettingFilled></SettingFilled>}></Button>
			</Dropdown>
		</>
	)
}

Settings.propTypes = {
	logout: PropTypes.func,
}
