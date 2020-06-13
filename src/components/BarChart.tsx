import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const Root = (props: any) => (
    <Legend.Root
      {...props}
      className="m-auto flex-row"
    />
  );

function Barchart({data}:any){

    const chartData = [
        {
            ingredient: '적정량',
            before: 100,
            after: data.kcal !== 0 ? data.kcal2/data.kcal * 100: 0,
        }
    ];
    return (
        <div>
            <Chart
                data={chartData}
            >
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                    name= "변환 전"
                    valueField="before"
                    argumentField="ingredient"
                    color="#CEECF5"
                />
                <BarSeries
                    name= "변환 후"
                    valueField="after"
                    argumentField="ingredient"
                    color="#00BFFF"
                />
                
                <Animation />
                <Legend position="bottom" rootComponent={Root} />
                <Title text="해당 식품의 변환된 적정량" />
                <Stack/>
            </Chart>
        </div>

    );
}

export default Barchart;