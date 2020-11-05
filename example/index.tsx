import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CustomTree from '../dist';
// import CustomTree from '../src';
import data from './data';

const ExampleIndexHtml: React.FC<{}> = (props: any) => {
  const ref = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      // ref.current.update();
    }, 3000);
  }, [])

  function onLoadData() {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            value: '二级标题',
            sub: [
              {
                value: '三级标题'
              }
            ]
          }
        ]);
      }, 3000);
    });
  }
  
  return (
    <div>
      <p>默认状态</p>
      <div style={{ width: '500px' }}>
        <CustomTree
          showLine
          data={data}
          ref={ref}
          loadData={onLoadData}
          hoverBgColor={false}
          itemStyle={{ padding: '0px' }}
          onChange={(data) => console.log(data)}
        />
        <CustomTree
          lineColor="red"
          showLine
          data={data}
          ref={ref}
          hoverBlock="block"
          loadData={onLoadData}
          onChange={(data) => console.log(data)}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<ExampleIndexHtml />, document.querySelector('#custom-tree'));
