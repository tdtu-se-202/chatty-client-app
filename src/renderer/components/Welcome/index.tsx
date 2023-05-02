import { Heading } from 'renderer/components'
import { Col, Row } from 'antd'

export function Welcome() {
  return (
    <Row align="bottom" gutter={[16, 24]}>
      <Col span={24}>
        <Heading>Hi, there! 👋</Heading>
      </Col>
      <Col span={24}>
        <h2>Welcome to Chatty App! ✨</h2>
      </Col>
    </Row>
  )
}
