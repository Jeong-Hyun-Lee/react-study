import { Col, Descriptions, PageHeader, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useFetchInfo from '../../common/hook/useFetchInfo'
import { actions, Types } from '../state'
import Department from './Department'
import TagList from './TagList'
import History from '../../common/components/History'
import FetchLabel from '../components/FetchLabel'

export default function User({ match }) {
	const history = useHistory()
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)
	const userHistory = useSelector(state => state.user.userHistory)

	const name = match.params.name
	useEffect(() => {
		dispatch(actions.fetchUser(name))
		dispatch(actions.fetchUserHistory(name))
	}, [dispatch, name])

	const { isFetched, isSlow } = useFetchInfo(Types.FetchUser)

	return (
		<Row justify='center'>
			<Col xs={24} md={20} lg={14}>
				<PageHeader
					title={
						<FetchLabel
							label='사용자 정보'
							actionType={Types.FetchUser}
						></FetchLabel>
					}
					onBack={history.goBack}
				>
					{user && (
						<Descriptions layout='vertical' bordered column={1}>
							<Descriptions.Item label='이름'>
								<Typography>{user.name}</Typography>
							</Descriptions.Item>
							<Descriptions.Item
								label={
									<FetchLabel
										label='소속'
										actionType={Types.FetchUpdateUser}
										fetchKey='department'
									></FetchLabel>
								}
							>
								<Department />
							</Descriptions.Item>
							<Descriptions.Item
								label={
									<FetchLabel
										label='태그'
										actionType={Types.FetchUpdateUser}
										fetchKey='tag'
									></FetchLabel>
								}
							>
								<TagList />
							</Descriptions.Item>
							<Descriptions.Item
								label={
									<FetchLabel
										label='수정 내역'
										actionType={Types.FetchUpdateUser}
										fetchKey='history'
									></FetchLabel>
								}
							>
								<History items={userHistory} />
							</Descriptions.Item>
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
