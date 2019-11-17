import React from 'react';
import { PageHeader } from 'antd';

import { Icon } from 'antd';


const GuideHeader = () => {
    return (
        <PageHeader title={<Icon type="block" />} subTitle="Style Guide Explorations"  style={{margin: '0 0 20px 0', border: '1px solid rgb(235, 237, 240)'}} />
    );
};

export default GuideHeader;