import React from 'react'
import "antd/dist/antd.css";
import { Button,List,Input } from 'antd';
//文件名为index可省略（./state/index）
import store from './state';

const data : string[]= [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
export default function State1() {

    return (
        <div>
            <Button type="primary">Primary Button</Button>
            <Input placeholder="111" size="small"/>

            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />

            {/* <h2>{store.getState().mint.independentField}</h2> */}
        </div>
    )
}
