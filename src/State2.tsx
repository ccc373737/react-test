import React, { useEffect, useCallback, useState } from 'react'
import "antd/dist/antd.css";
import { Button,List,Input,Radio,RadioChangeEvent } from 'antd';
//文件名为index可省略（./state/index）
import store from './state';
import { useAppDispatch } from './state/hooks'
import {Field, selectCurrency, typeInput, setRecipient} from "./state/mint2/action";

export default function State2() {    
    //const dispatch = useAppDispatch();
    const onChangeRa = useCallback((e: RadioChangeEvent) => {
        // const action = {
        //     type: "change-radio",
        //     value: e.target.value
        // }
        // store.dispatch(action);
        // handle the click event
      }, []);

    console.log(store.getState())

    const unsubscribe = store.subscribe(() =>
        //console.log(store.getState())
        console.log(111)
    )

    //store.dispatch(setRecipient({ recipient:"reciccc"}))
    store.dispatch(typeInput({ field: Field.INPUT, typedValue: "2132csakldj" }))
    store.dispatch(selectCurrency({ field: Field.OUTPUT, currencyId: "opopopopppop" }))

      //console.log(store.getState().mint.recipient)

    return (
        
        <div>
            <Button type="primary">Primary Button</Button>

            <Radio.Group onChange={onChangeRa}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
            <hr/>
        </div>
    )
}
