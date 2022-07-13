import React from "react";

const msg: string = "ccc222";
const style1 = {backgroundColor: "blue"};

const arr: string[] = ["ETH", "BTC", "USDT"];

export default function RangeBadge({//第一个花括号是入参
    removed,
    inRange,
}: {//第二个花括号定义入参类型
    removed: boolean | undefined
    inRange: boolean | undefined
}) {
    return (//最后return html格式代码
        <div>
            <h2>{msg}</h2>

            <label htmlFor="balance">金额：</label>
            <input type="text" id="balance" />
            <hr />
            
            <div style={style1}>1111</div>

            <ul>
                {//for循环嵌套
                //map会返回一个新的数组，不会改变原来的数组，forEach不会返回新数组，允许对原数组进行修改。react中只能使用map
                    arr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }

            </ul>
        </div>
        
    )
}
