import { HappyProvider } from '@ant-design/happy-work-theme';
import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Button, Space, ColorPicker } from 'antd';

const Animation = () => {
  // set mau ban dau va khi thay doi
  const [chagePart1, setChagePart1] = useState('green');
  const [chagePart2, setChagePart2] = useState('red');

  const [chagePart3, setChagePart3] = useState('blue');
  return (
    <div>
      <HappyProvider>
        <Button>helllo</Button>

        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Dashed Button</Button>
      </HappyProvider>
      <div
        style={{
          padding: '20px',
        }}
      >
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'top',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'rung',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'mid',
            },
          ]}
        />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: chagePart1,
          }}
        >
          <HappyProvider>
            <Button type="primary">Firt Love</Button>

            <Space direction="vertical">
              {/* <ColorPicker defaultValue="#1677ff" size="small" /> */}

              <ColorPicker
                defaultValue="#1677ff"
                size="small"
                showText
                value={chagePart1}
                onChange={(color, hex) => {
                  console.log('color', color);
                  console.log('hex', hex);
                  setChagePart1(hex);
                }}
              />
            </Space>
          </HappyProvider>
        </div>
        <div
          id="part-2"
          style={{
            width: '100vw',
            height: '70vh',
            textAlign: 'center',
            background: chagePart2,
          }}
        >
          <HappyProvider>
            <Button type="primary">No Love</Button>
            <Space direction="vertical">
              {/* <ColorPicker defaultValue="#1677ff" size="small" /> */}

              <ColorPicker
                defaultValue="#1677ff"
                size="small"
                showText
                value={chagePart2}
                onChange={(color2, hex2) => {
                  console.log('color', color2);
                  console.log('hex', hex2);
                  setChagePart2(hex2);
                }}
              />
            </Space>
          </HappyProvider>
        </div>
        <div
          id="part-3"
          style={{
            width: '100vw',
            height: '70vh',
            textAlign: 'center',
            background: chagePart3,
          }}
        >
          <HappyProvider>
            <Button type="primary">Last Love</Button>
            <Space direction="vertical">
              {/* <ColorPicker defaultValue="#1677ff" size="small" /> */}

              <ColorPicker
                defaultValue="#1677ff"
                size="small"
                showText
                value={chagePart3}
                onChange={(color, hex) => {
                  console.log('color', color);
                  console.log('hex', hex);
                  setChagePart3(hex);
                }}
              />
            </Space>
          </HappyProvider>
        </div>
      </div>
    </div>
  );
};
export default Animation;
