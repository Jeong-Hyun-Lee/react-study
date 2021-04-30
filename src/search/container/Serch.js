import React, { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import Settings from '../component/Settings';
import SearchInput from '../component/SearchInput';
import History from '../../common/components/History';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

export default function Search() {
	const history = useSelector(state => state.search.history);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.fetchAllHistory());
	}, [dispatch]);
	return (
		<>
			<Row justify='end' style={{ padding: 20 }}>
				<Col>
					<Settings logout={() => {}} />
				</Col>
			</Row>
			<Row justify='center' style={{ marginTop: 100 }}>
				<Col>
					<Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
						AutoComplete
					</Typography.Title>
				</Col>
			</Row>
			<Row justify='center' style={{ marginTop: 50 }}>
				<Col xs={20} md={16} lg={12}>
					<SearchInput></SearchInput>
				</Col>
			</Row>
			<Row justify='center' style={{ marginTop: 50 }}>
				<Col xs={20} md={16} lg={12}>
					<History items={history}></History>
				</Col>
			</Row>
		</>
	);
}
