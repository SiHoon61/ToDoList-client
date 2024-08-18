// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
        }}
        axisTop={{
            orient: 'top',
            tickSize: 0,
            tickPadding: 15,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle',
            format: (value) => {
                const point = data[0].data.find(d => d.x === value);
                return point ? `${point.y}°` : '';
            },
            tickValues: data[0].data.map(d => d.x),
        }}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle',
            tickValues: data[0].data.map(d => d.x),
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors="#CFD5DD"  // 회색으로 선 색상을 변경합니다.
        lineWidth={3}
        pointSize={6}  // 동그라미 크기를 줄입니다.
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        enableSlices={false}
        isInteractive={false}  // 인터랙션을 비활성화하여 라벨이 항상 보이도록 설정
        theme={{
            axis: {
                ticks: {
                    text: {
                        fontSize: 14, // 폰트 크기 조정
                        fill: '#000000', // 텍스트 색상 (검정)
                    },
                },
            },
        }}
    />
)
export default MyResponsiveLine;