const HoodShareInitState = {
    hoodshare :[
    {
        key: "M02_H13",
        value: 3038.493055555555 ,
    },
    {
        key: "M02_H14",
        value: 225894.4834640523,
    },
    {
        key: "M02_H12",
        value:10370.140277777777,
    },
    {
        key: "M02_H08",
        value:80.8777777777778,
    },
    {
        key: "M02_H11",
        value: 29.170833333333334,
    },
    {
        key: "M02_H10",
        value: 341583.6612745098,
    },
    {
        key: "M02_H09",
        value:60.67916666666666,
    },
    {
        key: "M02_H06",
        value:18.88888888888889,
    },
    {
        key: "M02_H07",
        value:664371.6169444445,
    },
    {
        key: "M02_H03",
        value: 37.44166666666666,
    },
    {
        key: "M02_H04",
        value: 244.225,
    },
    {
        key: "M02_H02",
        value: 1330.2777777777778,
    },
    {
        key: "M02_H05",
        value:  0,
    },
    {
        key: "M02_H01",
        value:548302.7323529411,
    },
    {
        key: "M01_H10",
        value: 602457.3513888889,
    },
    {
        key: "M01_H09",
        value: 6076.077222222223,
    },
    {
        key: "M01_H12",
        value: 2561.4366666666665,
    },
    {
        key: "M01_H08",
        value:574903.2866666666,
    },
    {
        key: "M01_H04",
        value: 3981.0458333333336,
    },
    {
        key: "M01_H07",
        value: 545824.7654465162,
    },
    {
        key: "M01_H05",
        value:458599.4751117653,
    },
    {
        key: "M01_H06",
        value:223634.9436340094,
    },
    {
        key: "M01_H11",
        value: 363560.0971933268,
    },
    {
        key: "M01_H01",
        value:204656.17871933267,
    },
    {
        key: "M01_H03",
        value: 5204.388888888889,
    },{
        key: "M01_H02",
        value: 339189.86164976563,
    },

]
};

const colors = {
    color : [
        {
            name:"red",
        },
        {
            name:"blue",
        },
        {
            name:"green",
        },
        {
            name:"purple",
        },
        {
            name:"yellow",
        },
        {
            name:"limegreen",
        },
        {
            name:"orange",
        },
        {
            name:"brown",
        },
        {
            name:"grey",
        },
        {
            name:"black",
        },
        {
            name:"pink",
        },
        {
            name:"lightblue",
        },
        {
            name:"lightgreen",
        },
        {
            name:"darkblue",
        },
        {
            name:"darkgreen",
        },
        {
            name:"darkred",
        },
        {
            name:"magenta",
        },
        {
            name:"#B284BE",
        },
        {
            name:"#8A3324",
        },
        {
            name:"#DE3163",
        },
        {
            name:"#1DACD6",
        },
        {
            name:"#FF3800",
        },
        {
            name:"#8B008B",
        },
        {
            name:"#87421F",
        },
        {
            name:"#BF00FF",
        },
        {
            name:"#6C541E",
        },
    
    ]
   
    
};

const colorsReducer = (state = colors,action)=>{
    return state;
}

const HoodShareReducer = (state = HoodShareInitState, action) => {
  return state;
}

export { HoodShareReducer,colorsReducer};

