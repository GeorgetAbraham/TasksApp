export interface Task {
    id:string,
    title:string,
    description:string,
    priority:number,
    "start-date":string,
    "end-date":string,
    "status":string
};

export const tasks: {[key:string]:Task}={
    1:{
        id:"1",
        title:"task1",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:2,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"1-10-23",
        "status":"not started",
        // status is failed, ongoing, not started,successful
    },
    2:{
        id:"2",
        title:"task2",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:1,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"ongoing",
        // status is failed, pending, ongoing, not started
    },
    3:{
        id:"3",
        title:"task3",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:1,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"failed",
        // status is failed, pending, ongoing, not started,succesful
    },
    4:{
        id:"4",
        title:"task4",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:0,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"successful",
        // status is failed, pending, ongoing, not started,completed
    },
    5:{
        id:"5",
        title:"task5",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:0,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"ongoing",
        // status is failed, successful ongoing, not started
    },
    6:{
        id:"6",
        title:"task6",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:1,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"not started",
        // status is failed, pending, ongoing, not started
    },
    7:{
        id:"7",
        title:"task7",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:2,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"failed",
        // status is failed, pending, ongoing, not started
    },
    8:{
        id:"8",
        title:"task8",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:0,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"ongoing",
        // status is failed, pending, ongoing, not started
    },
    9:{
        id:"9",
        title:"task9",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:0,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"not started",
        // status is failed, pending, ongoing, not started
    },
    10:{
        id:"10",
        title:"task10",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:2,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"successful",
        // status is failed, pending, ongoing, not started
    },
    11:{
        id:"11",
        title:"task11",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:2,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"ongoing",
        // status is failed, pending, ongoing, not started
    },
    12:{
        id:"12",
        title:"task12",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:1,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"failed",
        // status is failed, pending, ongoing, not started
    },
    13:{
        id:"13",
        title:"task13",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:0,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"successful",
        // status is failed, pending, ongoing, not started
    },
    14:{
        id:"14",
        title:"task14",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:2,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"not started",
        // status is failed, pending, ongoing, not started
    },
    15:{
        id:"15",
        title:"task15",
        description:" generic description which should later allow embedding of links , should prevent script injection",
        priority:1,
        // priority is low, medium,high {0,1,2} maybe use enum?
        "start-date":"",
        "end-date":"",
        "status":"not started",
        // status is failed, pending, ongoing, not started
    },


}