import {
	Col,
	Descriptions,
	PageHeader,
	Row,
	Space,
	Spin,
	Typography,
} from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useFetchInfo from '../../common/hook/useFetchInfo'
import { actions, Types } from '../state'

export default function User({ match }) {
	const history = useHistory()
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)

	const name = match.params.name
	useEffect(() => {
		dispatch(actions.fetchUser(name))
	}, [dispatch, name])

	const { isFetched, isSlow } = useFetchInfo(Types.FetchUser)

	return (
		<Row justify='center'>
			<Col xs={24} md={20} lg={14}>
				<PageHeader
					title={<Space>사용자 정보 {isSlow && <Spin size='small' />}</Space>}
					onBack={history.goBack}
				>
					{user && (
						<Descriptions layout='vertical' bordered column={1}>
							<Descriptions.Item label='이름'>
								<Typography>{user.name}</Typography>
							</Descriptions.Item>
							<Descriptions.Item label='소속'>
								{user.department}
							</Descriptions.Item>
							<Descriptions.Item label='태그'>{user.tag}</Descriptions.Item>
							<Descriptions.Item label='수정 내역'>수정 내역</Descriptions.Item>
						</Descriptions>
					)}
					{!user && isFetched && (
						<Typography>존재하지 않는 사용자 입니다.</Typography>
					)}
				</PageHeader>
			</Col>
		</Row>
	)
}
