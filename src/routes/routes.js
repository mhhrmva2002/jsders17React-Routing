import EmployeeDetail from '../Pages/Main/EmployeeDetail'
import Employees from '../Pages/Main/Employees'
import Home from '../Pages/Main/Home'
import MainRoot from '../Pages/Main/MainRoot'
import NotFound from '../Pages/Main/NotFound'
export const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>,
            },
            {
                path:'employees',
                element:<Employees/>,
            },
            {
                path:'employeeDetail',
                element:<EmployeeDetail/>,
            },
            {
                path:'*',
                element:<NotFound/>,
            },
        ]
    }
]