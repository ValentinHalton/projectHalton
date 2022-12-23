import { configureStore } from '@reduxjs/toolkit'

import hourlyDataAirflowReducer from "./features/LineChart/lineChartSlice";
import TotalConsumptionDataReducer from './features/TotalConsumptionCard/totalConsumptionCardSlice'
import {HoodShareReducer, colorsReducer} from "./features/ShareTabCard/shareTabCardSlice";
import HoodSavingsReducer from "./features/SavingBarChart/savingBarChartSlice";
import usersReducer from "./features/TotalConsumptionCard/usersSlice"
import PostReducer from "./features/TotalConsumptionCard/postSlice";
import MeteoReducer from "./features/TotalConsumptionCard/meteoSlice"
import UvDataReducer from './featuresUV/BarChart/BarChartSlice';
export default configureStore({
    
  reducer: {
    hourlyDataAirflow: hourlyDataAirflowReducer,
    TotalConsumptionData : TotalConsumptionDataReducer,
    HoodShareData : HoodShareReducer,
    Colors : colorsReducer,
    HoodSavingsData : HoodSavingsReducer,
    users: usersReducer,
    meteo : MeteoReducer,
    post : PostReducer,
    HoodUvData : UvDataReducer,

  },
})