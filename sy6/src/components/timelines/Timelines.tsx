
import { Timeline } from 'antd';
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
export default Timelines;