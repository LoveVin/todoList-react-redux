import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNCOMPLETE} from './filterOptions';

const fetchFilterOptions = ()=>{
    return [
        { label: SHOW_ALL, value: '全部' },
        { label: SHOW_COMPLETE, value: '已完成' },
        { label: SHOW_UNCOMPLETE, value: '未完成' }
    ]
}

export default fetchFilterOptions