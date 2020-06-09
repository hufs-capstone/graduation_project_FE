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

const Root = (props:any) => (
    <Legend.Root
      {...props}
      className="m-auto flex-row"
    />
  );

function Barchart({data}:any){

    const chartData = [
        {
            ingredient: '칼로리',
            before: 100,
            after: data.kcal !== 0 ? data.kcal2/data.kcal * 100: 0,
        },
        {
            ingredient: '탄수화물',
            before: 100,
            after: data.carbs !== 0 ? data.carbs2/data.carbs * 100: 0,
        },
        {
            ingredient: '단백질',
            before: 100,
            after: data.protein !== 0 ? data.protein2/data.protein * 100: 0,
        },
        {
            ingredient: '지방',
            before: 100,
            after: data.fat !== 0 ? data.fat2/data.fat * 100: 0,
        },
        {
            ingredient: '나트륨',
            before: 100,
            after: data.na !== 0 ? data.na2/data.na * 100: 0,
        },
        {
            ingredient: '콜레스테롤',
            before: 100,
            after: data.chol !== 0 ? data.chol2/data.chol * 100: 0,
        },
        {
            ingredient: '당류',
            before: 100,
            after: data.sugar !== 0 ? data.sugar2/data.sugar * 100: 0,
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
                    name="Before"
                    valueField="before"
                    argumentField="ingredient"
                    color="#ffd700"
                />
                <BarSeries
                    name="After"
                    valueField="after"
                    argumentField="ingredient"
                    color="#cd7f32"
                />
                <Animation />
                <Legend position="bottom" rootComponent={Root} />
                <Title text="Olimpic Medals in 2008" />
                <Stack />
            </Chart>

        </div>

    );
}

export default Barchart;