export function getMenus(key){
    switch(key){
        case 'infosearch':
            return[
                { title: '历史凌灾数据查询', key: 'History', icon: 'search' },
                { title: '历史凌情数据查询', key: 'HistoryIceRun', icon: 'search' },
                { title: '工情数据查询', key: 'gqproject', icon: 'search' },
                { title: '水情数据查询', key: 'waterdata', icon: 'search' },
                { title: '遥感信息数据查询', key: 'RemoteInfo', icon: 'search' }
            ]
        case 'icerunperception':
            return[
                { title: '凌情动态数据', key: 'DynamicData', icon: 'alert' },
                { title: '移动式凌情检测', key: 'MoveMonitor', icon: 'alert' },
                { title: '定点式凌情检测', key: 'FixdeMonitor', icon: 'alert' },
                { title: '巡查上报情况查询', key: 'PatrolReport', icon: 'alert' }
            ]
        case 'disasterearlywarning':
            return[
                { title: '凌汛洪水风险分析', key: 'FloodRiskAnalyze', icon: 'thunderbolt' },
                { title: '封开河预报', key: 'BefrozenThawForecast', icon: 'thunderbolt' },
                { title: '凌汛灾害预警', key: 'DisasterEarlywarning', icon: 'thunderbolt' },
                { title: '凌灾损失评估', key: 'LossAssess', icon: 'thunderbolt' }
            ]
        case 'emergencymanage':
            return[
                { title: '无人机应急监测', key: 'UAVmonitor', icon: 'setting' },
                { title: '防凌联合调度', key: 'IcePreventionDispatch', icon: 'setting' },
                { title: '破冰排凌方案管理', key: 'IceBreaking', icon: 'setting' }
            ]
        case 'decisionanalysis':
            return[
                { title: '凌灾防控方案智能优选', key: 'PreventionSchemesOptimization', icon: 'rise' },
                { title: '分凌区生态评价', key: 'Evaluate', icon: 'rise' },
                { title: '凌汛过程及凌灾情景推演', key: 'SceneDeduce', icon: 'rise' },
                { title: '凌灾防控效果综合评价', key: 'ResultEvaluate', icon: 'rise' }
            ]
    }
}