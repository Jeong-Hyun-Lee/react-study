import { Col, Form, Row, Typography } from 'antd';
import React from 'react';

/**
 *
 * @param {object} param
 * @param {() => void} onFinish
 * @param {import('react').ReactNode} param.children
 *
 * @returns
 */
export default function AuthLayout({ children, onFinish }) {
	return (
		<>
			<Row justify='center' style={{ marginTop: 100 }}>
				<Col>
					<Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
						찾아야한다.
					</Typography.Title>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Form
						name='normal_login'
						initialValues={{ remember: true }}
						style={{ width: 300, marginTop: 50 }}
						onFinish={onFinish}
					>
						{children}
					</Form>
				</Col>
			</Row>
		</>
	);
}
