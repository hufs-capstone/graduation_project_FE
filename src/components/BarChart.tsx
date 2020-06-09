import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
} from '@devexpress/dx-react-chart-bootstrap4';
import { Animation } from '@devexpress/dx-react-chart';

function Barchart({data}:any){

    const chartData = [
        {
            ingredient: '변환 전',
            amount: 100,
        },
        {
            ingredient: '변환 후',
            amount: data.kcal !== 0 ? data.kcal2/data.kcal * 100: 0,
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
                    valueField="amount"
                    argumentField="ingredient"
                    color="#CEECF5"
                />
                <Animation />
                <Title text="해당 식품의 변환된 적정량" />
            </Chart>

        </div>

    );
}

export default Barchart;