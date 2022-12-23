const initialDataUV = {
    UvData :[
    {
        name : 'system 1',
        uvConso : 7000,
        uvSavings : 3000,
        dateChange : "October 2, 2022",
        daysRemaining : 200,
    },
    {
        name : 'system 2',
        uvConso : 8000,
        uvSavings : 5000,
        dateChange : "November 2, 2020",
        daysRemaining : 200,
    },
    {
        name : 'system 3',
        uvConso : 15000,
        uvSavings : 1500,
        dateChange : "October 2, 2021",
        daysRemaining : -200,
    },
]
};

const UvDataReducer = (state = initialDataUV, action) => {
    return state;
  }

export default UvDataReducer;