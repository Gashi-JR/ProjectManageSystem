
import { Timeline } from 'antd';
<<<<<<< HEAD
const Timelines = () => (
    <Timeline
        items={[
            {
                color: 'green',
                children: 'Create a services site 2015-09-01',
            },
            {
                color: 'green',
                children: 'Create a services site 2015-09-01',
            },
            {
                color: 'red',
                children: (
                    <>
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </>
                ),
            },
            {
                children: (
                    <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </>
                ),
            },
            {
                color: 'gray',
                children: (
                    <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </>
                ),
            },
            {
                color: 'gray',
                children: (
                    <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </>
                ),
            },
            {
                color: '#00CCFF',

                children: <p>Custom color testing</p>,
            },
        ]}
    />
);
=======
import { log } from 'console';
const Timelines = (props: any) => {
    const getColor = () => {
        let r = Math.random()
        if (r >= 0 && r < 0.20)
            return 'green';
        else if (r >= 0.20 && r < 0.40)
            return 'red';
        else if (r >= 0.40 && r < 0.60)
            return 'gray';
        else if (r >= 0.60 && r < 0.80)
            return 'blue';
        else if (r >= 0.80 && r < 1)
            return '#00CCFF';

    }
    const items = []
    for (let i = props.userinfo.length; i >= 1; i--) {
        items.push({
            color: getColor(),
            children: props.userinfo[i]?.history,
        },)

        log(props.userinfo[i])
    }

    log(items)
    log(props)
    return (
        <Timeline
            items={items}
        />

    )


}
    ;
>>>>>>> e00c4e0 (登录注册模块)
export default Timelines;