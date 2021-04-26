import React from 'react'
import { Dropdown, Menu, Button } from 'antd'
import { SettingFilled } from '@ant-design/icons'
import PropTypes from 'prop-types'
// material ui
import Button2 from '@material-ui/core/Button'
import SettingsIcon from '@material-ui/icons/Settings'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

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
			{/* <Button2
				variant='outlined'
				style={{
					borderRadius: 30,
					minWidth: 0,
					width: 36,
				}}
			>
				<SettingsIcon></SettingsIcon>
			</Button2> */}
		</>
	)
}

Settings.propTypes = {
	logout: PropTypes.func,
}
