import React, {useState} from 'react'
import { Button, Form, Input, message, Space, Row, Col } from 'antd';
import axios from 'axios'
import Metadata from './Metadata';

const LinkFrom = () => {
    const [loading, setLoading] = useState(false)
    const [metaData, setMetaData] = useState({})
    const [error, setError] = useState(false)
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true)
    const {data} = await axios.post(`${process.env.REACT_APP_API}`, values)
    if(!data.error) {
      setMetaData(data.result)
    } else {
      setError(true)
    }
    setLoading(false)
  };
  console.log(metaData);

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row>
      <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12, offset: 6  }}
          lg={{ span: 12, offset: 6  }}
          xl={{ span: 12, offset: 6  }}
          xxl={{ span: 12, offset: 6  }}
        >
      <Form.Item
        name="url"
        label="URL"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
            warningOnly: true,
          },
         
        ]}
      >
        <Input placeholder="Check your Website" onChange={handleChange} />
      </Form.Item>
      </Col>
      </Row>
      <Row>
      <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12, offset: 6  }}
          lg={{ span: 12, offset: 6  }}
          xl={{ span: 12, offset: 6  }}
          xxl={{ span: 12, offset: 6  }}
        >
        
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            {loading ? "Fetching Metadata.." : "Get Metadata"}
          </Button>
          
        </Space>
      </Form.Item>
      </Col>
      </Row>
    </Form>
    {Object.keys(metaData).length > 0 && <Metadata data={metaData} loading={loading} error={error} />}
    
    </>
  )
}

export default LinkFrom