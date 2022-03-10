import { Form, Input, Button, Switch, Radio, Divider } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    len: '${label} must have 10 numbers',
  },
};
/* eslint-enable no-template-curly-in-string */

const Contact = () => {
  const onFinish = (values) => {
    values.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className="main-content">
      <div>
        <h1>Let's take your smile to the next level.</h1>
        <p>
          Fill up the form below or call us at 1234 5678. Alternatively, send an
          email to admin@tooffairy.com
        </p>
      </div>
      <Divider />
      <Form
        className="contact-form"
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              len: 10,
            },
          ]}
        >
          <Input
            type="number"
            controls={false}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Form.Item name="radio-group" label="How should we reach you?">
          <Radio.Group>
            <Radio value="a">Text Me</Radio>
            <Radio value="b">Call Me</Radio>
            <Radio value="c">Email Me</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="switch"
          label="Are you a new patient?"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item name={['user', 'Message']} label="Message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
